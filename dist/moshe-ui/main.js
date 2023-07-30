(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <h2 style=\"text-decoration: underline; font-family: fantasy;\">About Me</h2>\n\n  <br/>\n\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\" style=\"font-family: 'Kaushan Script', cursive;\">\n      <p style=\"font-size: 15px;\">\n        Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the\n        template on the preview page. The theme is open source, and you can use it for any purpose, personal or\n        commercial.\n        This theme features stock photos by Gratisography along with a custom Google Maps skin courtesy of Snazzy Maps.\n        Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.\n      </p>\n\n      <p style=\"font-size: 15px;\">\n        Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the\n        template on the preview page. The theme is open source, and you can use it for any purpose, personal or\n        commercial.\n        This theme features stock photos by Gratisography along with a custom Google Maps skin courtesy of Snazzy Maps.\n        Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.\n      </p>\n\n      <p style=\"font-size: 15px;\">\n        Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the\n        template on the preview page. The theme is open source, and you can use it for any purpose, personal or\n        commercial.\n        This theme features stock photos by Gratisography along with a custom Google Maps skin courtesy of Snazzy Maps.\n        Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.\n      </p>\n    </div>\n\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n      <img src=\"assets/images/mosheDayan.png\" style=\"border-radius: 1%;\"/>\n    </div>\n  </div>\n</div>\n\n<div style=\"margin-bottom: 150px;\"></div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _art_categories_art_category_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./art-categories/art-category.model */ "./src/app/art-categories/art-category.model.ts");
/* harmony import */ var _arts_arts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./arts/arts.component */ "./src/app/arts/arts.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./orders/order-details/order-details.component */ "./src/app/orders/order-details/order-details.component.ts");
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./startup/startup.component */ "./src/app/startup/startup.component.ts");
/* harmony import */ var _gallery_arts_gallery_arts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gallery-arts/gallery-arts.component */ "./src/app/gallery-arts/gallery-arts.component.ts");
/* harmony import */ var _gallery_art_details_gallery_art_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gallery-art-details/gallery-art-details.component */ "./src/app/gallery-art-details/gallery-art-details.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _delivery_details_delivery_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./delivery-details/delivery-details.component */ "./src/app/delivery-details/delivery-details.component.ts");
/* harmony import */ var _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./order-overview/order-overview.component */ "./src/app/order-overview/order-overview.component.ts");
/* harmony import */ var _order_info_order_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./order-info/order-info.component */ "./src/app/order-info/order-info.component.ts");




























