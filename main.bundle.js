webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\n        <img src=\"assets/images/banner.jpg\">\n      </div>\n<div class=\"container\">\n  <section class=\"hti-pagesection\" style=\"padding: 50px 0px; background: url(extraimages/pakege1.jpg); background-size: cover;\">\n          <div class=\"container\">\n              <div class=\"row\">\n\n                  <div class=\"col-md-12\">\n                      <div class=\"hti-modrentitle thememargin\">\n                          <h1>Indian Domestic Destinations</h1>\n                          <div class=\"hti-divider\">\n                              <div class=\"short-seprator\"><span><i class=\"fa fa-globe\"></i></span></div>\n                          </div>\n                          <br>\n                          <div class=\"text-center\">\n                              <blockquote>\n                                  <p> We believe planning your vacations  should be as fun as the trip itself. </p>\n                                    <p>Hello Travel India,  offers a wide range of destinations from the mainstream to the exotic ones.</p>\n\n                              </blockquote>\n                          </div>\n\n\n\n                      <p>While we explore new destinations and venture into new itineraries, we consistently review and revisit existing ones with new itineraries and experiences. \n</p>\n                      <p>Hello Travel India values our services in terms of (P. R. I. C. E. D) \n</p>\n                      <p><strong>Polite</strong>\n                      We remain courteous to our valued customers and to one another at all times. \n</p>\n                      <p><strong>Responsive</strong>\n                       \n                      We acknowledge and attend to our customers enquiries promptly \n                      </p>\n\n                      <p><strong>Image</strong>\n                       \n                      We create a professional impression through our appearance,  attitudes and communication at all times\n                      </p>\n\n                      \n                      <p><strong>Corrective</strong>\n                       \n                      We provide accuracy in our pre and post tours information to our customers \n                      </p>\n\n                      \n                      <p><strong>Efficiency</strong> \n                      We provide our utmost services in the shortest time possible \n                      </p>\n\n                      <p><strong>Delightful</strong> \n                      We seek to exceed in our customers's expectations  and bring forth a delightful memories.\n                      </p>\n\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n\n      </section>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(meta) {
        // Sets the <meta> tag for the page
        meta.addTags([
            { name: 'keyword', content: 'About Us, hello travel india, about hello travel india' },
            { name: 'description', content: 'Hello Travel India, offers a wide range of destinations from the mainstream to the exotic ones.' },
        ]);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\r\n<header-section></header-section>\r\n<router-outlet></router-outlet>\r\n<footer-section></footer-section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.loading = false;
        this.title = 'Hello Travel India';
        this.loading = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_header_component__ = __webpack_require__("../../../../../src/app/global/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_footer_component__ = __webpack_require__("../../../../../src/app/global/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global_router__ = __webpack_require__("../../../../../src/app/global/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_slider_slider_component__ = __webpack_require__("../../../../../src/app/global/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__packages_packages_component__ = __webpack_require__("../../../../../src/app/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hotels_hotels_component__ = __webpack_require__("../../../../../src/app/hotels/hotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__destination_destination_component__ = __webpack_require__("../../../../../src/app/destination/destination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__extra_pageNotFound_component__ = __webpack_require__("../../../../../src/app/extra/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__global_packages_packages_menu_component__ = __webpack_require__("../../../../../src/app/global/packages/packages.menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__global_packages_kashmir_menu_component__ = __webpack_require__("../../../../../src/app/global/packages/kashmir.menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__global_packages_gt_menu_component__ = __webpack_require__("../../../../../src/app/global/packages/gt.menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__packages_nepal_packages_component__ = __webpack_require__("../../../../../src/app/packages/nepal.packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__packages_nepal_packages_nepal_packages_2n__ = __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.2n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__packages_nepal_packages_nepal_packages_3n__ = __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.3n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__packages_nepal_packages_nepal_packages_4n__ = __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.4n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__packages_kashmir_packages_kashmir_packages__ = __webpack_require__("../../../../../src/app/packages/kashmir-packages/kashmir.packages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__packages_gt_packages_gt_packages__ = __webpack_require__("../../../../../src/app/packages/gt-packages/gt.packages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__global_tabs_tabset_pills__ = __webpack_require__("../../../../../src/app/global/tabs/tabset.pills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__global_carousel_carousel_config__ = __webpack_require__("../../../../../src/app/global/carousel/carousel.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Additional Modules




// ROUTER FILE


















// Extras


var AppModule = (function () {
    // routerUrls:any = ROUTER[0].path;
    function AppModule() {
        // console.log(this.routerUrls);
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__global_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__global_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__global_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__packages_packages_component__["a" /* PackagesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__hotels_hotels_component__["a" /* HotelsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__destination_destination_component__["a" /* DestinationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__extra_pageNotFound_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_28__global_tabs_tabset_pills__["a" /* NgbdTabsetPills */],
            __WEBPACK_IMPORTED_MODULE_29__global_carousel_carousel_config__["a" /* NgbdCarouselConfig */],
            __WEBPACK_IMPORTED_MODULE_19__global_packages_packages_menu_component__["a" /* PackagesMenu */],
            __WEBPACK_IMPORTED_MODULE_20__global_packages_kashmir_menu_component__["a" /* KashmirMenu */],
            __WEBPACK_IMPORTED_MODULE_21__global_packages_gt_menu_component__["a" /* GtMenu */],
            __WEBPACK_IMPORTED_MODULE_22__packages_nepal_packages_component__["a" /* NepalPackagesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__packages_nepal_packages_nepal_packages_2n__["a" /* NepalPackageComponent_2n */],
            __WEBPACK_IMPORTED_MODULE_24__packages_nepal_packages_nepal_packages_3n__["a" /* NepalPackageComponent_3n */],
            __WEBPACK_IMPORTED_MODULE_25__packages_nepal_packages_nepal_packages_4n__["a" /* NepalPackageComponent_4n */],
            __WEBPACK_IMPORTED_MODULE_26__packages_kashmir_packages_kashmir_packages__["a" /* KashmirPackages */],
            __WEBPACK_IMPORTED_MODULE_27__packages_gt_packages_gt_packages__["a" /* GtPackages */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__global_router__["a" /* ROUTER */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* Title */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\n    <img src=\"assets/images/banner-contact.jpg\">\n  </div>\n\n<div class=\"container\">\n  <section class=\"hti-pagesection\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"hti-modrentitle thememargin\">\n                      <h1> Contact Us</h1>\n                          <div class=\"hti-divider\">\n                              <div class=\"short-seprator\"><span><i class=\"fa fa-globe\"></i></span></div>\n                          </div>\n                          <br>\n                          \n                          <div class=\"office-address\">\n                              <div>\n                              <div class=\"addresses head-office col-lg-12\">\n                                  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9145842556086!2d77.08621631508261!3d28.632321982417825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bd0b76363b%3A0x1bb2fbd90b91cb6f!2sHello+Travel+India!5e0!3m2!1sen!2sin!4v1508360925558\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                                  <div class=\"address-content\">\n                                    <h3> Head Office, Srinagar</h3>\n                                    417 Kenihama Nowgam <br>\n                                    Near Railway Station Srinagar,<br>\n                                    Kashmir 190015 <br>\n                                    <label><fa name=\"phone\"></fa> +917006036459 / +919419520709 </label>\n                                    <label><fa name=\"phone\"></fa> +919906755156</label> \n                                    <label><fa name=\"envelope\"></fa> info@hellotravelindia.in, sales@hellotravelindia.in</label>\n                                </div>\n                              </div>\n                            </div>\n\n\n                              <div class=\"addresses col-md-6\">\n                                  <h3>Branch Office, Ladakh</h3>\n                                  21-26 First Floor Lhamakhang, <br />\n                                  LBA Complex, Debi Tu, <br />\n                                  Zangsti, Leh- Ladakh 194101. <br />\n                                  +917006036459/+919419520709 / +919906755156 <br />\n                                  Info@hellotravelindia.in <br />\n                                  sales@hellotravelindia.in\n                              </div>\n\n                              <div class=\"addresses col-md-6  \">\n                                <h3>Sales office, Delhi</h3>\n                                First floor A-3/11  <br />\n                                janakpuri near hdfc bank  <br />\n                                Delhi 110059 <br />\n                                +917006036459/+919906755156 <br />\n                                Info@hellotravelindia.in <br />\n                                sales@hellotravelindia.in\n                              </div>\n\n                          </div>\n\n\n\n\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n\n      </section>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".office-address .addresses {\n  text-align: left;\n  box-shadow: 0 0 1px #bdb8b8;\n  margin: 8px;\n  padding: 10px;\n  box-sizing: border-box;\n  width: 47%;\n  font-size: 12px;\n  color: #5B5B5B;\n}\n.office-address .addresses h3 {\n  font-size: 19px;\n}\n.office-address .addresses label {\n  display: block;\n  font-weight: 500;\n  margin-top: 5px;\n  color: #000;\n}\n.office-address .head-office {\n  width: 100%;\n  height: 400px;\n  position: relative;\n}\n.office-address .address-content {\n  background: #fff;\n  position: absolute;\n  top: 6rem;\n  right: 2rem;\n  padding: 2%;\n  font-size: 12px;\n  color: #5B5B5B;\n  font-family: Roboto,Arial;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(meta) {
        // Sets the <meta> tag for the page
        /*meta.addTags([
          { name: 'keyword', content: 'Contact Us, hello travel india, contact hello travel india' },
          { name: 'description', content: 'Contact Us, Reach to hello travel India' },
        ]);*/
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/destination/destination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\n    <img src=\"assets/images/banner-destination.jpg\">\n</div>\n\n<div class=\"container\">\n    <section class=\"hti-pagesection\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hti-modrentitle thememargin\">\n                        <h1> Destination</h1>\n                        <div class=\"hti-divider\">\n                            <div class=\"short-seprator\">\n                                <span>\n                                    <i class=\"fa fa-globe\"></i>\n                                </span>\n                            </div>\n                        </div>\n                       <p class=\"\">{{destinationPage.brief}}</p>\n                        <hr>\n                        <h2 class=\"fency-title\">International Destination</h2>\n                        <div class=\"col-md-4 destination-list\" *ngFor=\"let dest of destinationPage.international.destinationList\">\n                            <div class=\"card each-destinaion\" style=\"width: 20rem;\">\n                                <img class=\"card-img-top\" src=\"../{{dest.picture}}\" alt=\"Card image cap\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">{{dest.title}}</h4>\n                                    <p class=\"card-text\">{{dest.description}}</p>\n                                    <a href=\"#\" class=\"btn btn-primary\">{{destinationPage.btnTxt}}</a>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Destination list end here-->\n\n                        <h2 class=\"fency-title\">Domestic Destination</h2>\n                        <div class=\"col-md-4 destination-list\" *ngFor=\"let dest of destinationPage.domestic.destinationList\">\n                            <div class=\"card each-destinaion\" style=\"width: 20rem;\">\n                                <img class=\"card-img-top\" src=\"../{{dest.picture}}\" alt=\"Card image cap\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">{{dest.title}}</h4>\n                                    <p class=\"card-text\">{{dest.description}}</p>\n                                    <a href=\"#\" class=\"btn btn-primary\">{{destinationPage.btnTxt}}</a>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Destination list end here-->\n\n                        \n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/destination/destination.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/destination/destination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinationComponent = (function () {
    function DestinationComponent() {
        this.destinationPage = __WEBPACK_IMPORTED_MODULE_1__global_globals__["a" /* GLOBALS */].pagesData.destination;
    }
    DestinationComponent.prototype.ngOnInit = function () {
    };
    return DestinationComponent;
}());
DestinationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-destination',
        template: __webpack_require__("../../../../../src/app/destination/destination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/destination/destination.component.less")]
    }),
    __metadata("design:paramtypes", [])
], DestinationComponent);

//# sourceMappingURL=destination.component.js.map

/***/ }),

/***/ "../../../../../src/app/extra/pageNotFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "pageNotFound-section",
        template: "\n       \n        \n        <div class=\"container\">\n        <div class=\"col-md-12\">\n          <div class=\"hti-modrentitle thememargin\">\n          <h1>404 !</h1>\n          <h3>Page not found!!!</h3>\n            <div class=\"hti-divider\">\n              <div class=\"short-seprator\"><span><i class=\"fa fa-globe\"></i></span></div>\n            </div>\n            <br>\n           \n          </div>\n        </div>\n\n    "
    })
], PageNotFoundComponent);

//# sourceMappingURL=pageNotFound.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/carousel/carousel-config.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\r\n        <ng-template ngbSlide>\r\n          <img src=\"{{img_path}}slide2.jpg\" alt=\"Random first slide\">\r\n          <!--<div class=\"carousel-caption\">\r\n            <h3>10 seconds between slides...</h3>\r\n            <p>This carousel uses customized default values.</p>\r\n       \r\n          </div>   -->\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"{{img_path}}slide1.jpg\"  alt=\"Random second slide\">\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"{{img_path}}slide4.jpg\" alt=\"Random third slide\">\r\n        </ng-template>\r\n      </ngb-carousel>"

/***/ }),

