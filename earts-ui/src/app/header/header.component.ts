import { Component } from '@angular/core';
import {CartService} from "../cart/cart.service";
import {LoginService} from "../login/login.service";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ToastModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount: number = 0;
  public isCollapsed = true;
  public isLoggedin = false;

  constructor(private cartService: CartService, private loginService: LoginService) { }

  ngOnInit() {
    // this.cartCount = this.cartService.getCartCount();
    // this.cartService.cartUpdated.subscribe((count: number) => {
    //   this.cartCount = count;
    // });
    // this.isLoggedin = this.loginService.isLoggedin;
    // this.cartService.reloadCartFromLocalStorage();
  }

  

}
