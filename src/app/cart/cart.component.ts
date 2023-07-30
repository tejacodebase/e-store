import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service';
import { TSMap } from 'typescript-map';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItemsMap = new TSMap<string, CartItem>();
  grandTotal: number;

  constructor(private toastr: ToastrService, private cartService: CartService, private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit() {
    this.cartItemsMap = this.cartService.getCartItemsMap();
    this.grandTotal = this.cartService.grandTotal;
    this.cartService.cartUpdated.subscribe((count: number) => {
      this.cartItemsMap = this.cartService.cartItemsMap;
      this.grandTotal = this.cartService.grandTotal;
    });
  }

  updateQty(cartItem: CartItem, qty: number) {
    this.cartService.updateQty(cartItem, qty);
    this.toastr.success('Quantity Updated.');
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    this.toastr.warning('Item has been removed.', 'Success');
  }

  checkout() {
    if (!this.loginService.isLoggedin) {
      this.router.navigate(['/login']);
      this.toastr.warning('Please login first to order.');
    } else {
      this.cartService.initilizeOrder();
      this.router.navigate(['/deliveryAddress']);
    }
  }

  refreshCart() {
  }
}