/***/ "../../../../../src/app/global/carousel/carousel.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdCarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global Service
var NgbdCarouselConfig = (function () {
    function NgbdCarouselConfig(config) {
        this.img_path = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* GLOBALS */].img_path;
        // customize default values of carousels used by this component tree
        config.interval = 3000;
        config.wrap = false;
        config.keyboard = false;
    }
    return NgbdCarouselConfig;
}());
NgbdCarouselConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ngbd-carousel-config',
        template: __webpack_require__("../../../../../src/app/global/carousel/carousel-config.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]] // add NgbCarouselConfig to the component providers
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]) === "function" && _a || Object])
], NgbdCarouselConfig);

var _a;
//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ "../../../../../src/app/global/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer-widget\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"widget col-md-4 hti-followus-widget\">\r\n                <div class=\"hti-widget-title\">\r\n                    <h2>Follow Us</h2>\r\n                </div>\r\n\r\n                \r\n                <ul>\r\n                    <li *ngFor=\"let social of socialMedia\">\r\n                        <a href=\"{{social.url}}\" target=\"_blank\" title=\"{{social.name}}\">\r\n                            <i class=\"fa fa-{{social.fa}}\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <!--\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.facebook.com/Hellotravelindia.in/\" target=\"_blank\" data-original-title=\"Facebook\">\r\n                            <i class=\"fa fa-facebook\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://twitter.com/Hellotravelindi\" data-original-title=\"Twitter\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.instagram.com/hellotravelindia/\" data-original-title=\"instagram\">\r\n                            <i class=\"fa fa-instagram\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://plus.google.com/u/0/102226803792616555479\" data-original-title=\"Google-Plus\">\r\n                            <i class=\"fa fa-google-plus\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            -->\r\n            </div>\r\n            <div class=\"widget col-md-4 hti-followus-widget\">\r\n                <div class=\"hti-widget-title\">\r\n                    <h2></h2>\r\n                </div>\r\n                <div class=\"ft_payment\">\r\n                    <img src=\"images/payment2.png\">\r\n                </div>\r\n            </div>\r\n            <div class=\"widget col-md-4 hti-userinfo-widget\">\r\n                <div class=\"hti-widget-title\">\r\n                    <h2>Contact</h2>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <i class=\"fa fa-map-marker\"></i> (Sales office)\r\n                        <br />First floor A-3/11 Janakpuri Near HDFC Bank\r\n                        <br /> Delhi - 110059\r\n                    </li>\r\n                    <li>\r\n                        <i class=\"fa fa-envelope\"></i>info@hellotravelindia.in</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/global/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // Global Service
var FooterComponent = (function () {
    function FooterComponent() {
        this.socialMedia = __WEBPACK_IMPORTED_MODULE_1__global_globals__["a" /* GLOBALS */].socialMedia;
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer-section',
        template: __webpack_require__("../../../../../src/app/global/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBALS; });
//Images Path variables
var destinationImgPath = "assets/images/";
var GLOBALS = {
    img_path: '../assets/images/',
    socialMedia: [
        { name: 'Facebook', url: 'https://www.facebook.com/Hellotravelindia.in/', fa: 'facebook' },
        { name: 'Twitter', url: 'https://twitter.com/Hellotravelindi', fa: 'twitter' },
        { name: 'Instagram', url: 'https://www.instagram.com/hellotravelindia/', fa: 'instagram' },
        { name: 'Google Plus', url: 'https://plus.google.com/u/0/102226803792616555479', fa: 'google-plus' }
    ],
    packagesLabel: {
        itineraryHighlightLbl: "Itinerary Highlight",
        inclusionLbl: "Inclusions",
        priceLbl: "Price",
        bookNowBtnLbl: "Book Now",
        itineraryDetailsLbl: "Package Itinerary",
        packageCostLbl: "Package Cost",
        packageIncludesLbl: "Package Includes",
        costSlabLbl: "Pax Slabs & Supplments Tour",
        costLbl: "Cost"
    },
    pagesData: {
        packages: {
            brief: "",
            btnTxt1: "Know More",
            btnTxt2: "Show Packages",
            breadcrumbTxt: "Packages",
            packageDestination: [
                {
                    title: "Kashmir Packages",
                    description: "",
                    url: "/kashmir-packages"
                },
                {
                    title: "Golden Triangle",
                    description: "",
                    url: "/golden-triangle-packages"
                },
                {
                    title: "Nepal Packages",
                    description: "",
                    url: "/nepal-packages"
                },
                {
                    title: "Bhutan Packages",
                    description: "",
                    url: "/bhutan-packages"
                }
            ]
        },
        kashmirPackages: {},
        destination: {
            brief: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            btnTxt: "Plan a Trip",
            international: {
                destinationList: [
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Thailand",
                        description: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Nepal",
                        description: "Nepal is in Southern Asia, between China and India. It covers total area of 143,351 sq km and its boundary is 2,926 km long in total, bordered by China 1,236 km and India 1,690 km. It is a landlocked country. \n                        The weather and climate varies from hot summers to severe winters. Nepal has varieties of lands as it has weather and people. The land starts from 70m from sea level from Kanchan Kalan in Terai and passes though hilly region to the world's highest point Mount Everest at 8,850 m.\n                        Nepal is known for its natural beauty and it has its own cultures. It has more than 70 ethnic groups and more than 60 different languages are spoken in different parts of Nepal. Nepali is the national language of Nepal. People practice several religion. Till now Hinduism and Buddhism have the largest population.\n                        Kathmandu is the capital, and Nepal has 30 million people.\n                        "
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Bhutan",
                        description: "Bhutan, a Buddhist kingdom on the Himalayas\u2019 eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes that range from subtropical plains to steep mountains and valleys. In the High Himalayas, peaks such as 7,326m Jomolhari are popular trekking destinations. Paro Taktsang monastery (also known as Tiger\u2019s Nest) clings to cliffs above the forested Paro Valley."
                    }
                ]
            },
            domestic: {
                destinationList: [
                    {
                        picture: destinationImgPath + "delhi.jpg",
                        title: "delhi",
                        description: "Delhi, the capital of India has a strong historical background. It was ruled by some of the most powerful emperors in Indian history. \n                        \n                        The history of the city is as old as the epic Mahabharata. The town was known as Indraprastha, where Pandavas used to live. In due course eight more cities came alive adjacent to Indraprastha: Lal Kot, Siri, Dinpanah, Quila Rai Pithora, Ferozabad, Jahanpanah, Tughlakabad and Shahjahanabad. \n                        \n                        Delhi has been a witness to the political turmoil for over five centuries. It was ruled by the Mughals in succession to Khiljis and Tughlaqs.\n                        "
                    },
                    {
                        picture: destinationImgPath + "domestic-img2.jpg",
                        title: "Agra",
                        description: "Agra is a city in northern India\u2019s Uttar Pradesh state. It's home to the iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan\u2019s wife, Mumtaz Mahal (who died in childbirth in 1631). The imposing main building features a massive dome and intricately carved white marble inlaid with precious stones. This is set behind a reflecting pool inside a courtyard defined by 4 minarets."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Jaipur",
                        description: "Jaipur is the capital of India\u2019s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or \u201CPink City\u201D for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Jodhpur",
                        description: "Jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that\u2019s now a museum, displaying weapons, paintings and elaborate royal palanquins (sedan chairs). Set on on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city\u2019s iconic shade of blue."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Jasilmer",
                        description: "Jaisalmer is a former medieval trading center and a princely state in the western Indian state of Rajasthan, in the heart of the Thar Desert. Known as the \"Golden City,\" it's distinguished by its yellow sandstone architecture. Dominating the skyline is Jaisalmer Fort, a sprawling hilltop citadel buttressed by 99 bastions. Behind its massive walls stand the ornate Maharaja's Palace and intricately carved Jain temples."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Udaipur",
                        description: "Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it\u2019s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Amritsar",
                        description: "Amritsar is a city in the northwestern Indian state of Punjab, 28 kilometers from the border with Pakistan. At the center of its walled old town, the gilded Golden Temple (Harmandir Sahib) is the holiest gurdwara (religious complex) of the Sikh religion. It\u2019s at the end of a causeway, surrounded by the sacred Amrit Sarovar tank (lake), where pilgrims bathe."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Shimla",
                        description: "Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It\u2019s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Kullu-Manali",
                        description: "Manali is a high-altitude Himalayan resort town in India\u2019s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it\u2019s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Kasol",
                        description: ""
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Dharamshala",
                        description: "Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile. The Thekchen Ch\u00F6ling Temple Complex is a spiritual center for Tibetan Buddhism, while the Library of Tibetan Works and Archives houses thousands of precious manuscripts."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Dalhousie",
                        description: "Dalhousie is a high-altitude town spread across 5 hills near the Dhauladhar mountain range in the north Indian state of Himachal Pradesh. It's home to colonial-era buildings, including St. Francis and St. John\u2019s churches, which date back to the rule of the British Raj in the 1800s. A trek up Dainkund Peak leads to Pholani Devi Temple. To the north, Subhash Baoli is a peaceful area with pine trees and panoramic views."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Varanasi",
                        description: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River\u2019s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the \"Golden Temple,\" dedicated to the Hindu god Shiva."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Lucknow",
                        description: ""
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Leh ladakh",
                        description: "Leh, a high-desert city in the Himalayas, is the capital of the Leh region in northern India\u2019s Jammu and Kashmir state. Originally a stop for trading caravans, Leh is now known for its Buddhist sites and nearby trekking areas. Massive 17th-century Leh Palace, modeled on the Dalai Lama\u2019s former home (Tibet\u2019s Potala Palace), overlooks the old town\u2019s bazaar and mazelike lanes."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Jammu",
                        description: "Jammu - the Duggar land where the past still has a living presence. A land of grand ancient temples, and beautiful palaces. Nestled against the backdrop of the snow-capped Pir Panjal Mountains, the region of Jammu constitutes the southernmost unit of the state of Jammu & Kashmir. It forms part of the transition between the Himalayan range in the north and the dusty plains of Punjab in the south. Between these two extremities lie a series of scrub-covered hills, forested mountain ranges and river valleys, encompassing several microclimatic regions that extend from Kishtawar in the north-east to Akhnoor in the south-west, and the historic town of Poonch in the north-west to the borders of Kangra (H P) in the south-east. The Shivalik hills cut across the area from the east to the west while the rivers Ravi, Tawi and Chenab cut their way through the region."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Kashmir",
                        description: "Jammu & Kashmir is a state in India. It is a large state and was ruled by a Maharaja (Indian King) in the past. Jammu & Kashmir is made up of many regions but is called Jammu & Kashmir because the two most populous regions in the state are called Jammu and Kashmir. There are other distinct regions in the state including Ladakh, Gilgit, Baltistan and Skardu. India's neighbour, Pakistan, grabbed many of these regions about 50 years ago. Some parts of the state were forcibly taken over by China. The largest portion of the original state of Jammu & Kashmir remains as a state within India.\n                        Kashmir is a beautiful valley in the northernmost part of India. It is part of a state called Jammu & Kashmir. The Kashmir Valley is surrounded by some of the highest mountain ranges in the world. The valley itself is green and thickly populated. The people of this Valley are highly evolved and have therefore dominated the history and culture of the state.\n                        "
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "North East",
                        description: ""
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Bodh Gaya",
                        description: "Bodh Gaya, or Bodhgaya, is a village in the northeast Indian state of Bihar. Considered one of the most important Buddhist pilgrimage sites, it's dominated by the ancient brick Mahabodhi Temple Complex, built to mark the site where the Buddha attained enlightenment beneath a sacred Bodhi Tree. A direct descendant of the tree sits within the complex today, along with six other sacred sites, including a lotus pond."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Goa",
                        description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area\u2019s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda."
                    },
                    {
                        picture: destinationImgPath + "default-img.jpg",
                        title: "Mumbai",
                        description: "Mumbai (formerly called Bombay) is a densely populated city on India\u2019s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry."
                    }
                ]
            }
        }
    }
};
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/global/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--[if lt IE 8]>\r\n        <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\r\n    <![endif]-->\r\n<header class=\"header\">\r\n    <div class=\"top-header\">\r\n        <div class=\"kd-topbar\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-7\">\r\n                        <ul class=\"kd-topinfo\">\r\n                            <li>\r\n                                <i class=\"fa fa-phone\"></i> Phone: +91- 7006036459 </li>\r\n                            <li>\r\n                                <i class=\"fa fa-envelope-o\"></i>\r\n                                <a href=\"mailto:info@hellotravelindia.in\">Email: info@hellotravelindia.in</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <ul class=\"kd-userinfo\">\r\n                            <li>\r\n                                <div class=\"kd-social-network\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let social of socialMedia\">\r\n                                            <a href=\"{{social.url}}\" target=\"_blank\" rel=\"nofollow\">\r\n                                                <i class=\"fa fa-{{social.fa}}\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"coming-soon.php\">Blogs</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container main-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 logo-section\">\r\n                <a title=\"\" routerLink=\"/home\">\r\n                    <img src=\"{{img_path}}hellotravelindia-small.png\" class=\"hti-logo img-responsive\">\r\n                </a>\r\n            </div>\r\n            <div class=\"col-md-9 nav-section\">\r\n                <nav class=\"hr-nav-wrapper\">\r\n                    <div class=\"navigation hr-navigation pull-right\">\r\n                        <ul>\r\n                            <li *ngFor=\"let route of router\" routerLinkActive=\"active\">\r\n                                <a routerLink=\"{{route.path}}\" (click)=\"setTitle(route.navTitle)\" title=\"\" *ngIf=\"route.visibleOnMain\">{{route.navTitle}}</a>\r\n                                <!--route.path!='' && route.path!='**' && route.position!='subMenu'-->\r\n\r\n                                <!--<ul>\r\n                                    <li *ngFor=\"let childRoute of route.children\" routerLinkActive=\"active\">\r\n                                        <a [routerLink]=\"['./'+childRoute.path]\" >childRoute</a>\r\n                                    </li>\r\n                                </ul>-->\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </nav>\r\n                <!-- nav Section end here-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/global/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_router__ = __webpack_require__("../../../../../src/app/global/router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global Service

var HeaderComponent = (function () {
    function HeaderComponent(titleService) {
        this.titleService = titleService;
        this.img_path = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].img_path;
        this.socialMedia = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].socialMedia;
        this.router = __WEBPACK_IMPORTED_MODULE_3__global_router__["a" /* ROUTER */];
    }
    HeaderComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'header-section',
        template: __webpack_require__("../../../../../src/app/global/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/packages.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PackagesServices = (function () {
    function PackagesServices(http) {
        var _this = this;
        this.http = http;
        this.dataRoot = "assets/data/";
        // Packages Data File
        this.nepalPackages = this.dataRoot + "nepal.packages.json";
        this.kashmirPackages = this.dataRoot + "kashmir.packages.json";
        this.gtPackages = this.dataRoot + "golden.triangle.packages.json";
        // Nepal Packages
        this.getPackages = function () {
            return _this.http.get(_this.nepalPackages).map(function (res) { return res.json(); });
        };
        // Kashmir Packages
        this.getKashmirPackages = function () {
            return _this.http.get(_this.kashmirPackages).map(function (res) { return res.json(); });
        };
        // Kashmir Packages
        this.getGTPackages = function () {
            return _this.http.get(_this.gtPackages).map(function (res) { return res.json(); });
        };
    }
    return PackagesServices;
}());
PackagesServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PackagesServices);

var _a;
//# sourceMappingURL=packages.services.js.map

/***/ }),

