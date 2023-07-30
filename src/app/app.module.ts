import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArtsComponent } from './arts/arts.component';
import { ArtCategoriesComponent } from './art-categories/art-categories.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartupComponent } from './startup/startup.component';
import { UserComponent } from './users/user/user.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { GalleryArtsComponent } from './gallery-arts/gallery-arts.component';
import { GalleryService } from './gallery/gallery.service';
import { ArtCategoryService } from './art-categories/art-category.service';
import { GalleryArtDetailsComponent } from './gallery-art-details/gallery-art-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { CommonModule } from '@angular/common';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { OrderInfoComponent } from './order-info/order-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    UserInfoComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    ArtsComponent,
    ArtCategoriesComponent,
    SettingsComponent,
    UsersComponent,
    MessagesComponent,
    DashboardComponent,
    SalesReportComponent,
    HeaderComponent,
    FooterComponent,
    StartupComponent,
    UserComponent,
    GalleryArtsComponent,
    MyOrdersComponent,
    ErrorPageComponent,
    OrderDetailsComponent,
    GalleryArtDetailsComponent,
    ContactUsComponent,
    AboutUsComponent,
    CartComponent,
    DeliveryDetailsComponent,
    OrderOverviewComponent,
    OrderInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SlideshowModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [GalleryService, ArtCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
