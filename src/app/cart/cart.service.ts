import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { Subject } from 'rxjs';
import { Art } from '../arts/art.model';
import { CartItem } from './cart-item.model';
import { LoginService } from '../shared/login.service';
import { AppConstants } from '../shared/app-constants';
import { TSMap } from "typescript-map";
import { ToastrService } from 'ngx-toastr';
import { Address } from '../shared/address.model';
import { Order } from '../shared/order.model';
import { Router } from '@angular/router';
import { OrderDetails } from '../shared/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsMap = new TSMap<string, CartItem>();
  order = {} as Order;
  selectedAddress: Address;
  subTotal: number;
  grandTotal: number;
  cartCount: number;
  cartUpdated = new Subject<number>();

  constructor(private storageService: LocalStorageService, private appConstants: AppConstants,
    private loginService: LoginService, private toastr: ToastrService, private router: Router) {
  }

  addToCart(art: Art, isOrginal: boolean) {
    if (this.cartItemsMap && this.cartItemsMap.length >= 10) {
      this.toastr.error("More than 10 product's cannot added in cart.");
      return;
    }
    let isAdded: string = this.addItemToCart(art, isOrginal);
    if (isAdded == "ORIGINAL_ALREADY_ADDED") {
      this.toastr.info("Original art already added to cart.");
    } else if (isAdded == "ADDED") {
      this.toastr.info(art.title + " added to cart.");
    } else {
      this.toastr.error("Error occurred while adding product to cart.");
    }
  }

  buyProduct(art: Art, isOrginal: boolean) {
    if (this.cartItemsMap && this.cartItemsMap.length >= 10) {
      this.toastr.error("More than 10 product's cannot added in cart.");
      return;
    }
    let isAdded: string = this.addItemToCart(art, isOrginal);
    if (isAdded == "ADDED") {
      this.toastr.info(art.title + " added to cart");
      this.checkoutOrder();
    } else {
      this.toastr.error("Error occurred while adding product to cart.");
    }
  }

  addItemToCart(selectedArt: Art, isOriginal: boolean) {
    let isAdded: string = "NOT_ADDED";
    let key: string = selectedArt.oid + "" + isOriginal;
    let cartItem: CartItem = this.cartItemsMap.get(key);
    // If art already added to cart
    if (cartItem) {
      if (cartItem.product.oid === selectedArt.oid) {
        if (isOriginal) {
          return "ORIGINAL_ALREADY_ADDED";
        }
        cartItem.qty = cartItem.qty + 1;
        cartItem.isOrginal = isOriginal;
        this.cartItemsMap.set(key, cartItem);
        isAdded = "ADDED";
      }
    } else {
      // For the first time adding art to cart
      cartItem = new CartItem(selectedArt, 1, isOriginal);
      this.cartItemsMap.set(key, cartItem);
      isAdded = "ADDED";
    }
    this.onCartChange();
    return isAdded;
  }

  updateQty(cartItem: CartItem, qty: number) {
    let key: string = cartItem.product.oid + "" + cartItem.isOrginal;
    cartItem.qty = qty;
    this.cartItemsMap.set(key, cartItem);
    this.onCartChange();
  }

  removeCartItem(cartItem: CartItem) {
    let key: string = cartItem.product.oid + "" + cartItem.isOrginal;
    this.cartItemsMap.delete(key);
    this.onCartChange();
  }

  onCartChange() {
    if (this.cartItemsMap) {
      this.calculateCartPrice();
      this.cartCount = this.cartItemsMap.length;
      this.updateCartToLocalStorage();
      this.cartUpdated.next(this.cartCount);
    }
  }


  // *********** Fetching Service ************

  getCartCount() {
    if (this.cartCount) {
      return this.cartCount;
    } else {
      return this.storageService.getLocalStorage(this.appConstants.CART_COUNT);
    }
  }

  getCartItemsMap() {
    if (!this.cartItemsMap || this.cartItemsMap.values.length <= 0) {
      this.reloadCartFromLocalStorage();
      this.calculateCartPrice();
      this.cartCount = this.cartItemsMap.length;
    }
    return this.cartItemsMap;
  }

  getSelectedAddress() {
    if (this.selectedAddress) {
      return this.selectedAddress;
    } else {
      return this.storageService.getLocalStorage(this.appConstants.SELECTED_ADDRESS);
    }
  }

  reloadCartFromLocalStorage() {
    if (this.cartItemsMap.length == 0) {
      this.cartItemsMap = new TSMap<string, CartItem>()
        .fromJSON(this.storageService.getLocalStorage(this.appConstants.CART_ITEMS_MAP), false);
    }
  }

  calculateCartPrice() {
    this.order.subTotal = 0.0;
    if (this.cartItemsMap) {
      for (let item of this.cartItemsMap.values()) {
        if (item.product != null) {
          if (item.isOrginal) {
            this.order.subTotal = this.order.subTotal + (item.product.price * item.qty);
          } else {
            this.order.subTotal = this.order.subTotal + (item.product.copyPrice * item.qty);
          }
        }
      }
    }
    this.grandTotal = this.order.subTotal;
    this.order.grandTotal = this.grandTotal;
    return this.grandTotal;
  }

  updateCartToLocalStorage() {
    this.storageService.setLocalStorage(this.appConstants.CART_COUNT, this.cartCount);
    this.storageService.setLocalStorage(this.appConstants.CART_ITEMS_MAP, this.cartItemsMap.toJSON());
  }

  checkoutOrder() {
    this.initilizeOrder();
    if (!this.loginService.isLoggedin) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/deliveryAddress']);
    }
  }

  getOrder() {
    if (!this.order || !this.order.orderDetails || this.order.orderDetails.length <= 0) {
      this.initilizeOrder();
      if (!this.order.delivaryAddress) {
        this.order.delivaryAddress = this.getSelectedAddress();
      }
    }
    return this.order;
  }

  initilizeOrder() {
    this.order = {} as Order;
    this.order.orderDetails = [];
    this.order.orderDate = new Date();
    this.order.orderStatus = "INITIAL";
    this.calculateCartPrice();
    this.order.deliveryCharges = 100;
    this.grandTotal = this.grandTotal + this.order.deliveryCharges;
    this.order.grandTotal = this.grandTotal;
    for (let item of this.cartItemsMap.values()) {
      if (item.product != null) {
        // $oid, $art: Art, $quantity, $price, $isOrginal, $packingPrice, $shippingPrice
        this.order.orderDetails.push(new OrderDetails(null, item.product, item.qty, item.product.price, item.isOrginal,
          null, null));
      }
    }

  }

  setSelectedAddress(address: Address) {
    this.selectedAddress = address;
    this.storageService.setLocalStorage(this.appConstants.SELECTED_ADDRESS, address);
    if (!this.order || this.order.orderDetails.length <= 0) {
      this.initilizeOrder();
    }
    this.order.delivaryAddress = address;
  }

  createOrder() {
    // Create Order
    this.cartItemsMap = new TSMap<string, CartItem>();
    this.cartCount = null;
    this.selectedAddress = {} as Address;
    this.storageService.clearLocalStorage(this.appConstants.CART_COUNT);
    this.storageService.clearLocalStorage(this.appConstants.CART_ITEMS_MAP);
    this.storageService.clearLocalStorage(this.appConstants.SELECTED_ADDRESS);
  }
}