/***/ "../../../../../src/app/global/packages/gt.menu.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- All packages Menu-->\r\n <div class=\"packages-menu\">\r\n    <ul class=\"custom-list\">\r\n        <li *ngFor=\"let allPkgs of allPackages.packages; let i = index;\" routerLinkActive=\"active\">\r\n            <a routerLink=\"/kashmir-package-{{i+startingNight}}n\" class=\"packages-link\" title=\"{{allPkgs.title}}\">{{allPkgs.title}} </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<!-- Packages Menu End here-->"

/***/ }),

/***/ "../../../../../src/app/global/packages/gt.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global Service
var GtMenu = (function () {
    function GtMenu(packageService, elementRef) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 5;
        this.startingNight = 5;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getGTPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.pkg = _this.allPackages.packages[0];
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    return GtMenu;
}());
GtMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gt-menu',
        template: __webpack_require__("../../../../../src/app/global/packages/gt.menu.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], GtMenu);

var _a, _b;
//# sourceMappingURL=gt.menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/packages/kashmir.menu.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- All packages Menu-->\r\n <div class=\"packages-menu\">\r\n    <ul class=\"custom-list\">\r\n        <li *ngFor=\"let allPkgs of packages; let i = index;\" routerLinkActive=\"active\">\r\n            <a routerLink=\"/kashmir-package-{{i+startingNight}}n\" class=\"packages-link\" title=\"{{allPkgs.title}}\">{{allPkgs.title}} </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<!-- Packages Menu End here-->"

/***/ }),

/***/ "../../../../../src/app/global/packages/kashmir.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KashmirMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global Service
var KashmirMenu = (function () {
    function KashmirMenu(packageService, elementRef) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 4;
        this.startingNight = 4;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getKashmirPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.packages = _this.allPackages.packages;
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    return KashmirMenu;
}());
KashmirMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'kashmir-menu',
        template: __webpack_require__("../../../../../src/app/global/packages/kashmir.menu.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], KashmirMenu);

var _a, _b;
//# sourceMappingURL=kashmir.menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/packages/packages.menu.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- All packages Menu-->\r\n <div class=\"packages-menu\">\r\n    <ul class=\"custom-list\">\r\n        <li *ngFor=\"let allPkgs of packages; let i = index;\" routerLinkActive=\"active\">\r\n            <a routerLink=\"/nepal-package-{{i+startingNight}}n\" class=\"packages-link\" title=\"{{allPkgs.title}}\">{{allPkgs.title}} </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<!-- Packages Menu End here-->"

/***/ }),

