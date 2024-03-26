import { Component } from '@angular/core';
import { Order } from '../shared/order.model';
import { Address } from '../shared/address.model';
import { CartItem } from '../cart/cart-item.model';
import { TSMap } from 'typescript-map';
import { CartService } from '../cart/cart.service'; 
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule ],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css'
})
export class OrderOverviewComponent {
  cartItemsMap = new TSMap<string, CartItem>();
  order: Order = {} as Order;
  selectedAddress: Address = {} as Address;
  grandTotal: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    // private toastr: ToastrService, 
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
    // this.toastr.info("Order has been created");
  } 
}
