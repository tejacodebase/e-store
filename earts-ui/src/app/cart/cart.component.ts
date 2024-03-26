import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service'; 
import { Router, RouterModule } from '@angular/router'; 
import { LoginService } from '../shared/login.service';
import { TSMap } from 'typescript-map';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtsService } from '../arts/arts.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemsMap = new TSMap<string, CartItem>();
  grandTotal: number = 0;

  constructor(private cartService: CartService, private loginService: LoginService,
     private artsService: ArtsService, private router: Router) {
      // private toastr: ToastrService
  }

  ngOnInit() {
    // DUMMY CODE 
    // this.artsService.artsUpdated.subscribe((arts: Arts[]) => {
    //   var counter = 0;
    //   arts.forEach((art: Arts) => {
    //     if(counter < 6){
    //       counter++;
    //       this.cartService.addItemToCart(art, counter >3 ? true : false);
    //     }
    //   });
    // })

    // this.artsService.getArts().subscribe((arts: Arts[]) => {
    //   this.artsService.artsUpdated.next(arts);
    // })
    // DUMMY CODE 
    
    try {
      this.cartItemsMap = this.cartService.getCartItemsMap();
      this.grandTotal = this.cartService.grandTotal;
      this.cartService.cartUpdated.subscribe((count: number) => {
        this.cartItemsMap = this.cartService.cartItemsMap;
        this.grandTotal = this.cartService.grandTotal;
      });
    } catch (err) { 
    }
  }

  updateQty(cartItem: CartItem, qty: number) {
    // , qty: number
    // var qty = cartItem.qty;
    this.cartService.updateQty(cartItem, qty);
    // this.toastr.success('Quantity Updated.');
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    // this.toastr.warning('Item has been removed.', 'Success');
  }

  checkout() {
    if (!this.loginService.isLoggedin) {
      this.router.navigate(['/login']);
      // this.toastr.warning('Please login first to order.');
    } else {
      this.cartService.initilizeOrder();
      this.router.navigate(['/deliveryAddress']);
    }
  }

  refreshCart() {
  }

  onArtQuantityChange(event: Event) {
    console.log(event.returnValue);
    
  }
}