/***/ "../../../../../src/app/global/packages/packages.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global Service
var PackagesMenu = (function () {
    function PackagesMenu(packageService, elementRef) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 4;
        this.startingNight = 2;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        var a = elementRef.nativeElement;
        var native = elementRef.nativeElement;
        var myattr = native.getAttribute("class");
        console.log("parent " + a);
        this.packageService.getPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.packages = _this.allPackages.packages;
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    return PackagesMenu;
}());
PackagesMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'packages-menu',
        template: __webpack_require__("../../../../../src/app/global/packages/packages.menu.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], PackagesMenu);

var _a, _b;
//# sourceMappingURL=packages.menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packages_packages_component__ = __webpack_require__("../../../../../src/app/packages/packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotels_hotels_component__ = __webpack_require__("../../../../../src/app/hotels/hotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__destination_destination_component__ = __webpack_require__("../../../../../src/app/destination/destination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extra_pageNotFound_component__ = __webpack_require__("../../../../../src/app/extra/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__packages_nepal_packages_component__ = __webpack_require__("../../../../../src/app/packages/nepal.packages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__packages_nepal_packages_nepal_packages_2n__ = __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.2n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__packages_nepal_packages_nepal_packages_3n__ = __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.3n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__packages_nepal_packages_nepal_packages_4n__ = __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.4n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__packages_kashmir_packages_kashmir_packages__ = __webpack_require__("../../../../../src/app/packages/kashmir-packages/kashmir.packages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__packages_gt_packages_gt_packages__ = __webpack_require__("../../../../../src/app/packages/gt-packages/gt.packages.ts");







// nepal packages






var ROUTER = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */],
        navTitle: 'Home',
        visibleOnMain: true
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        navTitle: '',
        visibleOnMain: false
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */],
        navTitle: 'About ',
        visibleOnMain: true
    },
    {
        path: 'hotels',
        component: __WEBPACK_IMPORTED_MODULE_4__hotels_hotels_component__["a" /* HotelsComponent */],
        navTitle: 'Hotels ',
        visibleOnMain: true
    },
    {
        path: 'packages',
        component: __WEBPACK_IMPORTED_MODULE_3__packages_packages_component__["a" /* PackagesComponent */],
        navTitle: 'Packages ',
        visibleOnMain: true
    },
    {
        path: 'destination',
        component: __WEBPACK_IMPORTED_MODULE_5__destination_destination_component__["a" /* DestinationComponent */],
        navTitle: 'Destination ',
        visibleOnMain: true
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* ContactComponent */],
        navTitle: 'Contact ',
        visibleOnMain: true
    },
    {
        path: 'nepal-packages',
        component: __WEBPACK_IMPORTED_MODULE_7__packages_nepal_packages_component__["a" /* NepalPackagesComponent */],
        navTitle: 'Nepal Packages ',
        visibleOnMain: false,
        hasChild: false,
        children: [
            {
                path: 'nepal-package-2n',
                component: __WEBPACK_IMPORTED_MODULE_8__packages_nepal_packages_nepal_packages_2n__["a" /* NepalPackageComponent_2n */],
                navTitle: '02 Night 03 Days',
                position: 'subMenu',
                visibleOnMain: false
            },
            {
                path: 'nepal-package-3n',
                component: __WEBPACK_IMPORTED_MODULE_9__packages_nepal_packages_nepal_packages_3n__["a" /* NepalPackageComponent_3n */],
                navTitle: '03 Night 04 Days',
                position: 'subMenu',
                visibleOnMain: false
            },
            {
                path: 'nepal-package-4n',
                component: __WEBPACK_IMPORTED_MODULE_10__packages_nepal_packages_nepal_packages_4n__["a" /* NepalPackageComponent_4n */],
                navTitle: '04 Night 05 Days',
                position: 'subMenu',
                visibleOnMain: false
            }
        ]
    },
    {
        path: 'kashmir-packages',
        component: __WEBPACK_IMPORTED_MODULE_11__packages_kashmir_packages_kashmir_packages__["a" /* KashmirPackages */],
        navTitle: 'Kashmir Packages',
        position: 'subMenu',
        visibleOnMain: false
    },
    {
        path: 'golden-triangle-packages',
        component: __WEBPACK_IMPORTED_MODULE_12__packages_gt_packages_gt_packages__["a" /* GtPackages */],
        navTitle: 'Golden Triangle Packages',
        position: 'subMenu',
        visibleOnMain: false
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_6__extra_pageNotFound_component__["a" /* PageNotFoundComponent */],
        visibleOnMain: true
    }
];
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../../../../src/app/global/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrapper\">\n  <div class=\"\">\n      <ngbd-carousel-config></ngbd-carousel-config>\n    \n    <div class=\"hti-tourform clearfix\">\n      <div class=\"container\">\n          <ngbd-tabset-pills></ngbd-tabset-pills>\n      </div>\n    </div>\n    <!-- hti-tourform end -->\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/global/slider/slider.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Global Service
var SliderComponent = (function () {
    function SliderComponent() {
        this.img_path = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* GLOBALS */].img_path;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'slider-section',
        template: __webpack_require__("../../../../../src/app/global/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/global/slider/slider.component.less")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/global/tabs/tabset.pills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdTabsetPills; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetPills = (function () {
    function NgbdTabsetPills() {
    }
    return NgbdTabsetPills;
}());
NgbdTabsetPills = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ngbd-tabset-pills',
        template: "\n  <ngb-tabset type=\"pills\">\n  <ngb-tab title=\"Flights\">\n    <ng-template ngbTabContent>\n        <div id=\"menu2\" class=\"tab-pane\">\n            <form>\n              <ul class=\"tabConetentBox\">\n                <li>\n                  <label>\n                    <select class=\"ddlFlight\">\n                      <option value=\"SF\" selected=\"\">Select Flight</option>\n                      <option value=\"AI\">Air India</option>\n                      <option value=\"9W\">Jet Airways</option>\n                      <option value=\"UK\">Vistara</option>\n                      <option value=\"6E\">IndiGo</option>\n                      <option value=\"SG\">SpiceJet </option>\n                      <option value=\"G8\">GoAir </option>\n                      <option value=\"I5\">AirAsia </option>\n                      <option value=\"OP\">Air Pegasus </option>\n                      <option value=\"LB\">Air Costa </option>\n                      <option value=\"2T\">TruJet </option>\n                    </select>\n                  </label>\n                </li>\n                <li>\n                  <label class=\"cal\">\n                    <input type=\"text\" class=\"txtDeparture\" placeholder=\"Departure\">\n                  </label>\n                </li>\n\n                <li>\n                  <label class=\"plan\">\n                    <input type=\"text\" class=\"txtdestination\" placeholder=\"Destination\">\n                  </label>\n                </li>\n                <li>\n                  <label>\n                    <select class=\"ddlClass\">\n                      <option selected=\"\" value=\"C\">Class</option>\n                      <option value=\"E\" class=\"economy_class\">Economy</option>\n                      <option value=\"PE\" class=\"premium_class\">Premium Economy</option>\n                      <option value=\"B\" class=\"business_class\">Business</option>\n                    </select>\n                  </label>\n                </li>\n                <li>\n                  <span class=\"search-btn searchchFlight\" data-toggle=\"modal\" data-target=\"#search-popup\">search now</span>\n                </li>\n              </ul>\n            </form>\n          </div>\n    </ng-template>\n  </ngb-tab>\n\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Hotels</b></ng-template>\n    <ng-template ngbTabContent>\n        <div id=\"menu3\" class=\"tab-pane\">\n            <form>\n              <ul class=\"tabConetentBox\">\n                <li>\n                  <label class=\"h-icon1\">\n                    <input type=\"text\" class=\"txtHotelname\" placeholder=\"Hotel Name\">\n                  </label>\n\n                </li>\n                <li>\n                  <label class=\"cal\">\n                    <input type=\"text\" class=\"txtCheckinDate\" placeholder=\"Check-in\">\n                  </label>\n                </li>\n                <li>\n                  <label class=\"cal\">\n                    <input type=\"text\" class=\"txtCheckoutDate\" placeholder=\"Check-out\">\n                  </label>\n                </li>\n                <li>\n                  <label>\n                    <select class=\"ddlRoom\">\n                      <option selected=\"\" value=\"R\">Room</option>\n                      <option>1</option>\n                      <option>2</option>\n                      <option>3</option>\n                      <option>4</option>\n                    </select>\n                  </label>\n                </li>\n                <li>\n                  <span class=\"search-btn\" data-toggle=\"modal\" data-target=\"#search-popup\">search now</span>\n                </li>\n              </ul>\n            </form>\n          </div>\n    </ng-template>\n  </ngb-tab>\n\n  <ngb-tab title=\"holidays\" >\n    <ng-template ngbTabContent>\n        <div id=\"menu4\" class=\"tab-pane\">\n            <form>\n              <ul class=\"tabConetentBox\">\n                <li>\n                  <label>\n                    <select class=\"ddlSource\">\n                      <option value=\"S\" selected=\"\">Source</option>\n                      <option>Agartala</option>\n                      <option>Agra</option>\n                      <option>Agumbe</option>\n                      <option>Ahmedabad</option>\n                      <option>Aizawl</option>\n                      <option>Ajmer</option>\n                      <option>Alappuzha Beach</option>\n                      <option>Allahabad</option>\n                      <option>Alleppey</option>\n                      <option>Almora</option>\n\n                    </select>\n                  </label>\n                </li>\n                <li>\n                  <label>\n                    <select class=\"ddlDestination\">\n                      <option value=\"D\" selected=\"\">Destination</option>\n                      <option value=\"AL\">Alabama</option>\n                      <option value=\"AK\">Alaska</option>\n                      <option value=\"AZ\">Arizona</option>\n                      <option value=\"AR\">Arkansas</option>\n                      <option value=\"CA\">California</option>\n                      <option value=\"CO\">Colorado</option>\n                      <option value=\"CT\">Connecticut</option>\n                      <option value=\"DE\">Delaware</option>\n                      <option value=\"DC\">Dist of Columbia</option>\n                      <option value=\"FL\">Florida</option>\n                      <option value=\"GA\">Georgia</option>\n                      <option value=\"HI\">Hawaii</option>\n                      <option value=\"ID\">Idaho</option>\n                      <option value=\"IL\">Illinois</option>\n                      <option value=\"IN\">Indiana</option>\n                      <option value=\"IA\">Iowa</option>\n                      <option value=\"KS\">Kansas</option>\n                      <option value=\"KY\">Kentucky</option>\n\n                    </select>\n                  </label>\n                </li>\n\n\n                <li>\n                  <label>\n                    <select class=\"ddlMonthOfTravel\">\n                      <option selected=\"\" value=\"M\">Month of travel</option>\n                      <option>March 2016</option>\n                      <option>April 2016</option>\n                      <option>May 2016</option>\n                      <option>June 2016</option>\n                      <option>July 2016</option>\n                      <option>August 2016</option>\n                      <option>September 2016</option>\n                      <option>October 2016</option>\n                      <option>November 2016</option>\n                      <option>December 2016</option>\n\n                    </select>\n                  </label>\n                </li>\n                <li>\n                  <span class=\"search-btn\" data-toggle=\"modal\" data-target=\"#search-popup\">search now</span>\n                </li>\n              </ul>\n            </form>\n          </div>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n"
        //templateUrl: '../tabset-pills.html'
    })
], NgbdTabsetPills);