var routes = [
    { path: '', component: _startup_startup_component__WEBPACK_IMPORTED_MODULE_19__["StartupComponent"] },
    { path: 'startup', component: _startup_startup_component__WEBPACK_IMPORTED_MODULE_19__["StartupComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'userInfo', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"] },
    { path: 'myOrders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_13__["MyOrdersComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'galleryArts', component: _gallery_arts_gallery_arts_component__WEBPACK_IMPORTED_MODULE_20__["GalleryArtsComponent"] },
    { path: 'artDetails', component: _gallery_art_details_gallery_art_details_component__WEBPACK_IMPORTED_MODULE_21__["GalleryArtDetailsComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__["AboutUsComponent"] },
    { path: 'contactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ContactUsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__["CartComponent"] },
    { path: 'deliveryDetails', component: _delivery_details_delivery_details_component__WEBPACK_IMPORTED_MODULE_25__["DeliveryDetailsComponent"] },
    { path: 'orderOverview', component: _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_26__["OrderOverviewComponent"] },
    { path: 'orderInfo', component: _order_info_order_info_component__WEBPACK_IMPORTED_MODULE_27__["OrderInfoComponent"] },
    // Admin Paths 
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
    { path: 'arts', component: _arts_arts_component__WEBPACK_IMPORTED_MODULE_12__["ArtsComponent"] },
    { path: 'artCategory', component: _art_categories_art_category_model__WEBPACK_IMPORTED_MODULE_11__["ArtCategory"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"] },
    {
        path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_10__["OrdersComponent"], children: [
            { path: 'details', component: _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailsComponent"] }
        ]
    },
    {
        path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], children: [
            { path: ':id', component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_17__["ErrorPageComponent"], data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Moshe Dayan';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _arts_arts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./arts/arts.component */ "./src/app/arts/arts.component.ts");
/* harmony import */ var _art_categories_art_categories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./art-categories/art-categories.component */ "./src/app/art-categories/art-categories.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sales-report/sales-report.component */ "./src/app/sales-report/sales-report.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./startup/startup.component */ "./src/app/startup/startup.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./orders/order-details/order-details.component */ "./src/app/orders/order-details/order-details.component.ts");
/* harmony import */ var _gallery_arts_gallery_arts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./gallery-arts/gallery-arts.component */ "./src/app/gallery-arts/gallery-arts.component.ts");
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./gallery/gallery.service */ "./src/app/gallery/gallery.service.ts");
/* harmony import */ var _art_categories_art_category_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./art-categories/art-category.service */ "./src/app/art-categories/art-category.service.ts");
/* harmony import */ var _gallery_art_details_gallery_art_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./gallery-art-details/gallery-art-details.component */ "./src/app/gallery-art-details/gallery-art-details.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _delivery_details_delivery_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./delivery-details/delivery-details.component */ "./src/app/delivery-details/delivery-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order-overview/order-overview.component */ "./src/app/order-overview/order-overview.component.ts");
/* harmony import */ var _order_info_order_info_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order-info/order-info.component */ "./src/app/order-info/order-info.component.ts");










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_13__["UserInfoComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _arts_arts_component__WEBPACK_IMPORTED_MODULE_17__["ArtsComponent"],
                _art_categories_art_categories_component__WEBPACK_IMPORTED_MODULE_18__["ArtCategoriesComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_23__["SalesReportComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                _startup_startup_component__WEBPACK_IMPORTED_MODULE_26__["StartupComponent"],
                _users_user_user_component__WEBPACK_IMPORTED_MODULE_27__["UserComponent"],
                _gallery_arts_gallery_arts_component__WEBPACK_IMPORTED_MODULE_31__["GalleryArtsComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_28__["MyOrdersComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_29__["ErrorPageComponent"],
                _orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_30__["OrderDetailsComponent"],
                _gallery_art_details_gallery_art_details_component__WEBPACK_IMPORTED_MODULE_34__["GalleryArtDetailsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_35__["ContactUsComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_36__["AboutUsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_37__["CartComponent"],
                _delivery_details_delivery_details_component__WEBPACK_IMPORTED_MODULE_38__["DeliveryDetailsComponent"],
                _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_40__["OrderOverviewComponent"],
                _order_info_order_info_component__WEBPACK_IMPORTED_MODULE_41__["OrderInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_4__["SlideshowModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_39__["CommonModule"]
            ],
            providers: [_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_32__["GalleryService"], _art_categories_art_category_service__WEBPACK_IMPORTED_MODULE_33__["ArtCategoryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/art-categories/art-categories.component.html":
/*!**************************************************************!*\
  !*** ./src/app/art-categories/art-categories.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/art-categories/art-categories.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/art-categories/art-categories.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydC1jYXRlZ29yaWVzL2FydC1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/art-categories/art-categories.component.ts":
/*!************************************************************!*\
  !*** ./src/app/art-categories/art-categories.component.ts ***!
  \************************************************************/
/*! exports provided: ArtCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCategoriesComponent", function() { return ArtCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtCategoriesComponent = /** @class */ (function () {
    function ArtCategoriesComponent() {
    }
    ArtCategoriesComponent.prototype.ngOnInit = function () {
    };
    ArtCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-art-categories',
            template: __webpack_require__(/*! ./art-categories.component.html */ "./src/app/art-categories/art-categories.component.html"),
            styles: [__webpack_require__(/*! ./art-categories.component.scss */ "./src/app/art-categories/art-categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtCategoriesComponent);
    return ArtCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/art-categories/art-category.model.ts":
/*!******************************************************!*\
  !*** ./src/app/art-categories/art-category.model.ts ***!
  \******************************************************/
/*! exports provided: ArtCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCategory", function() { return ArtCategory; });
var ArtCategory = /** @class */ (function () {
    function ArtCategory(oid, name, descreption, sortOrder, imageUrl, activeFlag, deleteFlag, imageOid, homeVisibility) {
        this.oid = oid;
        this.name = name;
        this.descreption = descreption;
        this.homeVisibility = homeVisibility;
        this.sortOrder = sortOrder;
        this.imageUrl = imageUrl;
        this.activeFlag = activeFlag;
        this.deleteFlag = deleteFlag;
        this.imageOid = imageOid;
    }
    return ArtCategory;
}());



/***/ }),

/***/ "./src/app/art-categories/art-category.service.ts":
/*!********************************************************!*\
  !*** ./src/app/art-categories/art-category.service.ts ***!
  \********************************************************/
/*! exports provided: ArtCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCategoryService", function() { return ArtCategoryService; });
/* harmony import */ var _art_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./art-category.model */ "./src/app/art-categories/art-category.model.ts");

var ArtCategoryService = /** @class */ (function () {
    function ArtCategoryService() {
        this.categories = [
            new _art_category_model__WEBPACK_IMPORTED_MODULE_0__["ArtCategory"](null, 'Portrait', null, null, 'assets/images/art-categories/1.jpg', null, null, null, null),
            new _art_category_model__WEBPACK_IMPORTED_MODULE_0__["ArtCategory"](null, 'Slider', null, null, 'assets/images/art-categories/2.jpg', null, null, null, null),
            new _art_category_model__WEBPACK_IMPORTED_MODULE_0__["ArtCategory"](null, 'Oil Painting', null, null, 'assets/images/art-categories/3.jpg', null, null, null, null),
            new _art_category_model__WEBPACK_IMPORTED_MODULE_0__["ArtCategory"](null, 'Abstract', null, null, 'assets/images/art-categories/4.jpg', null, null, null, null),
            new _art_category_model__WEBPACK_IMPORTED_MODULE_0__["ArtCategory"](null, 'Original', null, null, 'assets/images/art-categories/5.jpg', null, null, null, null),
            new _art_category_model__WEBPACK_IMPORTED_MODULE_0__["ArtCategory"](null, 'Water Color', null, null, 'assets/images/art-categories/6.jpg', null, null, null, null)
        ];
    }
    return ArtCategoryService;
}());



/***/ }),

/***/ "./src/app/arts/art.model.ts":
/*!***********************************!*\
  !*** ./src/app/arts/art.model.ts ***!
  \***********************************/
/*! exports provided: Art */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Art", function() { return Art; });
var Art = /** @class */ (function () {
    function Art(oid, title, imageUrl, shortDescreption, longDescreption, copyPrice, price, width, length, height, category, medium, weight, packageCharges, discount, sortOrder, imagePath, status, ref1, ref2, ref3, activeFlag, createdDate, modifiedDate, deletedDate, createdBy, modifiedBy, deletedBy, deleteFlag, imageOid, homeVisibility, artCategory) {
        this.oid = oid;
        this.title = title;
        this.shortDescreption = shortDescreption;
        this.longDescreption = longDescreption;
        this.copyPrice = copyPrice;
        this.price = price;
        this.width = width;
        this.length = length;
        this.height = height;
        this.category = category;
        this.medium = medium;
        this.weight = weight;
        this.homeVisibility = homeVisibility;
        this.packageCharges = packageCharges;
        this.discount = discount;
        this.sortOrder = sortOrder;
        this.imageUrl = imageUrl;
        this.imagePath = imagePath;
        this.status = status;
        this.ref1 = ref1;
        this.ref2 = ref2;
        this.ref3 = ref3;
        this.activeFlag = activeFlag;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.deletedDate = deletedDate;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
        this.deletedBy = deletedBy;
        this.deleteFlag = deleteFlag;
        this.imageOid = imageOid;
        this.artCategory = artCategory;
    }
    return Art;
}());



/***/ }),

/***/ "./src/app/arts/arts.component.html":
/*!******************************************!*\
  !*** ./src/app/arts/arts.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  arts works!\n</p>\n"

/***/ }),

/***/ "./src/app/arts/arts.component.scss":
/*!******************************************!*\
  !*** ./src/app/arts/arts.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydHMvYXJ0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/arts/arts.component.ts":
/*!****************************************!*\
  !*** ./src/app/arts/arts.component.ts ***!
  \****************************************/
/*! exports provided: ArtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsComponent", function() { return ArtsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtsComponent = /** @class */ (function () {
    function ArtsComponent() {
    }
    ArtsComponent.prototype.ngOnInit = function () {
    };
    ArtsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arts',
            template: __webpack_require__(/*! ./arts.component.html */ "./src/app/arts/arts.component.html"),
            styles: [__webpack_require__(/*! ./arts.component.scss */ "./src/app/arts/arts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtsComponent);
    return ArtsComponent;
}());



/***/ }),

/***/ "./src/app/arts/arts.service.ts":
/*!**************************************!*\
  !*** ./src/app/arts/arts.service.ts ***!
  \**************************************/
/*! exports provided: ArtsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsService", function() { return ArtsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _art_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./art.model */ "./src/app/arts/art.model.ts");



var ArtsService = /** @class */ (function () {
    function ArtsService() {
    }
    // shortDescreption: String, longDescreption: String, copyPrice: Number, price: Number,
    // width: Number, length: Number, height: Number, category: String, medium: String, weight: Number,
    // packageCharges: Number, discount: Number, sortOrder: Number, imagePath: String, status: String,
    // ref1: String, ref2: String, ref3: String, activeFlag: Boolean, createdDate: Date, modifiedDate: Date,
    // deletedDate: Date, createdBy: String, modifiedBy: String, deletedBy: String, deleteFlag: Boolean, imageOid: Number,
    // homeVisibility: Boolean, artCategory: ArtCategory
    ArtsService.prototype.getSampleArts = function () {
        if (!this.sampleArts) {
            this.sampleArts = [
                new _art_model__WEBPACK_IMPORTED_MODULE_2__["Art"](1, "Art 1", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
                new _art_model__WEBPACK_IMPORTED_MODULE_2__["Art"](2, "Art 2", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
                new _art_model__WEBPACK_IMPORTED_MODULE_2__["Art"](3, "Art 3", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
                new _art_model__WEBPACK_IMPORTED_MODULE_2__["Art"](4, "Art 4", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
                new _art_model__WEBPACK_IMPORTED_MODULE_2__["Art"](5, "Art 5", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
                new _art_model__WEBPACK_IMPORTED_MODULE_2__["Art"](6, "Art 6", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)
            ];
        }
        return this.sampleArts;
    };
    ArtsService.prototype.getArts = function () {
        return this.getSampleArts();
    };
    ArtsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtsService);
    return ArtsService;
}());



/***/ }),

/***/ "./src/app/cart/cart-item.model.ts":
/*!*****************************************!*\
  !*** ./src/app/cart/cart-item.model.ts ***!
  \*****************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(product, qty, isOrginal) {
        this.product = product;
        this.qty = qty;
        this.isOrginal = isOrginal;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <h5><span class=\"glyphicon glyphicon-shopping-cart\"></span> Shopping Cart</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\" *ngFor=\"let item of cartItemsMap.values()\">\n            <div class=\"col-xs-2\">\n              <img src=\"http://placehold.it/150x80\" class=\"img-responsive\" *ngIf=\"!item.product.imageUrl\" />\n              <img [src]=\"item.product.imageUrl\" class=\"img-responsive\" *ngIf=\"item.product.imageUrl\"\n                style=\"padding: 4px;\" />\n            </div>\n            <div class=\"col-xs-6\">\n              <h4 class=\"product-name\"><strong> {{ item.product.title }} </strong></h4>\n              <h5>\n                <span style=\"font-size: 10px; white-space: nowrap; color: orangered;\">\n                  {{ item.isOrginal ? 'Original' : 'Copy' }}\n                </span>\n                <br>\n                <small> {{ item.product.shortDescreption }} </small>\n              </h5>\n            </div>\n            <div class=\"col-xs-4\">\n              <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.qty\" style=\"text-align: center;\"\n                  (input)=\"updateQty(item, $event.target.value)\" [disabled]=\"item.isOrginal\">\n              </div>\n              <div class=\"col-xs-5\" style=\"text-align: center;\">\n                <h6>\n                  <strong> {{ item.isOrginal ? item.product.price : item.product.copyPrice }} x {{ item.qty }} </strong>\n                </h6>\n                <h5 style=\"color:brown; \">\n                  <i class=\"fa fa-inr rupee\"></i>\n                  <strong>\n                    {{ item.isOrginal ? item.product.price * item.qty : item.product.copyPrice * item.qty }}\n                  </strong>\n                </h5>\n              </div>\n              <div class=\"col-xs-4\">\n                <button class=\"btn btn-sm btn-danger\" (click)=\"removeCartItem(item)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n            <hr>\n          </div>\n\n          <div class=\"panel-footer\">\n            <div class=\"row text-center\">\n              <div class=\"col-xs-2\">\n                <button type=\"button\" class=\"btn btn-warning btn-block\" routerLink=\"/gallery\">\n                  Continue Shopping\n                </button>\n              </div>\n              <div class=\"col-xs-7\">\n                <h4 class=\"text-right\">Total <strong> <i class=\"fa fa-inr rupee\"></i> {{ grandTotal }} </strong>\n                </h4>\n              </div>\n              <div class=\"col-xs-3\">\n                <button type=\"button\" class=\"btn btn-success btn-block\" routerLink=\"/deliveryDetails\">\n                  Checkout\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var typescript_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typescript-map */ "./node_modules/typescript-map/index.js");
/* harmony import */ var typescript_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typescript_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/login.service */ "./src/app/shared/login.service.ts");







var CartComponent = /** @class */ (function () {
    function CartComponent(toastr, cartService, loginService, router) {
        this.toastr = toastr;
        this.cartService = cartService;
        this.loginService = loginService;
        this.router = router;
        this.cartItemsMap = new typescript_map__WEBPACK_IMPORTED_MODULE_3__["TSMap"]();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItemsMap = this.cartService.getCartItemsMap();
        this.grandTotal = this.cartService.grandTotal;
        this.cartService.cartUpdated.subscribe(function (count) {
            _this.cartItemsMap = _this.cartService.cartItemsMap;
            _this.grandTotal = _this.cartService.grandTotal;
        });
    };
    CartComponent.prototype.updateQty = function (cartItem, qty) {
        this.cartService.updateQty(cartItem, qty);
        this.toastr.success('Quantity Updated.');
    };
    CartComponent.prototype.removeCartItem = function (cartItem) {
        this.cartService.removeCartItem(cartItem);
        this.toastr.warning('Item has been removed.', 'Success');
    };
    CartComponent.prototype.checkout = function () {
        if (!this.loginService.isLoggedin) {
            this.router.navigate(['/login']);
            this.toastr.warning('Please login first to order.');
        }
        else {
            this.cartService.initilizeOrder();
            this.router.navigate(['/deliveryAddress']);
        }
    };
    CartComponent.prototype.refreshCart = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _shared_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.service.ts":
/*!**************************************!*\
  !*** ./src/app/cart/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cart_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-item.model */ "./src/app/cart/cart-item.model.ts");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/login.service */ "./src/app/shared/login.service.ts");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/app-constants */ "./src/app/shared/app-constants.ts");
/* harmony import */ var typescript_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typescript-map */ "./node_modules/typescript-map/index.js");
/* harmony import */ var typescript_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typescript_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_order_details_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/order-details.model */ "./src/app/shared/order-details.model.ts");











var CartService = /** @class */ (function () {
    function CartService(storageService, appConstants, loginService, toastr, router) {
        this.storageService = storageService;
        this.appConstants = appConstants;
        this.loginService = loginService;
        this.toastr = toastr;
        this.router = router;
        this.cartItemsMap = new typescript_map__WEBPACK_IMPORTED_MODULE_7__["TSMap"]();
        this.order = {};
        this.cartUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CartService.prototype.addToCart = function (art, isOrginal) {
        if (this.cartItemsMap && this.cartItemsMap.length >= 10) {
            this.toastr.error("More than 10 product's cannot added in cart.");
            return;
        }
        var isAdded = this.addItemToCart(art, isOrginal);
        if (isAdded == "ORIGINAL_ALREADY_ADDED") {
            this.toastr.info("Original art already added to cart.");
        }
        else if (isAdded == "ADDED") {
            this.toastr.info(art.title + " added to cart.");
        }
        else {
            this.toastr.error("Error occurred while adding product to cart.");
        }
    };
    CartService.prototype.buyProduct = function (art, isOrginal) {
        if (this.cartItemsMap && this.cartItemsMap.length >= 10) {
            this.toastr.error("More than 10 product's cannot added in cart.");
            return;
        }
        var isAdded = this.addItemToCart(art, isOrginal);
        if (isAdded == "ADDED") {
            this.toastr.info(art.title + " added to cart");
            this.checkoutOrder();
        }
        else {
            this.toastr.error("Error occurred while adding product to cart.");
        }
    };
    CartService.prototype.addItemToCart = function (selectedArt, isOriginal) {
        var isAdded = "NOT_ADDED";
        var key = selectedArt.oid + "" + isOriginal;
        var cartItem = this.cartItemsMap.get(key);
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
        }
        else {
            // For the first time adding art to cart
            cartItem = new _cart_item_model__WEBPACK_IMPORTED_MODULE_4__["CartItem"](selectedArt, 1, isOriginal);
            this.cartItemsMap.set(key, cartItem);
            isAdded = "ADDED";
        }
        this.onCartChange();
        return isAdded;
    };
    CartService.prototype.updateQty = function (cartItem, qty) {
        var key = cartItem.product.oid + "" + cartItem.isOrginal;
        cartItem.qty = qty;
        this.cartItemsMap.set(key, cartItem);
        this.onCartChange();
    };
    CartService.prototype.removeCartItem = function (cartItem) {
        var key = cartItem.product.oid + "" + cartItem.isOrginal;
        this.cartItemsMap.delete(key);
        this.onCartChange();
    };
    CartService.prototype.onCartChange = function () {
        if (this.cartItemsMap) {
            this.calculateCartPrice();
            this.cartCount = this.cartItemsMap.length;
            this.updateCartToLocalStorage();
            this.cartUpdated.next(this.cartCount);
        }
    };
    // *********** Fetching Service ************
    CartService.prototype.getCartCount = function () {
        if (this.cartCount) {
            return this.cartCount;
        }
        else {
            return this.storageService.getLocalStorage(this.appConstants.CART_COUNT);
        }
    };
    CartService.prototype.getCartItemsMap = function () {
        if (!this.cartItemsMap || this.cartItemsMap.values.length <= 0) {
            this.reloadCartFromLocalStorage();
            this.calculateCartPrice();
            this.cartCount = this.cartItemsMap.length;
        }
        return this.cartItemsMap;
    };
    CartService.prototype.getSelectedAddress = function () {
        if (this.selectedAddress) {
            return this.selectedAddress;
        }
        else {
            return this.storageService.getLocalStorage(this.appConstants.SELECTED_ADDRESS);
        }
    };
    CartService.prototype.reloadCartFromLocalStorage = function () {
        if (this.cartItemsMap.length == 0) {
            this.cartItemsMap = new typescript_map__WEBPACK_IMPORTED_MODULE_7__["TSMap"]()
                .fromJSON(this.storageService.getLocalStorage(this.appConstants.CART_ITEMS_MAP), false);
        }
    };
    CartService.prototype.calculateCartPrice = function () {
        this.order.subTotal = 0.0;
        if (this.cartItemsMap) {
            for (var _i = 0, _a = this.cartItemsMap.values(); _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.product != null) {
                    if (item.isOrginal) {
                        this.order.subTotal = this.order.subTotal + (item.product.price * item.qty);
                    }
                    else {
                        this.order.subTotal = this.order.subTotal + (item.product.copyPrice * item.qty);
                    }
                }
            }
        }
        this.grandTotal = this.order.subTotal;
        this.order.grandTotal = this.grandTotal;
        return this.grandTotal;
    };
    CartService.prototype.updateCartToLocalStorage = function () {
        this.storageService.setLocalStorage(this.appConstants.CART_COUNT, this.cartCount);
        this.storageService.setLocalStorage(this.appConstants.CART_ITEMS_MAP, this.cartItemsMap.toJSON());
    };
    CartService.prototype.checkoutOrder = function () {
        this.initilizeOrder();
        if (!this.loginService.isLoggedin) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/deliveryAddress']);
        }
    };
    CartService.prototype.getOrder = function () {
        if (!this.order || !this.order.orderDetails || this.order.orderDetails.length <= 0) {
            this.initilizeOrder();
            if (!this.order.delivaryAddress) {
                this.order.delivaryAddress = this.getSelectedAddress();
            }
        }
        return this.order;
    };
    CartService.prototype.initilizeOrder = function () {
        this.order = {};
        this.order.orderDetails = [];
        this.order.orderDate = new Date();
        this.order.orderStatus = "INITIAL";
        this.calculateCartPrice();
        this.order.deliveryCharges = 100;
        this.grandTotal = this.grandTotal + this.order.deliveryCharges;
        this.order.grandTotal = this.grandTotal;
        for (var _i = 0, _a = this.cartItemsMap.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.product != null) {
                // $oid, $art: Art, $quantity, $price, $isOrginal, $packingPrice, $shippingPrice
                this.order.orderDetails.push(new _shared_order_details_model__WEBPACK_IMPORTED_MODULE_10__["OrderDetails"](null, item.product, item.qty, item.product.price, item.isOrginal, null, null));
            }
        }
    };
    CartService.prototype.setSelectedAddress = function (address) {
        this.selectedAddress = address;
        this.storageService.setLocalStorage(this.appConstants.SELECTED_ADDRESS, address);
        if (!this.order || this.order.orderDetails.length <= 0) {
            this.initilizeOrder();
        }
        this.order.delivaryAddress = address;
    };
    CartService.prototype.createOrder = function () {
        // Create Order
        this.cartItemsMap = new typescript_map__WEBPACK_IMPORTED_MODULE_7__["TSMap"]();
        this.cartCount = null;
        this.selectedAddress = {};
        this.storageService.clearLocalStorage(this.appConstants.CART_COUNT);
        this.storageService.clearLocalStorage(this.appConstants.CART_ITEMS_MAP);
        this.storageService.clearLocalStorage(this.appConstants.SELECTED_ADDRESS);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"],
            _shared_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n\n  <section id=\"contact\" class=\"content-section text-center\">\n    <div class=\"contact-section\">\n      <div class=\"container\">\n        <h2>Contact Us</h2>\n\n        <p style=\"color:#fff;\">\n          <strong><i class=\"fa fa-map-marker\"></i> Studio Address</strong><br />\n          4-2-210/G, Ashok nager, P &amp; T Colony, Ashok Nagar, Himayatnagar, Hyderabad, Telangana.\n        </p>\n        <p style=\"color:#fff;\"><strong><i class=\"fa fa-phone\"></i> Phone Number</strong><br />\n          (+91) 7396876461\n        </p>\n        <p style=\"color:#fff;\">\n          <strong><i class=\"fa fa-envelope\"></i> Email Address</strong><br />\n          Email@info.com\n        </p>\n        <p></p>\n\n        <hr />\n\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <div id=\"sendMessageForm\" styleClass=\"form-horizontal\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input value=\"\" id=\"name\" placeholder=\"Your name\" class=\"form-control\" />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input value=\"\" id=\"email\" placeholder=\"Your Email Id\" class=\"form-control\" />\n              </div>\n              <div class=\"form-group \">\n                <label for=\"message\">Your Message</label>\n                <textarea value=\"\" id=\"message\" placeholder=\"Description\" class=\"form-control\"></textarea>\n              </div>\n              <button (click)=\"sendMessage()\" class=\"btn btn-default\" style=\"font-weight:bold;\"> Send Message </button>\n            </div>\n\n            <hr />\n\n            <h3>Our Social Sites</h3>\n            <ul class=\"list-inline banner-social-buttons\">\n              <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-twitter\"> <span\n                      class=\"network-name\">Twitter</span></i></a></li>\n              <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-facebook\"> <span\n                      class=\"network-name\">Facebook</span></i></a></li>\n              <li><a href=\"#\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-youtube-play\"> <span\n                      class=\"network-name\">Youtube</span></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  padding: 10px; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto Condensed', sans-serif; }\n\na {\n  color: #26a5d3; }\n\na:hover, a:focus {\n  text-decoration: none;\n  color: #26a5d3; }\n\n#contact {\n  color: #f4f4f4;\n  padding-bottom: 80px; }\n\ntextarea.form-control {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9EOlxcV09SS19TUEFDRVxcTU9TSEVfV0VCU0lURVxcbW9zaGUtdWkvc3JjXFxhcHBcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsMkNBQTJDLEVBQUE7O0FBSS9DO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJLHFCQUFvQjtFQUNwQixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6IzI2YTVkMztcclxufVxyXG5hOmhvdmVyLGE6Zm9jdXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiMyNmE1ZDM7XHJcbn1cclxuXHJcbiNjb250YWN0e1xyXG4gICAgY29sb3I6I2Y0ZjRmNDtcclxuICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuICAgIGhlaWdodDoxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333333';
    };
    ContactUsComponent.prototype.sendMessage = function () {
    };
    ContactUsComponent.prototype.ngOnDestroy = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/delivery-details/delivery-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/delivery-details/delivery-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-3 col-md-3 col-sm-3 col-lg-3\">\n      <span style=\"font-size: 25px;\"> Select Address </span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-3 col-md-3 col-sm-3 col-lg-3\" *ngFor=\"let addr of addresses\">\n      <div class=\"panel panel-default hover-effect panel-look\" (click)=\"selectAddress(addr)\"\n        [ngClass]=\"{'active' : (selectedAddress.oid == addr.oid)}\">\n        <div class=\"panel-body \">\n          <span [ngStyle]=\"{'font-weight':'bold'}\">\n            <!-- 'color': selectedAddress.oid == addr.oid ? 'white' : '#0095cc' -->\n            {{ addr.name }}\n          </span>\n          <br>\n          <span> {{ addr.address }} </span>\n          <br>\n          <span> {{ addr.address2 }} </span>\n          <br>\n          <span> {{ addr.city }}, {{ addr.state }}, {{ addr.country }}, {{ addr.pincode }} </span>\n          <br>\n          <span>Contact No : {{ addr.phoneNo }} </span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xs-3 col-md-3 col-sm-3 col-lg-3\">\n      <div class=\"panel panel-default hover-effect panel-look\" (click)=\"addNewAddress()\">\n        <div class=\"panel-body\" style=\"padding: 15px;\">\n          <i style=\"margin-left: 6px; color: #0a95cd;\" class=\"fa fa-plus-circle fa-2x\"></i>\n          <a class=\"add-link\">\n            Add Address\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <button class=\"btn btn-success\" (click)=\"gotoOrderOverview()\"> Select Address </button>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/delivery-details/delivery-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/delivery-details/delivery-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-look {\n  color: black;\n  text-decoration: none;\n  min-height: 160px;\n  cursor: pointer;\n  border: 1px solid darkgrey;\n  cursor: pointer;\n  background-color: #f3f3f3; }\n\n.active {\n  color: white;\n  /*                font-weight: bold;*/\n  background: #00bcd4 !important; }\n\n.hover-effect {\n  font-weight: normal; }\n\n.hover-effect:hover {\n  font-weight: normal;\n  background: lavender; }\n\n.add-link {\n  font-weight: bold;\n  color: black;\n  right: -4px;\n  bottom: 4px;\n  position: relative;\n  color: #0a95cd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnktZGV0YWlscy9EOlxcV09SS19TUEFDRVxcTU9TSEVfV0VCU0lURVxcbW9zaGUtdWkvc3JjXFxhcHBcXGRlbGl2ZXJ5LWRldGFpbHNcXGRlbGl2ZXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZO0VBQ1oscUNBQUE7RUFDQSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyeS1kZXRhaWxzL2RlbGl2ZXJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtbG9vayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsqL1xyXG4gICAgYmFja2dyb3VuZDogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG92ZXItZWZmZWN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5ob3Zlci1lZmZlY3Q6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6IGxhdmVuZGVyO1xyXG59XHJcblxyXG4uYWRkLWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICByaWdodDogLTRweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICMwYTk1Y2Q7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delivery-details/delivery-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/delivery-details/delivery-details.component.ts ***!
  \****************************************************************/
/*! exports provided: DeliveryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryDetailsComponent", function() { return DeliveryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/address.service */ "./src/app/shared/address.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var DeliveryDetailsComponent = /** @class */ (function () {
    function DeliveryDetailsComponent(addressService, cartService, router, toastr) {
        this.addressService = addressService;
        this.cartService = cartService;
        this.router = router;
        this.toastr = toastr;
        this.selectedAddress = {};
    }
    DeliveryDetailsComponent.prototype.ngOnInit = function () {
        this.addresses = this.addressService.getAddresses();
        this.selectedAddress = this.cartService.getSelectedAddress();
        if (!this.selectedAddress) {
            // this.selectedAddress = this.addresses[0];
            this.selectedAddress = {};
        }
    };
    DeliveryDetailsComponent.prototype.selectAddress = function (address) {
        this.selectedAddress = address;
        this.cartService.setSelectedAddress(address);
    };
    DeliveryDetailsComponent.prototype.gotoOrderOverview = function () {
        if (!this.selectedAddress || !this.selectedAddress.oid) {
            this.toastr.warning("Please select address.");
            return;
        }
        this.router.navigate(['/orderOverview']);
    };
    DeliveryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-details',
            template: __webpack_require__(/*! ./delivery-details.component.html */ "./src/app/delivery-details/delivery-details.component.html"),
            styles: [__webpack_require__(/*! ./delivery-details.component.scss */ "./src/app/delivery-details/delivery-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_address_service__WEBPACK_IMPORTED_MODULE_2__["AddressService"], _cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DeliveryDetailsComponent);
    return DeliveryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/error-page/error-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer1\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- row -->\n      <div class=\"col-lg-3 col-md-3\">\n        <!-- widgets column left -->\n        <ul class=\"list-unstyled clear-margins\">\n          <!-- widgets -->\n          <li class=\"widget-container widget_nav_menu\">\n            <!-- widgets list -->\n            <h1 class=\"title-widget\">Useful links</h1>\n            <ul>\n              <li><a href=\"faces/aboutMe.xhtml\" class=\"footer-link\"><i class=\"fa fa-chevron-right\"></i> About Me</a>\n              </li>\n              <li><a href=\"faces/contactMe.xhtml\" class=\"footer-link\"><i class=\"fa fa-chevron-right \"></i> Contact\n                  Me</a></li>\n              <li style=\"display: none;\"><a class=\"footer-link\"><i class=\"fa fa-chevron-right\"></i> Success Stories</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- widgets column left end -->\n\n      <div class=\"col-lg-3 col-md-3\">\n        <!-- widgets column left -->\n        <ul class=\"list-unstyled clear-margins\">\n          <!-- widgets -->\n          <li class=\"widget-container widget_nav_menu\">\n            <!-- widgets list -->\n            <h1 class=\"title-widget\">My Work</h1>\n            <ul>\n              <li><a href=\"#\" class=\"footer-link\"><i class=\"fa fa-chevron-right\"></i> Gallery Location </a></li>\n              <li><a href=\"#\" class=\"footer-link\"><i class=\"fa fa-chevron-right\"></i> Making </a></li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- widgets column left end -->\n\n      <div class=\"col-lg-3 col-md-3\">\n        <!-- widgets column left -->\n\n        <ul class=\"list-unstyled clear-margins\">\n          <!-- widgets -->\n          <li class=\"widget-container widget_recent_news\">\n            <!-- widgets list -->\n            <h1 class=\"title-widget\">Contact Details </h1>\n            <div class=\"footerp\"\n              style=\"color:white; font-size: 12px; font-family: 'Kaushan Script', cursive; line-height: 3px;\">\n              <i class=\"fa fa-at\"></i>\n              <span> {{ adminMailId }} teja.maridu@gmail.com </span>\n              <br /><br />\n              <i class=\"fa fa-phone\"></i>\n              <span style=\"font-family: -webkit-pictograph;\"> +91-9999999999 </span>\n              (10AM to 7PM)\n            </div>\n          </li>\n        </ul>\n\n\n      </div><!-- widgets column left end -->\n\n      <div class=\"col-lg-3 col-md-3\">\n        <!-- widgets column center -->\n        <ul class=\"list-unstyled clear-margins\">\n          <!-- widgets -->\n          <li class=\"widget-container widget_recent_news\">\n            <!-- widgets list -->\n            <h1 class=\"title-widget\"> Social Media </h1>\n            <div style=\"margin-top: -10px;\">\n              <ul class=\"nomargin\">\n                <a href=\"https://www.facebook.com/moshe.dayan.357\" target=\"_blank\">\n                  <i class=\"fa fa-facebook-square fa-2x social-icon\"></i>\n                </a>\n                <a href=\"https://twitter.com/bootsnipp\">\n                  <i class=\"fa fa-twitter-square fa-2x social-icon\"></i>\n                </a>\n                <a href=\"https://plus.google.com/+Bootsnipp-page\" style=\"display: none;\">\n                  <i class=\"fa fa-envelope fa-2x social-icon\"></i>\n                </a>\n                <a href=\"{{ gmailLink }}\" target=\"_blank\">\n                  <i class=\"fa fa-envelope fa-2x social-icon\"></i>\n                </a>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--header-->\n\n<div class=\"footer-bottom\" style=\"display: none;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <div class=\"copyright\">\n          © 2017, All rights reserved\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <div class=\"design\">\n          <a target=\"_blank\" href=\"\">Web Design &amp; Development by Teja Maridu</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Fjalla+One);\n@import url(http://fonts.googleapis.com/css?family=Gudea);\n.footer1 {\n  background: #4d4d4d;\n  padding-top: 20px;\n  padding-right: 0;\n  /*\tpadding-bottom: 20px;*/\n  padding-left: 0;\n  /*\tborder-top-width: 4px;\r\n    border-top-style: solid;\r\n    border-top-color: #003;*/\n  font-family: 'Kaushan Script', cursive;\n  margin-top: 50px; }\n/*.footer1 {\r\n    background: #4d4d4d url(../images/footer/footer-bg.png) repeat scroll left top;\r\n    padding-top: 20px;\r\n    padding-right: 0;\r\n     padding-bottom: 20px; \r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    padding-left: 0;\r\n    font-family: 'Kaushan Script', cursive;\r\n    z-index: 4000;\r\n}*/\n.title-widget {\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Kaushan Script', cursive;\n  font-weight: bold;\n  line-height: 1;\n  position: relative;\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: 15px;\n  margin-left: 0;\n  padding-left: 15px; }\n.title-widget::before {\n  background-color: #ea5644;\n  content: \"\";\n  height: 22px;\n  left: 0px;\n  position: absolute;\n  top: -2px;\n  width: 5px; }\n.widget_nav_menu ul {\n  list-style: outside none none;\n  padding-left: 0; }\n.widget_archive ul li {\n  background-color: rgba(0, 0, 0, 0.3);\n  content: \"\";\n  height: 3px;\n  left: 0;\n  position: absolute;\n  top: 7px;\n  width: 3px; }\n.widget_nav_menu ul li {\n  font-size: 12px;\n  font-weight: 700;\n  font-family: 'Kaushan Script', cursive;\n  line-height: 0px;\n  position: relative;\n  /* text-transform: uppercase; */\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding-bottom: 5px;\n  width: 95%; }\n.title-median {\n  color: #0a95cd;\n  font-weight: bold;\n  font-size: 20px;\n  font-family: 'Kaushan Script', cursive;\n  line-height: 20px;\n  margin: 0 0 15px; }\n.footerp p {\n  font-family: 'Gudea', sans-serif; }\n.social-fb:hover {\n  color: #3B5998; }\n.social-tw:hover {\n  color: #4099FF; }\n.social-gp:hover {\n  color: #d34836; }\n.social-em:hover {\n  color: #f39c12; }\n.nomargin {\n  margin: 0px;\n  padding: 0px; }\n.footer-bottom {\n  background-color: #939393;\n  min-height: 30px;\n  width: 100%; }\n.copyright {\n  color: #fff;\n  line-height: 30px;\n  min-height: 30px;\n  padding: 7px 0; }\n.design {\n  color: #fff;\n  line-height: 30px;\n  min-height: 30px;\n  padding: 7px 0;\n  text-align: right; }\n.design a {\n  color: #fff; }\na {\n  color: white;\n  text-decoration: none; }\n.footer-link {\n  color: white;\n  text-decoration: none;\n  margin-bottom: 5px; }\n.footer-link:hover {\n  color: #4099FF;\n  background: white;\n  border-radius: 5px;\n  padding: 0px 6px 0px 6px;\n  text-decoration: none; }\n.footer-link:active {\n  color: #4099FF;\n  background: white;\n  border-radius: 5px;\n  padding: 0px 6px 0px 6px;\n  text-decoration: none; }\n.social-icon {\n  margin-right: 5px; }\n.social-icon:hover {\n  color: orange; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxXT1JLX1NQQUNFXFxNT1NIRV9XRUJTSVRFXFxtb3NoZS11aS9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQVk7QUFDWix5REFBWTtBQUNaO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQUE7RUFDQSxlQUFlO0VBQ2Y7OzRCQ0V3QjtFREN4QixzQ0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUE7QUFTcEI7Ozs7Ozs7Ozs7O0VDSUU7QURTRjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVUsRUFBQTtBQUdkO0VBQ0ksNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTtBQUduQjtFQUNJLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVUsRUFBQTtBQUdkO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrQkFBQTtFQUNBLDRDQUE0QztFQUU1QyxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZ0NBQWdDLEVBQUE7QUFHcEM7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2hCO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLFdBQVcsRUFBQTtBQUdmO0VBQ0ksWUFBWTtFQUNaLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0ksWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUIsRUFBQTtBQUd6QjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUIsRUFBQTtBQUd6QjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZqYWxsYStPbmUpO1xyXG5AaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HdWRlYSk7XHJcbi5mb290ZXIxIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAvKlx0cGFkZGluZy1ib3R0b206IDIwcHg7Ki9cclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC8qXHRib3JkZXItdG9wLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDM7Ki9cclxuICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAvLyBGaXhlZFxyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIGJvdHRvbTogMDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKi5mb290ZXIxIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQgdXJsKC4uL2ltYWdlcy9mb290ZXIvZm9vdGVyLWJnLnBuZykgcmVwZWF0IHNjcm9sbCBsZWZ0IHRvcDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgei1pbmRleDogNDAwMDtcclxufSovXHJcblxyXG4udGl0bGUtd2lkZ2V0IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnRpdGxlLXdpZGdldDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU2NDQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLndpZGdldF9uYXZfbWVudSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLndpZGdldF9hcmNoaXZlIHVsIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi53aWRnZXRfbmF2X21lbnUgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4udGl0bGUtbWVkaWFuIHtcclxuICAgIGNvbG9yOiAjMGE5NWNkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG5cclxuLmZvb3RlcnAgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ0d1ZGVhJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNvY2lhbC1mYjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNCNTk5ODtcclxufVxyXG5cclxuLnNvY2lhbC10dzpob3ZlciB7XHJcbiAgICBjb2xvcjogIzQwOTlGRjtcclxufVxyXG5cclxuLnNvY2lhbC1ncDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2QzNDgzNjtcclxufVxyXG5cclxuLnNvY2lhbC1lbTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YzOWMxMjtcclxufVxyXG5cclxuLm5vbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5MzkzO1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcbn1cclxuXHJcbi5kZXNpZ24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGVzaWduIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MDk5RkY7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDBweCA2cHggMHB4IDZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzQwOTlGRjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDZweCAwcHggNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59IiwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmphbGxhK09uZSk7XG5AaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HdWRlYSk7XG4uZm9vdGVyMSB7XG4gIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAvKlx0cGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAvKlx0Ym9yZGVyLXRvcC13aWR0aDogNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAzOyovXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xuICBtYXJnaW4tdG9wOiA1MHB4OyB9XG5cbi8qLmZvb3RlcjEge1xyXG4gICAgYmFja2dyb3VuZDogIzRkNGQ0ZCB1cmwoLi4vaW1hZ2VzL2Zvb3Rlci9mb290ZXItYmcucG5nKSByZXBlYXQgc2Nyb2xsIGxlZnQgdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAyMHB4OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICB6LWluZGV4OiA0MDAwO1xyXG59Ki9cbi50aXRsZS13aWRnZXQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxuXG4udGl0bGUtd2lkZ2V0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NjQ0O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIycHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHdpZHRoOiA1cHg7IH1cblxuLndpZGdldF9uYXZfbWVudSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7IH1cblxuLndpZGdldF9hcmNoaXZlIHVsIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDNweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgd2lkdGg6IDNweDsgfVxuXG4ud2lkZ2V0X25hdl9tZW51IHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgd2lkdGg6IDk1JTsgfVxuXG4udGl0bGUtbWVkaWFuIHtcbiAgY29sb3I6ICMwYTk1Y2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIDAgMTVweDsgfVxuXG4uZm9vdGVycCBwIHtcbiAgZm9udC1mYW1pbHk6ICdHdWRlYScsIHNhbnMtc2VyaWY7IH1cblxuLnNvY2lhbC1mYjpob3ZlciB7XG4gIGNvbG9yOiAjM0I1OTk4OyB9XG5cbi5zb2NpYWwtdHc6aG92ZXIge1xuICBjb2xvcjogIzQwOTlGRjsgfVxuXG4uc29jaWFsLWdwOmhvdmVyIHtcbiAgY29sb3I6ICNkMzQ4MzY7IH1cblxuLnNvY2lhbC1lbTpob3ZlciB7XG4gIGNvbG9yOiAjZjM5YzEyOyB9XG5cbi5ub21hcmdpbiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7IH1cblxuLmZvb3Rlci1ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5MzkzO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY29weXJpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA3cHggMDsgfVxuXG4uZGVzaWduIHtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA3cHggMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLmRlc2lnbiBhIHtcbiAgY29sb3I6ICNmZmY7IH1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5mb290ZXItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuLmZvb3Rlci1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM0MDk5RkY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDBweCA2cHggMHB4IDZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5mb290ZXItbGluazphY3RpdmUge1xuICBjb2xvcjogIzQwOTlGRjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMHB4IDZweCAwcHggNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLnNvY2lhbC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgY29sb3I6IG9yYW5nZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery-art-details/gallery-art-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gallery-art-details/gallery-art-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div id=\"artsGrp\" *ngIf=\"selectedArt.imageUrl\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n        <img id=\"artImg1\" src=\"{{ selectedArt.imageUrl }}\" style=\"max-height: 600px;\"\n          class=\"img-responsive hidden-xs center\" />\n        <img id=\"artImg2\" src=\"{{ selectedArt.imageUrl }}\" class=\"img-responsive visible-xs center\" />\n      </div>\n\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n\n        <table class=\"table\">\n          <tbody>\n            <tr>\n              <td class=\"product-info-label\">Title</td>\n              <td class=\"product-info\">{{ selectedArt.title }}</td>\n            </tr>\n            <tr>\n              <td class=\"product-info-label\">Length / Width / Height</td>\n              <td class=\"product-info\">{{ selectedArt.length }} / {{ selectedArt.width}} / {{ selectedArt.height }}</td>\n            </tr>\n            <tr>\n              <td class=\"product-info-label\">Medium</td>\n              <td class=\"product-info\">{{ selectedArt.medium }}</td>\n            </tr>\n            <tr>\n              <td class=\"product-info-label\">Price</td>\n              <td class=\"product-info\">{{ selectedArt.price }}</td>\n            </tr>\n            <tr>\n              <td class=\"product-info-label\">Copy Price</td>\n              <td class=\"product-info\">{{ selectedArt.price }}</td>\n            </tr>\n            <tr>\n              <td class=\"product-info-label\">Price</td>\n              <td class=\"product-info\">{{ selectedArt.price }}</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"jumbotron\">\n          <select [(ngModel)]=\"artType\" class=\"form-control\">\n            <option> Orginal </option>\n            <option> Copy </option>\n          </select>\n\n          <br />\n\n          <button type=\"button\" (click)=\"addToCart(selectedArt)\" class=\"btn btn-success\" style=\"margin-right: 10px;\">\n            Add to cart\n          </button>\n          <button type=\"button\" (click)=\"buyProduct(selectedArt)\" class=\"btn btn-primary\">\n            Buy now\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gallery-art-details/gallery-art-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/gallery-art-details/gallery-art-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info-label {\n  color: #717171 !important;\n  font-size: 15px;\n  font-family: 'Kaushan Script', cursive;\n  font-weight: bold;\n  margin-right: 30px; }\n\n.product-info {\n  color: #31708f !important;\n  font-size: 15px;\n  font-family: 'Kaushan Script', cursive;\n  font-weight: bold;\n  margin-right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1hcnQtZGV0YWlscy9EOlxcV09SS19TUEFDRVxcTU9TSEVfV0VCU0lURVxcbW9zaGUtdWkvc3JjXFxhcHBcXGdhbGxlcnktYXJ0LWRldGFpbHNcXGdhbGxlcnktYXJ0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS1hcnQtZGV0YWlscy9nYWxsZXJ5LWFydC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW5mby1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzcxNzE3MSAhaW1wb3J0YW50OyBcclxuICAgIGZvbnQtc2l6ZTogMTVweDsgXHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyB7XHJcbiAgICBjb2xvcjogIzMxNzA4ZiAhaW1wb3J0YW50OyBcclxuICAgIGZvbnQtc2l6ZTogMTVweDsgXHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery-art-details/gallery-art-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gallery-art-details/gallery-art-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: GalleryArtDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryArtDetailsComponent", function() { return GalleryArtDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery/gallery.service */ "./src/app/gallery/gallery.service.ts");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var GalleryArtDetailsComponent = /** @class */ (function () {
    function GalleryArtDetailsComponent(galleryService, cartService, storageService, toastr) {
        this.galleryService = galleryService;
        this.cartService = cartService;
        this.storageService = storageService;
        this.toastr = toastr;
        this.artType = "Orginal";
    }
    GalleryArtDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.artSelected.subscribe(function (art) {
            console.log(art);
            _this.selectedArt = art;
        });
        if (this.galleryService.selectedArt) {
            this.selectedArt = this.galleryService.selectedArt;
        }
        else {
            this.selectedArt = this.storageService.getLocalStorage("selectedArt");
        }
    };
    GalleryArtDetailsComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.selectedArt, this.artType == "Orginal");
    };
    GalleryArtDetailsComponent.prototype.buyProduct = function (art) {
        // Todo
    };
    GalleryArtDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-art-details',
            template: __webpack_require__(/*! ./gallery-art-details.component.html */ "./src/app/gallery-art-details/gallery-art-details.component.html"),
            styles: [__webpack_require__(/*! ./gallery-art-details.component.scss */ "./src/app/gallery-art-details/gallery-art-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"], _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], GalleryArtDetailsComponent);
    return GalleryArtDetailsComponent;
}());



