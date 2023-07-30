import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { ArtCategory } from './art-categories/art-category.model';
import { ArtsComponent } from './arts/arts.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { StartupComponent } from './startup/startup.component';
import { GalleryArtsComponent } from './gallery-arts/gallery-arts.component';
import { GalleryArtDetailsComponent } from './gallery-art-details/gallery-art-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { OrderInfoComponent } from './order-info/order-info.component';

const routes: Routes = [
  { path: '', component: StartupComponent },
  { path: 'startup', component: StartupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'galleryArts', component: GalleryArtsComponent },
  { path: 'artDetails', component: GalleryArtDetailsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'deliveryDetails', component: DeliveryDetailsComponent },
  { path: 'orderOverview', component: OrderOverviewComponent },
  { path: 'orderInfo', component: OrderInfoComponent },

  // Admin Paths 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'artCategory', component: ArtCategory },
  { path: 'settings', component: SettingsComponent },
  { path: 'messages', component: MessagesComponent },
  {
    path: 'orders', component: OrdersComponent, children: [
      { path: 'details', component: OrderDetailsComponent }
    ]
  },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id', component: UserComponent }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