//# sourceMappingURL=tabset.pills.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<slider-section></slider-section>\n<div class=\"container hti-home\">\n  <div class=\"col-md-12\">\n    <div class=\"hti-modrentitle thememargin\">\n      <h3>Best Tour packages</h3>\n      <div class=\"hti-divider\">\n        <div class=\"short-seprator\"><span><i class=\"fa fa-globe\"></i></span></div>\n      </div>\n      <br>\n     \n    </div>\n  </div>\n  \n  <div class=\"col-md-12\">\n    <div class=\"hti-package-list\">\n      <div class=\"row\">\n        <article class=\"col-md-3 col-sm-6 col-xs-6\">\n          <figure>\n            <a href=\"destinations-description.html\">\n              <img src=\"{{img_path}}pakege2.jpg\" alt=\"\"></a>\n              <span class=\"package-price thbg-color\">USD 215 </span>\n            <figcaption>\n              <div class=\"hti-bottomelement\">\n                <h5><a href=\"destinations-description.html\">Thailand</a></h5>\n                <div class=\"days-counter\">\n                  <span>4</span>\n                  <br>\n                  days\n                </div>\n\n              </div>\n              <p class=\"view-more green\"><a href=\"#\">View More</a></p>\n            </figcaption>\n          </figure>\n        </article>\n        <article class=\"col-md-3 col-sm-6 col-xs-6\">\n          <figure>\n            <a href=\"destinations-description.html\">\n              <img src=\"{{img_path}}pakege3.jpg\" alt=\"\"></a>\n            <figcaption>\n              <span class=\"package-price thbg-color\">USD 365 </span>\n              <div class=\"hti-bottomelement\">\n                <h5><a href=\"#\">Nepal</a></h5>\n\n                <div class=\"days-counter\" style=\"background-color: #00c4d6;\">\n                  <span>5</span>\n                  <br>\n                  days\n                </div>\n\n              </div>\n              <p class=\"view-more yellow\"><a href=\"#\">View More</a></p>\n            </figcaption>\n          </figure>\n        </article>\n        <article class=\"col-md-3 col-sm-6 col-xs-6\">\n          <figure>\n            <a href=\"destinations-description.html\">\n              <img src=\"{{img_path}}pakege4.jpg\" alt=\"\"></a>\n            <figcaption>\n              <span class=\"package-price thbg-color\">USD 255</span>\n              <div class=\"hti-bottomelement\">\n                <h5><a href=\"Red Diamond Package.html\">Kashmir</a></h5>\n                <div class=\"days-counter\" style=\"background-color: #e61010;\">\n                  <span>5</span>\n                  <br>\n                  days\n                </div>\n\n              </div>\n              <p class=\"view-more blue\"><a href=\"#\">View More</a></p>\n            </figcaption>\n\n\n          </figure>\n        </article>\n        <article class=\"col-md-3 col-sm-6 col-xs-6\">\n          <figure>\n            <a href=\"destinations-description.html\">\n              <img src=\"{{img_path}}pakege2.jpg\" alt=\"\"></a>\n            <figcaption>\n              <span class=\"package-price thbg-color\">USD 220</span>\n              <div class=\"hti-bottomelement\">\n                <h5><a href=\"#\">Ladakh</a></h5>\n                <div class=\"days-counter\">\n                  <span>6</span>\n                  <br>\n                  days\n                </div>\n\n              </div>\n              <p class=\"view-more\"><a href=\"#\">View More</a></p>\n            </figcaption>\n          </figure>\n        </article>\n      </div>\n\n    </div>\n  </div>\n        \n  \n  <section class=\"hti-pagesection\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"hti-modrentitle thememargin\">\n                          <h3>Indian Domestic Destinations</h3>\n                          <div class=\"hti-divider\">\n                              <div class=\"short-seprator\"><span><i class=\"fa fa-globe\"></i></span></div>\n                          </div>\n                          <br>\n                          <p class=\"text-center\">\n                              When it comes to tourism, India is a country with limitless opportunities.<br> There are beaches, hills, valleys, passes, desert, plateaus, villages, metropolises - you name it, India has it. With such great options for travel, visitors to India often find themselves in a happy dilemma - What destination(s) to visit when planning a tour to India? To make matters simpler, we have presented a destination based list of tour itineraries. Some of the most prominent destinations include Rajasthan, Goa, Agra, Kerala, Himachal Pradesh among others.\n                          </p>\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n\n                      <!--// Gallery //-->\n                      <div class=\"img-gallery hti-gallery\">\n                          <ul class=\"row\">\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img2.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Agra</a></h5>\n                                      <p><strong>(Uttar Pradesh)</strong> </p>\n\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img16.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Amritsar</a></h5>\n                                      <p><strong>(Punjab)</strong> </p>\n\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img4.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Chail (Shimla Hills)</a></h5>\n                                      <p><strong>(Himachal Pradesh)</strong> </p>\n\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img6.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Corbett</a></h5>\n                                      <p><strong>(Uttarakhand)</strong> </p>\n                                  </div>\n                              </li>\n\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}dalhousie-hill-station.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Dalhousie</a></h5>\n                                      <p><strong>(Himachal Pradesh)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img12.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Goa</a></h5>\n\n                                  </div>\n                              </li>\n\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}haridwar.jpeg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Haridwar</a></h5>\n                                      <p><strong>(Uttarakhand)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}jaipur.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Jaipur</a></h5>\n                                      <p><strong>(Rajasthan)</strong> </p>\n\n                                  </div>\n                              </li>\n\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}kodai.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Kodaikanal</a></h5>\n                                      <p><strong>(Tamil nadu)</strong> </p>\n\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img5.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Manali</a></h5>\n                                      <p><strong>(Himachal Pradesh)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}mount-abu-hill-station4.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Mount Abu</a></h5>\n                                      <p><strong>(Rajasthan)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img26.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Mussoorie</a></h5>\n                                      <p><strong>(Uttaranchal)</strong> </p>\n                                  </div>\n                              </li>\n\n\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}nahan.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Nahan</a></h5>\n                                      <p><strong>(Himachal Pradesh)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}nainital.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Nainital</a></h5>\n                                      <p><strong>(Uttarakhand)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}outy.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Ooty</a></h5>\n                                      <p><strong>(Tamil nadu)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}domestic-img5.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Patni Top</a></h5>\n                                      <p><strong>(Jammu &amp; Kashmir)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}puri.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Puri</a></h5>\n                                      <p><strong>(Odisha)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}Ranthambore.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Ranthambore</a></h5>\n                                      <p><strong>(Rajasthan)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}shimla.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Shimla</a></h5>\n                                      <p><strong>(Himachal Pradesh)</strong> </p>\n                                  </div>\n                              </li>\n                              <li class=\"col-md-3 col-sm-6 col-xs-6\">\n                                  <figure>\n                                      <a href=\"destinations.html\">\n                                          <img src=\"{{img_path}}jammu.jpg\" alt=\"\"></a> <figcaption><a href=\"#\" class=\"fa fa-plus\"></a></figcaption>\n                                  </figure>\n                                  <div class=\"hti-galleryinfo\">\n                                      <h5><a href=\"destinations.html\">Srinagar</a></h5>\n                                      <p><strong>(Jammu &amp; Kashmir)</strong> </p>\n                                  </div>\n                              </li>\n\n                          </ul>\n                      </div>\n                      <!--// Gallery //-->\n\n                  </div>\n\n              </div>\n          </div>\n\n      </section>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Global Service
var HomeComponent = (function () {
    function HomeComponent() {
        this.img_path = __WEBPACK_IMPORTED_MODULE_1__global_globals__["a" /* GLOBALS */].img_path;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home-section',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.less")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/hotels/hotels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\n    <img src=\"assets/images/banner.jpg\">\n  </div>\n\n<div class=\"container\">\n  <section class=\"hti-pagesection\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"hti-modrentitle thememargin\">\n                      <h1> Hotels</h1>\n                          <div class=\"hti-divider\">\n                              <div class=\"short-seprator\"><span><i class=\"fa fa-globe\"></i></span></div>\n                          </div>\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n\n      </section>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/hotels/hotels.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hotels/hotels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelsComponent = (function () {
    function HotelsComponent() {
    }
    HotelsComponent.prototype.ngOnInit = function () {
    };
    return HotelsComponent;
}());
HotelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hotels',
        template: __webpack_require__("../../../../../src/app/hotels/hotels.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hotels/hotels.component.less")]
    }),
    __metadata("design:paramtypes", [])
], HotelsComponent);

//# sourceMappingURL=hotels.component.js.map

/***/ }),