/***/ }),

/***/ "./src/app/gallery-arts/gallery-arts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gallery-arts/gallery-arts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n\n  <div class=\"centerDiv\">\n    <span class=\"category-label-bg\" style=\"text-align: center;\"> {{ selectedCategory.name }} </span>\n  </div>\n\n  <br/><br/>\n\n  <div id=\"artsGrp\" *ngIf=\"arts\">\n    <div class=\"row\">\n      <div *ngFor=\"let art of arts\">\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n          <a (click)=\"gotoArtDetails(art)\">\n            <img [src]=\"art.imageUrl\" style=\"max-height: 180px; margin-right: 50px;\" class=\"img-responsive hidden-xs\"\n              *ngIf=\"art.imageUrl\" />\n            <img [src]=\"art.imageUrl\" style=\"margin-right: 50px;\" class=\"img-responsive visible-xs\"\n              *ngIf=\"art.imageUrl\" />\n            <img src=\"assets/images/empty-art.png\" height=\"80\" *ngIf=\"!art.imageUrl\" title=\"3\" />\n          </a>\n\n          <span class=\"art-label\"> {{ art.title }} </span>\n\n          <div style=\"margin-bottom: 30px;\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gallery-arts/gallery-arts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/gallery-arts/gallery-arts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-label-bg {\n  font-size: 40px;\n  color: white;\n  font-weight: bold;\n  font-family: 'Kaushan Script', cursive;\n  z-index: 200;\n  padding: 0px 14px 3px 10px;\n  border-radius: 29px;\n  background-color: orange;\n  margin-bottom: 20px; }\n\n.art-label {\n  color: mediumseagreen;\n  font-size: 20px;\n  color: indianred !important;\n  font-weight: bold;\n  font-family: 'Kaushan Script', cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1hcnRzL0Q6XFxXT1JLX1NQQUNFXFxNT1NIRV9XRUJTSVRFXFxtb3NoZS11aS9zcmNcXGFwcFxcZ2FsbGVyeS1hcnRzXFxnYWxsZXJ5LWFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixzQ0FBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnktYXJ0cy9nYWxsZXJ5LWFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktbGFiZWwtYmcge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIHotaW5kZXg6IDIwMDtcclxuICAgIHBhZGRpbmc6IDBweCAxNHB4IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hcnQtbGFiZWwge1xyXG4gICAgY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGluZGlhbnJlZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery-arts/gallery-arts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery-arts/gallery-arts.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryArtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryArtsComponent", function() { return GalleryArtsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_arts_arts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/arts/arts.service */ "./src/app/arts/arts.service.ts");
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery/gallery.service */ "./src/app/gallery/gallery.service.ts");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var GalleryArtsComponent = /** @class */ (function () {
    // private subscription : Subscription;
    function GalleryArtsComponent(artService, galleryService, storageService, router) {
        this.artService = artService;
        this.galleryService = galleryService;
        this.storageService = storageService;
        this.router = router;
        this.arts = [];
        this.selectedCategory = {};
    }
    GalleryArtsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.subscription = 
        this.galleryService.categorySelected.subscribe(function (artCat) {
            console.log(artCat);
            _this.selectedCategory = artCat;
        });
        if (this.galleryService.selectedCategory) {
            this.selectedCategory = this.galleryService.selectedCategory;
        }
        else {
            this.selectedCategory = this.storageService.getLocalStorage("selectedCategory");
        }
        this.galleryService.selectedCategory;
        // Fetching arts
        this.arts = this.artService.getArts();
    };
    GalleryArtsComponent.prototype.gotoArtDetails = function (art) {
        this.galleryService.artSelected.emit(art);
        this.storageService.setLocalStorage('selectedArt', art);
        this.router.navigate(['artDetails']);
    };
    GalleryArtsComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    GalleryArtsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-arts',
            template: __webpack_require__(/*! ./gallery-arts.component.html */ "./src/app/gallery-arts/gallery-arts.component.html"),
            styles: [__webpack_require__(/*! ./gallery-arts.component.scss */ "./src/app/gallery-arts/gallery-arts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_arts_arts_service__WEBPACK_IMPORTED_MODULE_2__["ArtsService"], _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"],
            _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], GalleryArtsComponent);
    return GalleryArtsComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\" *ngFor=\"let cat of artCategories\">\n      <div class=\"grid-image\">\n        <a (click)=\"showCategoryArts(cat)\">\n          <img [src]=\"cat.imageUrl\" class=\"grid-img-1 img-responsive hidden-xs\" />\n          <img [src]=\"cat.imageUrl\" class=\"grid-img-1 img-responsive visible-xs\" />\n        </a>\n        <span class=\"category-label\"> {{ cat.name }} </span>\n        <div style=\"margin-bottom: 30px;\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-label {\n  color: mediumseagreen;\n  font-size: 20px;\n  color: indianred !important;\n  font-weight: bold;\n  font-family: 'Kaushan Script', cursive; }\n\n.grid-img-1 {\n  max-height: 180px;\n  margin-right: 50px; }\n\n.grid-img-2 {\n  margin-right: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9EOlxcV09SS19TUEFDRVxcTU9TSEVfV0VCU0lURVxcbW9zaGUtdWkvc3JjXFxhcHBcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsc0NBQXNDLEVBQUE7O0FBRzFDO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LWxhYmVsIHtcclxuICAgIGNvbG9yOiBtZWRpdW1zZWFncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBpbmRpYW5yZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5ncmlkLWltZy0xIHtcclxuICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pbWctMiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _art_categories_art_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../art-categories/art-category.service */ "./src/app/art-categories/art-category.service.ts");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.service */ "./src/app/gallery/gallery.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/local-storage.service */ "./src/app/shared/local-storage.service.ts");






