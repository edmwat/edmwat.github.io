webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/home/home.module": [
		"./src/app/home/home.module.ts"
	],
	"app/products/products.module": [
		"./src/app/products/products.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            template: 'About us'
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-inverse navbar-fixed-top \">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#mainLinks\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">Edmwat Innovations</a>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-right\" id=\"mainLinks\">\n      <ul class=\"nav navbar-nav navbar-right nav-content\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products\">products</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products/fodder\">fodder</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"container-fluid main-content\">\n    <!--main content from links-->\n    <div class=\"row\">\n      <div class=\"col-md-9 col-sm-9\">\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"col-md-3 col-sm-3\">\n        <!--adverts section -->\n        <div class=\"advert\">\n          <p>adverts and o adverts and o adverts and o adverts and o</p>\n        </div>\n        \n        \n      </div>\n    </div>\n\n    \n\n  </div>\n</div>\n<footer>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n        <p>lorem ipsum</p>\n      </div>\n    </div>\n    <hr> &copy;2018 Edmwat innovations\n\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var about_component_1 = __webpack_require__("./src/app/about.component.ts");
var contact_component_1 = __webpack_require__("./src/app/contact.component.ts");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var home_module_1 = __webpack_require__("./src/app/home/home.module.ts");
var products_module_1 = __webpack_require__("./src/app/products/products.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                home_module_1.HomeModule,
                products_module_1.ProductsModule,
                app_routing_1.AppRoutes
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var about_component_1 = __webpack_require__("./src/app/about.component.ts");
var contact_component_1 = __webpack_require__("./src/app/contact.component.ts");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
];
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
    }
    AppRoutes = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutes);
    return AppRoutes;
}());
exports.AppRoutes = AppRoutes;


/***/ }),

/***/ "./src/app/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        core_1.Component({
            template: "Contac componet workds\n    \n    "
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n            <img class=\"rounded-circle\" src=\"assets/images/fodder.jpg\" alt=\"First slide\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img class=\"rounded\" src=\"assets/images/mustandspinach.jpg\" alt=\"Second slide\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img class=\"image\" src=\"assets/images/brachiaria2.jpg\" alt=\"Third slide\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n\r\n-->\r\n\r\n<carousel>\r\n    <slide>\r\n        <img src=\"assets/images/fodder.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n        <img src=\"assets/images/brachiaria2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n        <img src=\"assets/images/mustandspinach.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n</carousel>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4\">\r\n        <div class=\"panel\">\r\n            <div class=\"panel-header\">\r\n                <h3>Hydroponic Fodder</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>This is the modern way of growing crops without using soil\r\n                    <a class=\"nav-link\" routerLink=\"../products/fodder\">ReadMore</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4\">\r\n        <div class=\"panel\">\r\n            <div class=\"panel-header\">\r\n                <h3>Mustand Spinach</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>This is the modern way of growing crops without using soil\r\n                    <a class=\"nav-link\" routerLink=\"../products/spinach\">ReadMore</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-sm-4\">\r\n        <div class=\"panel\">\r\n            <div class=\"panel-header\">\r\n                <h3>Hydroponic Fodder For chicken</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>This is the modern way of growing crops without using soil\r\n                    <a class=\"nav-link\" routerLink=\"../products/fodder\">ReadMore</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-4\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-header\">\r\n                    <h3>Fodder seeds</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <p>This is the modern way of growing crops without using soil\r\n                        <a class=\"nav-link\" routerLink=\"../products/fodder\">ReadMore</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-header\">\r\n                    <h3>Brachiaria Grass</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <p>This is the modern way of growing crops without using soil\r\n                        <a class=\"nav-link\" routerLink=\"../products/spinach\">ReadMore</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-header\">\r\n                    <h3>Fodder Trays</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <p>This is the modern way of growing crops without using soil\r\n                        <a class=\"nav-link\" routerLink=\"../products/fodder\">ReadMore</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var carousel_1 = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var home_routing_1 = __webpack_require__("./src/app/home/home.routing.ts");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent
            ],
            imports: [
                carousel_1.CarouselModule.forRoot(),
                home_routing_1.HomeRoutes
            ],
            exports: [
                carousel_1.CarouselModule
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/home/home.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent }
];
var HomeRoutes = /** @class */ (function () {
    function HomeRoutes() {
    }
    HomeRoutes = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [
                router_1.RouterModule
            ]
        })
    ], HomeRoutes);
    return HomeRoutes;
}());
exports.HomeRoutes = HomeRoutes;


/***/ }),

/***/ "./src/app/products/hydroponicFodder.component.html":
/***/ (function(module, exports) {

module.exports = "hydroponic fodder works just fine"

/***/ }),

/***/ "./src/app/products/hydroponicFodder.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HydroponicFodderComponent = /** @class */ (function () {
    function HydroponicFodderComponent() {
    }
    HydroponicFodderComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/products/hydroponicFodder.component.html")
        })
    ], HydroponicFodderComponent);
    return HydroponicFodderComponent;
}());
exports.HydroponicFodderComponent = HydroponicFodderComponent;


/***/ }),

/***/ "./src/app/products/mustandSpinach.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4\">\r\n        pic\r\n    </div>\r\n    <div class=\"col-md-8 col-sm-8\">\r\n        pic details check out our new ventures we are committed to making money grow in the soil\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/mustandSpinach.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MustandSpinachComponent = /** @class */ (function () {
    function MustandSpinachComponent() {
    }
    MustandSpinachComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/products/mustandSpinach.component.html")
        })
    ], MustandSpinachComponent);
    return MustandSpinachComponent;
}());
exports.MustandSpinachComponent = MustandSpinachComponent;


/***/ }),

/***/ "./src/app/products/product.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var hydroponicFodder_component_1 = __webpack_require__("./src/app/products/hydroponicFodder.component.ts");
var mustandSpinach_component_1 = __webpack_require__("./src/app/products/mustandSpinach.component.ts");
var products_component_1 = __webpack_require__("./src/app/products/products.component.ts");
var routes = [
    {
        path: 'products', component: products_component_1.ProductsComponent,
        children: [
            { path: '', redirectTo: '/products/fodder', pathMatch: 'full' },
            { path: 'fodder', component: hydroponicFodder_component_1.HydroponicFodderComponent },
            { path: 'spinach', component: mustandSpinach_component_1.MustandSpinachComponent }
        ]
    }
];
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes() {
    }
    ProductRoutes = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], ProductRoutes);
    return ProductRoutes;
}());
exports.ProductRoutes = ProductRoutes;


/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3 col-sm-3\">\r\n    <ul class=\"nav navbar-pills navbar-stacked\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"./fodder\">Fodder</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"./spinach\">Spinach</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-md-9 col-sm-9\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/products/products.component.html")
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;


/***/ }),

/***/ "./src/app/products/products.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var hydroponicFodder_component_1 = __webpack_require__("./src/app/products/hydroponicFodder.component.ts");
var mustandSpinach_component_1 = __webpack_require__("./src/app/products/mustandSpinach.component.ts");
var product_routing_1 = __webpack_require__("./src/app/products/product.routing.ts");
var products_component_1 = __webpack_require__("./src/app/products/products.component.ts");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            declarations: [
                products_component_1.ProductsComponent,
                mustandSpinach_component_1.MustandSpinachComponent,
                hydroponicFodder_component_1.HydroponicFodderComponent
            ],
            imports: [
                product_routing_1.ProductRoutes
            ],
            exports: []
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map