/***/ "../../../../../src/app/packages/gt-packages/gt.packages.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\r\n    <img src=\"assets/images/banner-gt.jpg\">\r\n</div>\r\n<!-- Banner section end here-->\r\n\r\n<div class=\"breadcrumb-wrapper\">\r\n    <div class=\"container\">\r\n        <nav class=\"breadcrumb\">\r\n            <a class=\"breadcrumb-item\" routerLink=\"/home\">Home</a>\r\n            <a class=\"breadcrumb-item\" routerLink=\"/packages\">Packages</a>\r\n            <span class=\"breadcrumb-item active\">{{pkgsTitle}}</span>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- breadcrumb wrapper end here -->\r\n<div class=\"container\">\r\n    <section class=\"hti-pagesection hti-packages-page\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"hti-modrentitle\">\r\n                        <h1>{{pkgsTitle}}</h1>\r\n                        <ngb-tabset [justify]=\"currentJustify\" class=\"packages-list-wrapper-menu\">\r\n                            <div *ngFor=\"let pkgs of pkgs\">\r\n                                <ngb-tab>\r\n                                    <ng-template ngbTabTitle>\r\n                                        <span class=\"package-lists-lbl\" placement=\"top\" ngbTooltip=\"{{pkgs.title}}\" (click)=\"changePkgTitle(pkgs.title)\">\r\n                                            <span class=\"nights\">{{pkgs.nights}}N</span>\r\n                                            <span class=\"days\">{{pkgs.days}}D </span>\r\n                                        </span>\r\n                                    </ng-template>\r\n                                    <ng-template ngbTabContent>\r\n                                        <div class=\"packages-wrapper\">\r\n                                            <div class=\"col-md-4 pkg-image-section\">\r\n                                                <div class=\"package-img\">\r\n                                                    <img src=\"assets/images/packages/{{pkgs.thumbImage}}\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-8 pkg-highlights\">\r\n                                                <div class=\"col-md-12 col-lg-8\">\r\n                                                    <label>\r\n                                                        <span>\r\n                                                            <i class=\"fa fa-globe\"></i>\r\n                                                        </span> {{pkgLbl.itineraryHighlightLbl}}</label>\r\n                                                    <ul class=\"custom-list\">\r\n                                                        <li *ngFor=\"let iten of pkgs.itineraryHighlights; let i=index;\">\r\n                                                            <span class=\"highlight-day\" >Day {{i+1}}:</span> <span class=\"highlight-lines\" innerHTML=\"{{iten}}\"></span></li>\r\n                                                        <li>\r\n                                                    </ul>\r\n                                                </div>\r\n\r\n                                                <div class=\" col-md-12 col-lg-4 pkg-short-brief\">\r\n                                                    <small>{{pkgs.notes}}</small>\r\n                                                    <div class=\"package-price\">\r\n                                                        <label>{{pkgLbl.priceLbl}} :\r\n                                                            <span> {{pkgs.currency}} {{pkgs.price}}</span>\r\n                                                        </label>\r\n                                                    </div>\r\n\r\n                                                    <a href=\"#\" class=\"btn btn-primary\">{{pkgLbl.bookNowBtnLbl}}</a>\r\n                                                </div>\r\n\r\n                                                <div class=\"col-md-12 col-lg-12 pkg-short-brief\">\r\n                                                    <div class=\"inclusion-highlight\">\r\n                                                        <label>{{pkgLbl.inclusionLbl}}</label>\r\n                                                        <div *ngFor=\"let inclusion of pkgs.inclusions\" class=\"icons-wrapper\">\r\n                                                                \r\n                                                            <span class=\"icon-title\">{{inclusion}}</span>\r\n                                                            <span class=\"each-icon {{inclusion.split(' ').join('-')}}\"></span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!-- Inclusion highlight end here -->\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <!-- Package Highlights end here-->\r\n\r\n                                            <div class=\"package-description\">\r\n                                                <label class=\"medium-title\">{{pkgLbl.itineraryDetailsLbl}}</label>\r\n                                                <div class=\"package-itinerary\">\r\n                                                    <div class=\"each-day\" *ngFor=\"let itinDetails of pkgs.itineraryDetails; let i=index\">\r\n                                                        <h3>\r\n                                                            <span>Day {{i+1}}:</span> {{itinDetails.title}}</h3>\r\n                                                        <p innerHTML=\"{{itinDetails.description}}\"></p>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                                <!-- Package Itinerary end here-->\r\n\r\n                                                <label class=\"medium-title\">{{pkgLbl.packageCostLbl}}</label>\r\n                                                <div class=\"package-cost\">\r\n\r\n                                                    <table class=\"table table-hover\">\r\n                                                        <thead class=\"thead-dark\">\r\n                                                            <tr>\r\n                                                                <th>{{pkgLbl.costSlabLbl}}</th>\r\n                                                                <th>{{pkgLbl.costLbl}}</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr *ngFor=\"let pkgCost of pkgs.packageCost\">\r\n                                                                <td>{{pkgCost.paxSlabs}}</td>\r\n                                                                <td>{{pkgCost.cost}}</td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </div>\r\n                                                <!-- Package Cost end here-->\r\n\r\n                                                <label class=\"medium-title\">{{pkgLbl.packageIncludesLbl}}</label>\r\n                                                <div class=\"package-includes\">\r\n                                                    <ul class=\"list-group\">\r\n                                                        <li class=\"list-group-item\" *ngFor=\"let including of pkgs.packageIncludes\"><p innerHTML=\"{{including}}\"></p></li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                                <!-- Package Includes end here-->\r\n\r\n                                            </div>\r\n                                            <!-- Package description end here -->\r\n\r\n                                        </div>\r\n                                        <!-- Packages wrapper end here-->\r\n                                    </ng-template>\r\n                                </ngb-tab>\r\n                            </div>\r\n                        </ngb-tabset>\r\n\r\n                        <br>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/gt-packages/gt.packages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtPackages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global
var GtPackages = (function () {
    function GtPackages(packageService) {
        var _this = this;
        this.packageService = packageService;
        this.currentJustify = 'start';
        this.packageNight = 4;
        this.startingNight = 4;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getGTPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.pkgs = _this.allPackages.packages;
            _this.pkgsTitle = _this.allPackages.packagesTitle;
            var allInclu = _this.pkgs;
            var pkgLength = _this.pkgs.length;
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    // Change Package Title
    GtPackages.prototype.changePkgTitle = function (title) {
        this.pkgsTitle = title;
    };
    return GtPackages;
}());
GtPackages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'gt-packages',
        template: __webpack_require__("../../../../../src/app/packages/gt-packages/gt.packages.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object])
], GtPackages);

var _a;
//# sourceMappingURL=gt.packages.js.map

/***/ }),

/***/ "../../../../../src/app/packages/kashmir-packages/kashmir.packages.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\r\n    <img src=\"assets/images/banner-kashmir.jpg\">\r\n</div>\r\n<!-- Banner section end here-->\r\n\r\n<div class=\"breadcrumb-wrapper\">\r\n    <div class=\"container\">\r\n        <nav class=\"breadcrumb\">\r\n            <a class=\"breadcrumb-item\" routerLink=\"/home\">Home</a>\r\n            <a class=\"breadcrumb-item\" routerLink=\"/packages\">Packages</a>\r\n            <span class=\"breadcrumb-item active\">{{pkgsTitle}}</span>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- breadcrumb wrapper end here -->\r\n\r\n<div class=\"container\">\r\n    <section class=\"hti-pagesection hti-packages-page\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"hti-modrentitle\">\r\n                        <h1>{{pkgsTitle}}</h1>\r\n                        <ngb-tabset [justify]=\"currentJustify\" class=\"packages-list-wrapper-menu\">\r\n                            <div *ngFor=\"let pkgs of pkgs\">\r\n                                <ngb-tab>\r\n                                    <ng-template ngbTabTitle>\r\n                                        <span class=\"package-lists-lbl\" placement=\"top\" ngbTooltip=\"{{pkgs.title}}\" (click)=\"changePkgTitle(pkgs.title)\">\r\n                                            <span class=\"nights\">{{pkgs.nights}}N</span>\r\n                                            <span class=\"days\">{{pkgs.days}}D </span>\r\n                                        </span>\r\n                                    </ng-template>\r\n                                    <ng-template ngbTabContent>\r\n                                        <div class=\"packages-wrapper\">\r\n                                            <div class=\"col-md-4 pkg-image-section\">\r\n                                                <div class=\"package-img\">\r\n                                                    <img src=\"assets/images/packages/{{pkgs.thumbImage}}\">\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-8 pkg-highlights\">\r\n                                                <div class=\"col-md-12 col-lg-8\">\r\n                                                    <label>\r\n                                                        <span>\r\n                                                            <i class=\"fa fa-globe\"></i>\r\n                                                        </span> {{pkgLbl.itineraryHighlightLbl}}</label>\r\n                                                    <ul class=\"custom-list\">\r\n                                                        <li *ngFor=\"let iten of pkgs.itineraryHighlights; let i=index;\">\r\n                                                            <span>Day {{i+1}}:</span> {{iten}}</li>\r\n                                                        <li>\r\n                                                    </ul>\r\n                                                </div>\r\n\r\n                                                <div class=\" col-md-12 col-lg-4 pkg-short-brief\">\r\n                                                    <small>{{pkgs.notes}}</small>\r\n                                                    <div class=\"package-price\">\r\n                                                        <label>{{pkgLbl.priceLbl}} :\r\n                                                            <span> {{pkgs.currency}} {{pkgs.price}}</span>\r\n                                                        </label>\r\n                                                    </div>\r\n\r\n                                                    <a href=\"#\" class=\"btn btn-primary\">{{pkgLbl.bookNowBtnLbl}}</a>\r\n                                                </div>\r\n\r\n                                                <div class=\"col-md-12 col-lg-12 pkg-short-brief\">\r\n                                                    <div class=\"inclusion-highlight\">\r\n                                                        <label>{{pkgLbl.inclusionLbl}}</label>\r\n                                                        <div *ngFor=\"let inclusion of pkgs.inclusions\" class=\"icons-wrapper\">\r\n\r\n                                                            <span class=\"icon-title\">{{inclusion}}</span>\r\n                                                            <span class=\"each-icon {{inclusion.split(' ').join('-')}}\"></span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!-- Inclusion highlight end here -->\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <!-- Package Highlights end here-->\r\n\r\n                                            <div class=\"package-description\">\r\n                                                <label class=\"medium-title\">{{pkgLbl.itineraryDetailsLbl}}</label>\r\n                                                <div class=\"package-itinerary\">\r\n                                                    <div class=\"each-day\" *ngFor=\"let itinDetails of pkgs.itineraryDetails; let i=index\">\r\n                                                        <h3>\r\n                                                            <span>Day {{i+1}}:</span> {{itinDetails.title}}</h3>\r\n                                                        <p innerHTML=\"{{itinDetails.description}}\"></p>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                                <!-- Package Itinerary end here-->\r\n\r\n                                                <label class=\"medium-title\">{{pkgLbl.packageCostLbl}}</label>\r\n                                                <div class=\"package-cost\">\r\n\r\n                                                    <table class=\"table table-hover\">\r\n                                                        <thead class=\"thead-dark\">\r\n                                                            <tr>\r\n                                                                <th>{{pkgLbl.costSlabLbl}}</th>\r\n                                                                <th>{{pkgLbl.costLbl}}</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr *ngFor=\"let pkgCost of pkgs.packageCost\">\r\n                                                                <td>{{pkgCost.paxSlabs}}</td>\r\n                                                                <td>{{pkgCost.cost}}</td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </div>\r\n                                                <!-- Package Cost end here-->\r\n\r\n                                                <label class=\"medium-title\">{{pkgLbl.packageIncludesLbl}}</label>\r\n                                                <div class=\"package-includes\">\r\n                                                    <ul class=\"list-group\">\r\n                                                        <li class=\"list-group-item\" *ngFor=\"let including of pkgs.packageIncludes\">{{including}}</li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                                <!-- Package Includes end here-->\r\n\r\n                                            </div>\r\n                                            <!-- Package description end here -->\r\n\r\n                                        </div>\r\n                                        <!-- Packages wrapper end here-->\r\n                                    </ng-template>\r\n                                </ngb-tab>\r\n                            </div>\r\n                        </ngb-tabset>\r\n\r\n                        <br>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/kashmir-packages/kashmir.packages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KashmirPackages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global
var KashmirPackages = (function () {
    function KashmirPackages(packageService) {
        var _this = this;
        this.packageService = packageService;
        this.currentJustify = 'start';
        this.packageNight = 4;
        this.startingNight = 4;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getKashmirPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.pkgs = _this.allPackages.packages;
            _this.pkgsTitle = _this.allPackages.packagesTitle;
            var allInclu = _this.pkgs;
            var pkgLength = _this.pkgs.length;
            _this.wordH(_this.pkgs);
            //this.pkgsInclusion = this.pkgs[0].inclusions;
            //console.log("Inclu are: "+ pkgLength);
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    KashmirPackages.prototype.changePkgTitle = function (title) {
        this.pkgsTitle = title;
    };
    KashmirPackages.prototype.wordH = function (pkgsInc) {
        var pkgLength = pkgsInc.length;
        var p = pkgsInc[0].inclusions;
        var finalInclusion = [];
        for (var i = 0; i < pkgLength; i++) {
            var eachPkg = pkgsInc[i].inclusions;
            var fin = [];
            //console.log("just "+eachPkg);
            var childLen = eachPkg[i].length;
            console.log("final " + fin);
            for (var childLoop = 0; childLoop < childLen; childLoop++) {
                // var cutted = eachPkg[childLoop].split(" ").join("-");
                //console.log("ssssss "+eachPkg[childLoop]);
                //console.log("cuttin "+cutted);
                // fin.push(cutted);
            }
            console.log("final " + fin);
        }
        //arr = ["stransport","hotels","Boat Ride","sightseeing"];
        /*var f = arr[2].split(" ").join('-');
        var m = f.toLowerCase();
        console.log("an = "+m);
        return;*/
        //console.log("an = "+pkgLength);
    };
    return KashmirPackages;
}());
KashmirPackages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'kashmir-packages',
        template: __webpack_require__("../../../../../src/app/packages/kashmir-packages/kashmir.packages.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object])
], KashmirPackages);