var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(artCategoryService, galleryService, storageService, router) {
        this.artCategoryService = artCategoryService;
        this.galleryService = galleryService;
        this.storageService = storageService;
        this.router = router;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.artCategories = this.artCategoryService.categories;
    };
    GalleryComponent.prototype.showCategoryArts = function (artCategory) {
        console.log('Emitted');
        this.router.navigate(['galleryArts']);
        this.galleryService.selectedCategory = artCategory;
        this.galleryService.categorySelected.emit(artCategory);
        this.storageService.setLocalStorage("selectedCategory", artCategory);
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_art_categories_art_category_service__WEBPACK_IMPORTED_MODULE_2__["ArtCategoryService"], _gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"],
            _shared_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.service.ts":
/*!********************************************!*\
  !*** ./src/app/gallery/gallery.service.ts ***!
  \********************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var GalleryService = /** @class */ (function () {
    function GalleryService() {
        this.categorySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.artSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.catagories = [];
    }
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand header-name\"> Moshe Dayan </a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-link\" routerLinkActive=\"active\"><a routerLink=\"/home\"> <i class=\"fa fa-home\"></i> Home </a></li>\n        <li class=\"nav-link\" routerLinkActive=\"active\"><a routerLink=\"/gallery\"> <i class=\"fa fa-paint-brush\"></i>\n            Gallery </a></li>\n        <li class=\"nav-link\" routerLinkActive=\"active\"><a routerLink=\"/about\"> <i class=\"fa fa-info-circle\"></i> About\n          </a></li>\n        <li class=\"nav-link\" routerLinkActive=\"active\"><a routerLink=\"/contactUs\"> <i class=\"fa fa-phone\"></i> Contact\n          </a></li>\n        <li class=\"nav-link\" routerLinkActive=\"active\"><a routerLink=\"/login\"> <i class=\"fa fa-sign-in\"></i> Login </a>\n        </li>\n        <li class=\"nav-link\" routerLinkActive=\"active\"><a routerLink=\"/cart\"> <i class=\"fa fa-shopping-cart\"></i>\n            Cart\n            <span *ngIf=\"cartCount\"\n            class=\"label label-warning\" style=\"border-radius: 10px; padding: 3px 5px 2px 5px;\"> {{ cartCount }} </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #777777 !important;\n  min-height: 50px;\n  margin-bottom: 40px; }\n\n.navbar-brand :hover {\n  background-color: lightgrey; }\n\n.navbar-default .navbar-brand:hover {\n  color: #ff7300;\n  background-color: #e4e4e4;\n  cursor: pointer; }\n\n.navbar-default {\n  border-color: #00000000; }\n\n.header-name {\n  color: #fcaf43;\n  font-weight: bold;\n  font-family: 'Kaushan Script', cursive;\n  font-size: 28px;\n  padding: 14px 12px 0px 12px;\n  border-radius: 29px;\n  background-color: white; }\n\n.nav-link {\n  color: white !important; }\n\n.nav-link :hover {\n  color: white;\n  background: #454545; }\n\n.navbar-nav > li > a {\n  color: #fff;\n  font-weight: bold; }\n\n.active,\n.active > a {\n  background: orange; }\n\n.active,\n.active > a :hover {\n  background: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxXT1JLX1NQQUNFXFxNT1NIRV9XRUJTSVRFXFxtb3NoZS11aS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCOztFQUVJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NyAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDExNSwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLWRlZmF1bHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwMDA7XHJcbn1cclxuXHJcbi5oZWFkZXItbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZjYWY0MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDEycHggMHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIDpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdj5saT5hIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hY3RpdmUsXHJcbi5hY3RpdmU+YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5hY3RpdmUsXHJcbi5hY3RpdmU+YSA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart/cart.service */ "./src/app/cart/cart.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cartService) {
        this.cartService = cartService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartCount = this.cartService.getCartCount();
        this.cartService.cartUpdated.subscribe(function (count) {
            _this.cartCount = count;
        });
        this.cartService.reloadCartFromLocalStorage();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <slideshow [height]=\"height\" [minHeight]=\"'600px'\" [autoPlay]=\"true\" [showArrows]=\"true\" [imageUrls]=\"imageSources\"\n        [lazyLoad]=\"imageSources?.length > 1\" [autoPlayWaitForLazyLoad]=\"true\" [autoPlayInterval]=4000>\n    </slideshow>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageSources = ['assets/images/sliders/slider-1.jpg', 'assets/images/sliders/slider-2.jpg',
            'assets/images/sliders/slider-3.jpg', 'assets/images/sliders/slider-4.jpg',
            'assets/images/sliders/slider-5.jpg'];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background':  'url(assets/images/login-backgroud.jpg) repeat #fff'}\">\n  \n  <app-header></app-header>\n\n  <div class=\"container login-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\"> </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"login-card\">\n          <span class=\"login-label\"> Login </span>\n\n          <input id=\"username\" placeholder=\"Username / Phone\" value=\"{{ userName }}\" class=\"form-control\" />\n\n          <br />\n\n          <input type=\"password\" placeholder=\"Password\" value=\"{{ password }}\" class=\"form-control\" />\n\n          <br />\n\n          <div class=\"centerDiv\">\n            <button (click)=\"login()\" class=\"btn btn-primary\" style=\"width: 200px; font-weight: bold;\"> Login </button>\n            <br />\n            <button (click)=\"registerInit()\" class=\"btn btn-link\" style=\"font-size: 11px; font-weight: bold;\"> Register\n            </button>\n            <button (click)=\"forgotPassword()\" class=\"btn btn-link\"\n              style=\"color: red; font-size: 11px; font-weight: bold;\">\n              Forgot password </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\"></div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-size: cover; }\n\n.form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px; }\n\n.login-label {\n  font-size: 32px;\n  text-align: center;\n  display: block;\n  color: #f39c12;\n  margin-bottom: 12px; }\n\n.login-card {\n  color: #5d5d5d;\n  background: #f2f2f2;\n  padding: 26px;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  margin-top: 60px;\n  margin-bottom: 100px; }\n\n.img {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 35px; }\n\n.links {\n  color: #0a95cd;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFdPUktfU1BBQ0VcXE1PU0hFX1dFQlNJVEVcXG1vc2hlLXVpL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFLSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ltYWdlcy9sb2dpbi1iYWNrZ3JvdWQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZjM5YzEyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gICAgY29sb3I6ICM1ZDVkNWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogMjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgICBjb2xvcjogIzBhOTVjZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style = "background-image: url('some/otherImg.jpg')";
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.registerInit = function () {
    };
    LoginComponent.prototype.forgotPassword = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.scss":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.scss */ "./src/app/my-orders/my-orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order-info/order-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-info/order-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\" style=\"min-height: 70%;\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <span style=\"font-size: 25px;\"> Order Info </span>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n      <div class=\"well\">\n        Your order has been  placed successfully.\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/order-info/order-info.component.scss":
/*!******************************************************!*\
  !*** ./src/app/order-info/order-info.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWluZm8vb3JkZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/order-info/order-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-info/order-info.component.ts ***!
  \****************************************************/
/*! exports provided: OrderInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoComponent", function() { return OrderInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderInfoComponent = /** @class */ (function () {
    function OrderInfoComponent() {
    }
    OrderInfoComponent.prototype.ngOnInit = function () {
    };
    OrderInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-info',
            template: __webpack_require__(/*! ./order-info.component.html */ "./src/app/order-info/order-info.component.html"),
            styles: [__webpack_require__(/*! ./order-info.component.scss */ "./src/app/order-info/order-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderInfoComponent);
    return OrderInfoComponent;
}());



/***/ }),

/***/ "./src/app/order-overview/order-overview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/order-overview/order-overview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\" style=\"min-height: 70%;\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <span style=\"font-size: 25px;\"> Review and place your order </span>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n      <div class=\"panel panel-info\" *ngIf=\"cartItemsMap\" style=\"padding: 0px 20px 0px 20px; background: #e3e3e3;\">\n        <div class=\"row\" *ngFor=\"let item of order.orderDetails\" style=\"border-bottom: 1px solid #c8c8c8;\">\n          <br>\n          <div class=\"col-xs-3\">\n            <img src=\"http://placehold.it/150x80\" class=\"img-responsive\" *ngIf=\"!item.product.imageUrl\" />\n            <img [src]=\"item.product.imageUrl\" class=\"img-responsive\" *ngIf=\"item.product.imageUrl\"\n              style=\"padding: 4px;\" />\n          </div>\n\n          <div class=\"col-xs-9\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <span class=\"art-title\"> {{ item.product.title }} </span>\n                <span class=\"art-info\" style=\"font-size: 9px; color: #FF9800; margin-left: 4px;\">\n                  ({{ item.isOrginal ? 'Original' : 'Copy' }})\n                </span>\n                <span class=\"art-info\" style=\"font-size: 12px; color: maroon; margin-left: 4px;\">\n                  Quantity : {{ item.quantity }}\n                </span>\n              </div>\n\n              <div class=\"col-xs-6\">\n                <div style=\"float: right;\" styleClass=\"art-price\">\n                  <span>\n                    Rs. {{ item.isOrginal ? item.product.price : item.product.copyPrice }}\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <span styleClass=\"art-info\">Medium: {{ item.product.medium }} </span>\n                <span class=\"art-info\" style=\"font-size: 11px; margin-left: 10px; color: #474747;\">\n                  Dimensions (L x H) Inch:\n                </span>\n                <span styleClass=\"art-info\" style=\"font-size: 11px;\">\n                  {{ item.product.height }} {{ item.product.width }}\n                </span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-11\">\n                <span style=\"font-size: 10px; color: gray;\">\n                  {{ item.product.shortDescreption }}\n                </span>\n              </div>\n            </div>\n            <br>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <div style=\"font-size: 20px; text-align: right; padding: 12px;\" styleClass=\"art-price\">\n              <span style=\"margin-right: 4px; white-space: nowrap;\"> Sub Total : </span>\n              <span style=\"font-weight: bold; white-space: nowrap;\">\n                {{ order.subTotal }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n      <div class=\"panel\" style=\"background: #e4dbc8; padding: 12px;\">\n        <span style=\"font-size: 18px; font-weight: bold;\"> Shipping Address </span>\n        <hr>\n        <span> {{ selectedAddress.name }} </span>\n        <br>\n        <span> {{ selectedAddress.address }} </span>\n        <br>\n        <span> {{ selectedAddress.address2 }} </span>\n        <br>\n        <span> {{ selectedAddress.city }}, {{ selectedAddress.state }}, {{ selectedAddress.pincode }} </span>\n      </div>\n\n\n      <div class=\"panel\" style=\"background: #cfe4c8; padding: 12px;\">\n        <span style=\"font-size: 18px; font-weight: bold;\"> Order Summary </span>\n        <hr>\n        <div>\n          <span style=\"margin-right: 15px;\"> Sub Total : </span>\n          <span> {{ order.subTotal }} </span>\n          <br>\n          <span> Delivary : </span>\n          <span> {{ order.deliveryCharges }} </span>\n          <br>\n          <span> Packing : </span>\n          <span> 0 </span>\n        </div>\n        <hr>\n        <span></span>\n\n        <span class=\"art-price\"> Grand Total : </span>\n        <span class=\"art-price\"> {{ order.grandTotal }} </span>\n      </div>\n\n      <button (click)=\"placeOrder()\" class=\"btn btn-success\" style=\"float: right;\">\n        <i class=\"fa fa-thumbs-up\"></i>\n        Place Order\n      </button>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/order-overview/order-overview.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/order-overview/order-overview.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  color: white;\n  font-weight: bold;\n  background: #00bcd4 !important; }\n\nbody {\n  background: #f1f3f6; }\n\nhr {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border: 0;\n  border-top: 1px solid #b0b0b0; }\n\n.art-title {\n  font-size: 18px;\n  color: #607d8b;\n  font-weight: bold; }\n\n.art-price {\n  font-size: 16px;\n  color: #777777;\n  font-weight: bold; }\n\n.art-info {\n  font-size: 12px;\n  white-space: nowrap;\n  color: gray;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItb3ZlcnZpZXcvRDpcXFdPUktfU1BBQ0VcXE1PU0hFX1dFQlNJVEVcXG1vc2hlLXVpL3NyY1xcYXBwXFxvcmRlci1vdmVydmlld1xcb3JkZXItb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDZCQUE2QixFQUFBOztBQUVqQztFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyLW92ZXJ2aWV3L29yZGVyLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmM2Y2O1xyXG59XHJcbmhyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjBiMGIwO1xyXG59XHJcbi5hcnQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgY29sb3I6ICM2MDdkOGI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXJ0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFydC1pbmZve1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/order-overview/order-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order-overview/order-overview.component.ts ***!
  \************************************************************/
/*! exports provided: OrderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOverviewComponent", function() { return OrderOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typescript_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typescript-map */ "./node_modules/typescript-map/index.js");
/* harmony import */ var typescript_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typescript_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var OrderOverviewComponent = /** @class */ (function () {
    function OrderOverviewComponent(toastr, cartService, router) {
        this.toastr = toastr;
        this.cartService = cartService;
        this.router = router;
        this.cartItemsMap = new typescript_map__WEBPACK_IMPORTED_MODULE_2__["TSMap"]();
        this.order = {};
        this.selectedAddress = {};
    }
    OrderOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Getting Cart Details
        this.cartItemsMap = this.cartService.getCartItemsMap();
        this.grandTotal = this.cartService.grandTotal;
        this.cartService.cartUpdated.subscribe(function (count) {
            _this.cartItemsMap = _this.cartService.cartItemsMap;
            _this.grandTotal = _this.cartService.grandTotal;
        });
        // Getting Selected Address
        this.selectedAddress = this.cartService.getSelectedAddress();
        if (!this.selectedAddress) {
            this.selectedAddress = {};
        }
        this.order = this.cartService.getOrder();
    };
    OrderOverviewComponent.prototype.placeOrder = function () {
        this.cartService.createOrder();
        this.router.navigate(['/orderInfo']);
        this.toastr.info("Order has been created");
    };
    OrderOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-overview',
            template: __webpack_require__(/*! ./order-overview.component.html */ "./src/app/order-overview/order-overview.component.html"),
            styles: [__webpack_require__(/*! ./order-overview.component.scss */ "./src/app/order-overview/order-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OrderOverviewComponent);
    return OrderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/orders/order-details/order-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/orders/order-details/order-details.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/orders/order-details/order-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent() {
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
    };
    OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/orders/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.scss */ "./src/app/orders/order-details/order-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.scss":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/orders/orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sales-report/sales-report.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sales-report/sales-report.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sales-report works!\n</p>\n"

/***/ }),

/***/ "./src/app/sales-report/sales-report.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sales-report/sales-report.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzLXJlcG9ydC9zYWxlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sales-report/sales-report.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sales-report/sales-report.component.ts ***!
  \********************************************************/
/*! exports provided: SalesReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function() { return SalesReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalesReportComponent = /** @class */ (function () {
    function SalesReportComponent() {
    }
    SalesReportComponent.prototype.ngOnInit = function () {
    };
    SalesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-report',
            template: __webpack_require__(/*! ./sales-report.component.html */ "./src/app/sales-report/sales-report.component.html"),
            styles: [__webpack_require__(/*! ./sales-report.component.scss */ "./src/app/sales-report/sales-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalesReportComponent);
    return SalesReportComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/address.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/address.model.ts ***!
  \*****************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(oid, name, phoneNo, address, address2, city, state, country, pincode, landmark) {
        this.oid = oid;
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.landmark = landmark;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/shared/address.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/address.service.ts ***!
  \*******************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.model */ "./src/app/shared/address.model.ts");



var AddressService = /** @class */ (function () {
    function AddressService() {
        this.addresses = [];
    }
    AddressService.prototype.getAddresses = function () {
        this.addresses = [new _address_model__WEBPACK_IMPORTED_MODULE_2__["Address"](1, "Teja Maridu", 9666926656, "Flat no : 106, Ark Enclave", "Srinivasa colony, Manikonda", "Hyderabad", "Telangana", "India", 500089, "Near GrocerKart.com"),
            new _address_model__WEBPACK_IMPORTED_MODULE_2__["Address"](2, "Phani Maridu", 9642392592, "Flat No: 345, TRF Towers", "Road no 12, West Street", "Down town", "Atlanta", "USA", 300032, "Opp Kings Burger"),
            new _address_model__WEBPACK_IMPORTED_MODULE_2__["Address"](3, "Anjani Maridu", 9666923333, "Flat no : 106, Ark Enclave", "Srinivasa colony, Manikonda", "Hyderabad", "Telangana", "India", 500089, "Near GrocerKart.com"),
            new _address_model__WEBPACK_IMPORTED_MODULE_2__["Address"](4, "Sai Maridu", 9666922121, "Flat no : 326, HKI Enclave", "Katraj colony, Jammura", "Kuttupakam", "Chennei", "India", 500089, "Near GrocerKart.com"),
            new _address_model__WEBPACK_IMPORTED_MODULE_2__["Address"](5, "Lakshmi Maridu", 9666922222, "H.No : 4/32/32G", "Videos colony, Gattaih center", "Khammam", "Telangana", "India", 500089, "Near Haveli Restarent")];
        return this.addresses;
    };
    AddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddressService);
    return AddressService;
}());



/***/ }),

/***/ "./src/app/shared/app-constants.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/app-constants.ts ***!
  \*****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppConstants = /** @class */ (function () {
    function AppConstants() {
        //  STORAGE NAMES
        this.CART_COUNT = "cartCount";
        this.CART_ITEMS_MAP = "cartItemsMap";
        this.SELECTED_ART = "selectedArt";
        this.SELECTED_CATEGOTY = "selectedCategory";
        this.SELECTED_ADDRESS = "selectedAddress";
    }
    AppConstants = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppConstants);
    return AppConstants;
}());



/***/ }),

