import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StartupComponent} from "./startup/startup.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ArtsComponent } from './arts/arts.component';
import { ArtDetailsComponent } from './arts/art-details/art-details.component';
import { MemberComponent } from './member/member.component';
import { ArtViewComponent } from './art-view/art-view.component';
import { CartComponent } from './cart/cart.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'art-view/:uuid', component: ArtViewComponent },
  { path: 'member', component: MemberComponent },
  { path: 'startup', component: StartupComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-overview', component: OrderOverviewComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'arts', component: ArtsComponent , children: [
      { path: 'new', component: ArtDetailsComponent },
      { path: ':uuid', component: ArtDetailsComponent },
      { path: ':uuid/edit', component: ArtDetailsComponent }
    ]
  }
];
