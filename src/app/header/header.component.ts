import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: number;
  public isCollapsed = true;
  public isLoggedin = false;

  constructor(private cartService: CartService, private loginService: LoginService) { }

  ngOnInit() {
    this.cartCount = this.cartService.getCartCount();
    this.cartService.cartUpdated.subscribe((count: number) => {
      this.cartCount = count;
    });
    this.isLoggedin = this.loginService.isLoggedin;
    this.cartService.reloadCartFromLocalStorage();
  }
}