var _a;
//# sourceMappingURL=kashmir.packages.js.map

/***/ }),

/***/ "../../../../../src/app/packages/nepal-packages/nepal.packages.2n.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\r\n    <img src=\"assets/images/banner.jpg\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <section class=\"hti-pagesection hti-packages-page\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <packages-menu class=\"nepal-package\"></packages-menu>\r\n                    <div class=\"hti-modrentitle\">\r\n                        <h1>{{pkg.title}}</h1>\r\n                        <br>\r\n                    </div>\r\n\r\n                    <div class=\"packages-wrapper\">\r\n                        <div class=\"col-md-4 pkg-image-section\">\r\n                            <div class=\"package-img\">\r\n\r\n                                <img src=\"assets/images/{{pkg.thumbImage}}\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-8 pkg-highlights\">\r\n                            <div class=\"col-md-12 col-lg-8\">\r\n                                <label>\r\n                                    <span>\r\n                                        <i class=\"fa fa-globe\"></i>\r\n                                    </span> {{pkgLbl.itineraryHighlightLbl}}</label>\r\n                                <ul class=\"custom-list\">\r\n                                    <li *ngFor=\"let iten of pkg.itineraryHighlights; let i=index;\">\r\n                                        <span>Day {{i+1}}:</span> {{iten}}</li>\r\n                                    <li>\r\n                                </ul>\r\n\r\n\r\n                                <div class=\"inclusion-highlight\">\r\n                                    <label>{{pkgLbl.inclusionLbl}}</label>\r\n\r\n                                    <div *ngFor=\"let inclusion of pkg.inclusions\">\r\n                                        <i class=\"fa fa-globe\"></i>\r\n                                        <span class=\"icon-title\">{{inclusion}}</span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\" col-md-12 col-lg-4 pkg-short-brief\">\r\n                                <small>{{pkg.notes}}</small>\r\n                                <div class=\"package-price\">\r\n                                    <label>{{pkgLbl.priceLbl}} :\r\n                                        <span> {{pkg.currency}} {{pkg.price}}</span>\r\n                                    </label>\r\n                                </div>\r\n\r\n                                <a href=\"#\" class=\"btn btn-primary\">{{pkgLbl.bookNowBtnLbl}}</a>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Package Highlights end here-->\r\n\r\n                        <div class=\"package-description\">\r\n                            <label class=\"medium-title\">{{pkgLbl.itineraryDetailsLbl}}</label>\r\n                            <div class=\"package-itinerary\">\r\n                                <div class=\"each-day\" *ngFor=\"let itinDetails of pkg.itineraryDetails; let i=index\">\r\n                                    <h3>\r\n                                        <span>Day {{i+1}}:</span> {{itinDetails.title}}</h3>\r\n                                    <p>{{itinDetails.description}}\r\n                                    </p>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- Package Itinerary end here-->\r\n\r\n                            <label class=\"medium-title\">{{pkgLbl.packageCostLbl}}</label>\r\n                            <div class=\"package-cost\">\r\n\r\n                                <table class=\"table table-hover\">\r\n                                    <thead class=\"thead-dark\">\r\n                                        <tr>\r\n                                            <th>{{pkgLbl.costSlabLbl}}</th>\r\n                                            <th>{{pkgLbl.costLbl}}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let pkgCost of pkg.packageCost\">\r\n                                            <td>{{pkgCost.paxSlabs}}</td>\r\n                                            <td>{{pkgCost.cost}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <!-- Package Cost end here-->\r\n\r\n                            <label class=\"medium-title\">{{pkgLbl.packageIncludesLbl}}</label>\r\n                            <div class=\"package-includes\">\r\n                                <ul class=\"list-group\">\r\n                                    <li class=\"list-group-item\" *ngFor=\"let including of pkg.packageIncludes\">{{including}}</li>\r\n                                </ul>\r\n                            </div>\r\n                            <!-- Package Includes end here-->\r\n\r\n                        </div>\r\n                        <!-- Package description end here -->\r\n\r\n                    </div>\r\n                    <!-- Packages wrapper end here-->\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/nepal-packages/nepal.packages.2n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NepalPackageComponent_2n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global
var NepalPackageComponent_2n = (function () {
    function NepalPackageComponent_2n(packageService) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 4;
        this.startingNight = 2;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.pkg = _this.allPackages.packages[_this.packageNight - _this.startingNight];
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    return NepalPackageComponent_2n;
}());
NepalPackageComponent_2n = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nepal-package-2n',
        template: __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.2n.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object])
], NepalPackageComponent_2n);

var _a;
//# sourceMappingURL=nepal.packages.2n.js.map

/***/ }),

/***/ "../../../../../src/app/packages/nepal-packages/nepal.packages.3n.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\r\n    <img src=\"assets/images/banner.jpg\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <section class=\"hti-pagesection hti-packages-page\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <packages-menu class=\"nepal-package\"></packages-menu>\r\n                    <div class=\"hti-modrentitle\">\r\n                        <h1>{{pkg.title}}</h1>\r\n                        <br>\r\n                    </div>\r\n\r\n                    <div class=\"packages-wrapper\">\r\n                        <div class=\"col-md-4 pkg-image-section\">\r\n                            <div class=\"package-img\">\r\n\r\n                                <img src=\"assets/images/{{pkg.thumbImage}}\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-8 pkg-highlights\">\r\n                            <div class=\"col-md-12 col-lg-8\">\r\n                                <label>\r\n                                    <span>\r\n                                        <i class=\"fa fa-globe\"></i>\r\n                                    </span> {{pkgLbl.itineraryHighlightLbl}}</label>\r\n                                <ul class=\"custom-list\">\r\n                                    <li *ngFor=\"let iten of pkg.itineraryHighlights; let i=index;\">\r\n                                        <span>Day {{i+1}}:</span> {{iten}}</li>\r\n                                    <li>\r\n                                </ul>\r\n\r\n\r\n                                <div class=\"inclusion-highlight\">\r\n                                    <label>{{pkgLbl.inclusionLbl}}</label>\r\n\r\n                                    <div *ngFor=\"let inclusion of pkg.inclusions\">\r\n                                        <i class=\"fa fa-globe\"></i>\r\n                                        <span class=\"icon-title\">{{inclusion}}</span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\" col-md-12 col-lg-4 pkg-short-brief\">\r\n                                <small>{{pkg.notes}}</small>\r\n                                <div class=\"package-price\">\r\n                                    <label>{{pkgLbl.priceLbl}} :\r\n                                        <span> {{pkg.currency}} {{pkg.price}}</span>\r\n                                    </label>\r\n                                </div>\r\n\r\n                                <a href=\"#\" class=\"btn btn-primary\">{{pkgLbl.bookNowBtnLbl}}</a>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Package Highlights end here-->\r\n\r\n                        <div class=\"package-description\">\r\n                            <label class=\"medium-title\">{{pkgLbl.itineraryDetailsLbl}}</label>\r\n                            <div class=\"package-itinerary\">\r\n                                <div class=\"each-day\" *ngFor=\"let itinDetails of pkg.itineraryDetails; let i=index\">\r\n                                    <h3>\r\n                                        <span>Day {{i+1}}:</span> {{itinDetails.title}}</h3>\r\n                                    <p>{{itinDetails.description}}\r\n                                    </p>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- Package Itinerary end here-->\r\n\r\n                            <label class=\"medium-title\">{{pkgLbl.packageCostLbl}}</label>\r\n                            <div class=\"package-cost\">\r\n\r\n                                <table class=\"table table-hover\">\r\n                                    <thead class=\"thead-dark\">\r\n                                        <tr>\r\n                                            <th>{{pkgLbl.costSlabLbl}}</th>\r\n                                            <th>{{pkgLbl.costLbl}}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let pkgCost of pkg.packageCost\">\r\n                                            <td>{{pkgCost.paxSlabs}}</td>\r\n                                            <td>{{pkgCost.cost}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <!-- Package Cost end here-->\r\n\r\n                            <label class=\"medium-title\">{{pkgLbl.packageIncludesLbl}}</label>\r\n                            <div class=\"package-includes\">\r\n                                <ul class=\"list-group\">\r\n                                    <li class=\"list-group-item\" *ngFor=\"let including of pkg.packageIncludes\">{{including}}</li>\r\n                                </ul>\r\n                            </div>\r\n                            <!-- Package Includes end here-->\r\n\r\n                        </div>\r\n                        <!-- Package description end here -->\r\n\r\n                    </div>\r\n                    <!-- Packages wrapper end here-->\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/nepal-packages/nepal.packages.3n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NepalPackageComponent_3n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global
var NepalPackageComponent_3n = (function () {
    function NepalPackageComponent_3n(packageService) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 3;
        this.startingNight = 2;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.pkg = _this.allPackages.packages[_this.packageNight - _this.startingNight];
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    return NepalPackageComponent_3n;
}());
NepalPackageComponent_3n = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nepal-package-3n',
        template: __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.3n.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object])
], NepalPackageComponent_3n);

