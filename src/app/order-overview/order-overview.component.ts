import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart/cart-item.model';
import { TSMap } from 'typescript-map';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { Address } from '../shared/address.model';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  cartItemsMap = new TSMap<string, CartItem>();
  order: Order = {} as Order;
  selectedAddress: Address = {} as Address;
  grandTotal: number;

  constructor(private toastr: ToastrService, private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    // Getting Cart Details
    this.cartItemsMap = this.cartService.getCartItemsMap();
    this.grandTotal = this.cartService.grandTotal;
    this.cartService.cartUpdated.subscribe((count: number) => {
      this.cartItemsMap = this.cartService.cartItemsMap;
      this.grandTotal = this.cartService.grandTotal;
    });
    // Getting Selected Address
    this.selectedAddress = this.cartService.getSelectedAddress();
    if (!this.selectedAddress) {
      this.selectedAddress = {} as Address;
    }
    this.order = this.cartService.getOrder();
  }

  placeOrder() {
    this.cartService.createOrder();
    this.router.navigate(['/orderInfo']);
    this.toastr.info("Order has been created");
  }
}