/***/ "./src/app/shared/local-storage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/local-storage.service.ts ***!
  \*************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setLocalStorage = function (storageName, data) {
        localStorage.setItem(storageName, JSON.stringify(data));
    };
    LocalStorageService.prototype.getLocalStorage = function (storageName) {
        var data = localStorage.getItem(storageName);
        return JSON.parse(data);
    };
    LocalStorageService.prototype.clearLocalStorage = function (storageName) {
        localStorage.removeItem(storageName);
    };
    LocalStorageService.prototype.cleanAll = function () {
        localStorage.clear();
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.startupVisited = false;
        this.isLoggedin = false;
    }
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/order-details.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/order-details.model.ts ***!
  \***********************************************/
/*! exports provided: OrderDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetails", function() { return OrderDetails; });
var OrderDetails = /** @class */ (function () {
    function OrderDetails($oid, $product, $quantity, $price, $isOrginal, $packingPrice, $shippingPrice) {
        this.oid = $oid;
        this.product = $product;
        this.quantity = $quantity;
        this.price = $price;
        this.isOrginal = $isOrginal;
        this.packingPrice = $packingPrice;
        this.shippingPrice = $shippingPrice;
    }
    return OrderDetails;
}());



/***/ }),

/***/ "./src/app/startup/startup.component.html":
/*!************************************************!*\
  !*** ./src/app/startup/startup.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <span id=\"time\" class=\"duration\"> {{ duration }} </span>\n    <div class=\"container center\">\n        <span class=\"moshe-dayan-label\">\n            Moshe Dayan\n        </span>\n\n        <img src=\"assets/images/arts_grid.jpg\" alt=\"arts_grid\" class=\"grid-img img-responsive\" />\n\n        <button class=\"explore-btn\" (click)=\"gotoHome()\"> Explore </button>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/startup/startup.component.scss":
/*!************************************************!*\
  !*** ./src/app/startup/startup.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.duration {\n  float: right;\n  color: white;\n  font-size: 16px;\n  font-family: 'Kaushan Script', cursive;\n  margin-right: 6px; }\n\n.moshe-dayan-label {\n  font-size: 40px;\n  color: #fcaf43;\n  width: 300px;\n  font-weight: bold;\n  font-family: 'Kaushan Script', cursive;\n  padding: 0px 14px 3px 10px;\n  border-radius: 29px;\n  background-color: white;\n  border: 3px solid grey;\n  z-index: 200;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px; }\n\n.grid-img {\n  border: 4px solid white;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n  max-height: 450px; }\n\n.explore-btn {\n  font-size: 30px;\n  font-weight: bold;\n  font-family: 'Kaushan Script', cursive;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnR1cC9EOlxcV09SS19TUEFDRVxcTU9TSEVfV0VCU0lURVxcbW9zaGUtdWkvc3JjXFxhcHBcXHN0YXJ0dXBcXHN0YXJ0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFydHVwL3N0YXJ0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kdXJhdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLm1vc2hlLWRheWFuLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjZmNhZjQzO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIHBhZGRpbmc6IDBweCAxNHB4IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcclxuICAgIHotaW5kZXg6IDIwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pbWcge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4uZXhwbG9yZS1idG4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/startup/startup.component.ts":
/*!**********************************************!*\
  !*** ./src/app/startup/startup.component.ts ***!
  \**********************************************/