var _a;
//# sourceMappingURL=nepal.packages.3n.js.map

/***/ }),

/***/ "../../../../../src/app/packages/nepal-packages/nepal.packages.4n.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\r\n    <img src=\"assets/images/banner.jpg\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <section class=\"hti-pagesection hti-packages-page\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <packages-menu class=\"nepal-package\"></packages-menu>\r\n                    <div class=\"hti-modrentitle\">\r\n                        <h1>{{pkg.title}}</h1>\r\n                        <br>\r\n                    </div>\r\n\r\n                    <div class=\"packages-wrapper\">\r\n                        <div class=\"col-md-4 pkg-image-section\">\r\n                            <div class=\"package-img\">\r\n\r\n                                <img src=\"assets/images/{{pkg.thumbImage}}\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-8 pkg-highlights\">\r\n                            <div class=\"col-md-12 col-lg-8\">\r\n                                <label>\r\n                                    <span>\r\n                                        <i class=\"fa fa-globe\"></i>\r\n                                    </span> {{pkgLbl.itineraryHighlightLbl}}</label>\r\n                                <ul class=\"custom-list\">\r\n                                    <li *ngFor=\"let iten of pkg.itineraryHighlights; let i=index;\">\r\n                                        <span>Day {{i+1}}:</span> {{iten}}</li>\r\n                                    <li>\r\n                                </ul>\r\n\r\n\r\n                                <div class=\"inclusion-highlight\">\r\n                                    <label>{{pkgLbl.inclusionLbl}}</label>\r\n\r\n                                    <div *ngFor=\"let inclusion of pkg.inclusions\">\r\n                                        <i class=\"fa fa-globe\"></i>\r\n                                        <span class=\"icon-title\">{{inclusion}}</span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\" col-md-12 col-lg-4 pkg-short-brief\">\r\n                                <small>{{pkg.notes}}</small>\r\n                                <div class=\"package-price\">\r\n                                    <label>{{pkgLbl.priceLbl}} :\r\n                                        <span> {{pkg.currency}} {{pkg.price}}</span>\r\n                                    </label>\r\n                                </div>\r\n\r\n                                <a href=\"#\" class=\"btn btn-primary\">{{pkgLbl.bookNowBtnLbl}}</a>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Package Highlights end here-->\r\n\r\n                        <div class=\"package-description\">\r\n                            <label class=\"medium-title\">{{pkgLbl.itineraryDetailsLbl}}</label>\r\n                            <div class=\"package-itinerary\">\r\n                                <div class=\"each-day\" *ngFor=\"let itinDetails of pkg.itineraryDetails; let i=index\">\r\n                                    <h3>\r\n                                        <span>Day {{i+1}}:</span> {{itinDetails.title}}</h3>\r\n                                    <p>{{itinDetails.description}}\r\n                                    </p>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- Package Itinerary end here-->\r\n\r\n                            <label class=\"medium-title\">{{pkgLbl.packageCostLbl}}</label>\r\n                            <div class=\"package-cost\">\r\n\r\n                                <table class=\"table table-hover\">\r\n                                    <thead class=\"thead-dark\">\r\n                                        <tr>\r\n                                            <th>{{pkgLbl.costSlabLbl}}</th>\r\n                                            <th>{{pkgLbl.costLbl}}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let pkgCost of pkg.packageCost\">\r\n                                            <td>{{pkgCost.paxSlabs}}</td>\r\n                                            <td>{{pkgCost.cost}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <!-- Package Cost end here-->\r\n\r\n                            <label class=\"medium-title\">{{pkgLbl.packageIncludesLbl}}</label>\r\n                            <div class=\"package-includes\">\r\n                                <ul class=\"list-group\">\r\n                                    <li class=\"list-group-item\" *ngFor=\"let including of pkg.packageIncludes\">{{including}}</li>\r\n                                </ul>\r\n                            </div>\r\n                            <!-- Package Includes end here-->\r\n\r\n                        </div>\r\n                        <!-- Package description end here -->\r\n\r\n                    </div>\r\n                    <!-- Packages wrapper end here-->\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/nepal-packages/nepal.packages.4n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NepalPackageComponent_4n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Global
var NepalPackageComponent_4n = (function () {
    function NepalPackageComponent_4n(packageService) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 4;
        this.startingNight = 2;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_2__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.packageService.getPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.pkg = _this.allPackages.packages[_this.packageNight - _this.startingNight];
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    return NepalPackageComponent_4n;
}());
NepalPackageComponent_4n = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nepal-package-4n',
        template: __webpack_require__("../../../../../src/app/packages/nepal-packages/nepal.packages.4n.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object])
], NepalPackageComponent_4n);

var _a;
//# sourceMappingURL=nepal.packages.4n.js.map

/***/ }),

/***/ "../../../../../src/app/packages/nepal.packages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\n    <img src=\"assets/images/banner.jpg\">\n</div>\n\n<div class=\"container\">\n    <section class=\"hti-pagesection\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hti-modrentitle thememargin\">\n                        <h1>Nepal Packages</h1>\n                        <div class=\"hti-divider\">\n                            <div class=\"short-seprator\">\n                                <span>\n                                    <i class=\"fa fa-globe\"></i>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <nav>\n                        <ul>\n                            <li *ngFor=\"let route of router\">\n                                {{route.hasChild}}\n\n                                <ul *ngIf=\"route.hasChild\">\n                                    <li *ngFor=\"let childRoute of route.children\" routerLinkActive=\"active\">\n                                        <a [routerLink]=\"['./'+childRoute.path]\">childRoute</a>\n                                    </li>\n                                </ul>\n                                <!-- <ul>\n                                    <li *ngFor=\"let childRoute of route.children\">\n                                        <a [routerLink]=\"['nepal-package-2n']\"></a>\n                                    </li>\n                                </ul> -->\n                            </li>\n                        </ul>\n                        <!-- <a [routerLink]=\"['nepal-package-2n']\">nepal-package-2n</a>\n                        <a [routerLink]=\"['nepal-package-3n']\">nepal-package-3n</a> -->\n                    </nav>\n\n                    <router-outlet></router-outlet>\n                    <br>\n                </div>\n\n            </div>\n        </div>\n\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/nepal.packages.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/packages/nepal.packages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NepalPackagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_packages_services__ = __webpack_require__("../../../../../src/app/global/packages.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_router__ = __webpack_require__("../../../../../src/app/global/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // Global Service
var NepalPackagesComponent = (function () {
    function NepalPackagesComponent(packageService) {
        var _this = this;
        this.packageService = packageService;
        this.packageNight = 4;
        this.startingNight = 4;
        this.pkgLbl = __WEBPACK_IMPORTED_MODULE_3__global_globals__["a" /* GLOBALS */].packagesLabel;
        this.router = __WEBPACK_IMPORTED_MODULE_2__global_router__["a" /* ROUTER */];
        this.packageService.getKashmirPackages()
            .subscribe(function (res) {
            _this.allPackages = res;
            _this.packages = _this.allPackages.packages;
        }, function (error) { return console.log("error : " + error); }, function () { return console.log('Error in GetApplication in Login : ' + Error); });
    }
    NepalPackagesComponent.prototype.ngOnInit = function () {
    };
    return NepalPackagesComponent;
}());
NepalPackagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'nepal-packages',
        template: __webpack_require__("../../../../../src/app/packages/nepal.packages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/packages/nepal.packages.component.less")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_packages_services__["a" /* PackagesServices */]) === "function" && _a || Object])
], NepalPackagesComponent);

var _a;
//# sourceMappingURL=nepal.packages.component.js.map

/***/ }),

/***/ "../../../../../src/app/packages/packages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-section\">\n    <img src=\"assets/images/banner-packages.jpg\">\n</div>\n\n<div class=\"breadcrumb-wrapper\">\n    <div class=\"container\">\n        <nav class=\"breadcrumb\">\n            <a class=\"breadcrumb-item\" routerLink=\"/home\">Home</a>\n            <span class=\"breadcrumb-item active\">Packages</span>\n        </nav>\n    </div>\n</div>\n<!-- breadcrumb wrapper end here -->\n\n<div class=\"container\">\n    <section class=\"hti-pagesection\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hti-modrentitle thememargin\">\n                        <h1>Packages</h1>\n                        <div class=\"hti-divider\">\n                            <div class=\"short-seprator\">\n                                <span>\n                                    <i class=\"fa fa-globe\"></i>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"packages-list\">\n                        <div class=\"col-md-4\" *ngFor=\"let pkgDest of pkgDest\">\n                            <div class=\"card text-white bg-info mb-3\">\n                                <div class=\"card-header\">\n                                    <h5>{{pkgDest.title}}</h5>\n                                    <img src=\"assets/images/domestic-img14.jpg\">\n                                </div>\n                                <div class=\"card-body\">\n                                    <a routerLink=\"/destination\" class=\"btn btn-outline-secondary\">{{pkgData.btnTxt1}}</a>\n                                    <a routerLink=\"{{pkgDest.url}}\" class=\"btn btn-outline-warning\">{{pkgData.btnTxt2}}</a>\n                                </div>\n                            </div>\n                        </div>\n\n                       \n                    </div>\n\n                    <br>\n                </div>\n\n            </div>\n        </div>\n\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/packages/packages.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/packages/packages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_globals__ = __webpack_require__("../../../../../src/app/global/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Global Service
var PackagesComponent = (function () {
    function PackagesComponent() {
        this.pkgData = __WEBPACK_IMPORTED_MODULE_1__global_globals__["a" /* GLOBALS */].pagesData.packages;
        this.pkgDest = this.pkgData.packageDestination;
    }
    PackagesComponent.prototype.ngOnInit = function () {
    };
    return PackagesComponent;
}());
PackagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-packages',
        template: __webpack_require__("../../../../../src/app/packages/packages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/packages/packages.component.less")]
    }),
    __metadata("design:paramtypes", [])
], PackagesComponent);

//# sourceMappingURL=packages.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map