/*! exports provided: StartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupComponent", function() { return StartupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/login.service */ "./src/app/shared/login.service.ts");





var StartupComponent = /** @class */ (function () {
    function StartupComponent(elementRef, router, loginService) {
        this.elementRef = elementRef;
        this.router = router;
        this.loginService = loginService;
        this.duration = 1000;
    }
    StartupComponent.prototype.ngAfterViewInit = function () {
        this.loginService.startupVisited = true;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1c2b24';
    };
    StartupComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.loginService.startupVisited);
        if (this.loginService.startupVisited) {
            this.gotoHome();
        }
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.subscription = source.subscribe(function (val) {
            --_this.duration;
            if (_this.duration <= 0) {
                _this.subscription.unsubscribe();
                _this.gotoHome();
            }
        });
    };
    StartupComponent.prototype.ngOnDestroy = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
        this.subscription.unsubscribe();
    };
    StartupComponent.prototype.gotoHome = function () {
        this.router.navigate(['home']);
    };
    StartupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-startup',
            template: __webpack_require__(/*! ./startup.component.html */ "./src/app/startup/startup.component.html"),
            styles: [__webpack_require__(/*! ./startup.component.scss */ "./src/app/startup/startup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], StartupComponent);
    return StartupComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/user-info/user-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/users/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/users/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/users/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/users/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORK_SPACE\MOSHE_WEBSITE\moshe-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map