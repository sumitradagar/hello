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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <nav class=\"navbar navbar-light bg-light\">\r\n    <span class=\"navbar-brand mb-0 h1\">Countries of the world</span>\r\n  </nav>\r\n\r\n<!-- <app-country></app-country> -->\r\n<!-- <app-root></app-root> -->\r\n<!-- <app-home></app-home> -->\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language/language.component */ "./src/app/language/language.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/currency/currency.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _single_view_single_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-view/single-view.component */ "./src/app/single-view/single-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_5__["CountryComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _language_language_component__WEBPACK_IMPORTED_MODULE_8__["LanguageComponent"],
                _currency_currency_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_10__["RegionComponent"],
                _single_view_single_view_component__WEBPACK_IMPORTED_MODULE_11__["SingleViewComponent"],
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: 'country', component: _country_country_component__WEBPACK_IMPORTED_MODULE_5__["CountryComponent"] },
                    { path: 'language', component: _language_language_component__WEBPACK_IMPORTED_MODULE_8__["LanguageComponent"] },
                    { path: 'currency', component: _currency_currency_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyComponent"] },
                    { path: 'region/:name', component: _region_region_component__WEBPACK_IMPORTED_MODULE_10__["RegionComponent"] },
                    { path: 'single-view/:name', component: _single_view_single_view_component__WEBPACK_IMPORTED_MODULE_11__["SingleViewComponent"] }
                ])
            ],
            providers: [_services_country_service__WEBPACK_IMPORTED_MODULE_0__["CountryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country/country.component.css":
/*!***********************************************!*\
  !*** ./src/app/country/country.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column{\r\n    margin: 1vh\r\n}\r\n.right{\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\nbutton:hover{\r\n    background-color: blue\r\n}\r\np:hover{\r\n    background-color:#aaa;\r\n    cursor: pointer\r\n}\r\ndiv:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/country/country.component.html":
/*!************************************************!*\
  !*** ./src/app/country/country.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width,user-scalable=no,initial-scale=1\">\n\n  <title>Country</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-dark bg-dark\">\n    <span class=\"navbar-brand mb-0 h1\">All Country View</span>\n    <button (click)=\"view()\" class=\"right\">back to previous</button>\n  </nav>\n\n  <div class=\"container-fluid\">\n    <div class=\"row  justify-content-around\">\n      <div *ngFor='let c of modal' class=\"col-sm-3 column\">\n\n        <div class=\"card  \" style=\"width: 18rem;\">\n\n          <div class=\"card-body\">\n            <ul class=\"list-group list-group-flush\">\n              <div class=\"card-header\">\n                <a class=\"card-title \" [routerLink]=\"['/single-view' , c.name]\">\n                  <h3>{{ c.name }}</h3>\n                </a>\n\n              </div>\n              <li class=\"list-group-item d-flex justify-content-start\">\n                <h6>Capital:</h6>\n                <p class=\"card-text text-sm-right\">{{ c.capital }}</p>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-start\">\n                <h6>Region:</h6>\n                <p class=\"card-text text-sm-right\" [routerLink]=\"['/region' , c.region]\">{{ c.region }}</p>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-start \" [routerLink]=\"['/language']\">\n                <h6>Language:</h6>\n                <p *ngFor='let lang of c.languages'>{{ lang }}, </p>\n              </li>\n\n              <li class=\"list-group-item d-flex justify-content-start\">\n                <h6>CountryCode(Alpha2) :</h6>\n                <p class=\"card-text text-sm-right\">{{ c.cca2 }}</p>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-start\">\n                <h6> CountryCode(Alpha3) :</h6>\n                <p class=\"card-text text-sm-right\">{{ c.ccn3 }}</p>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-start\">\n                <h6>Currency : </h6>\n                <p class=\"card-text text-sm-right\" [routerLink]=\"['/currency']\">{{ c.currency }}</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div>\n\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryComponent = /** @class */ (function () {
    //initialise service,Router,ActivatedRoute
    function CountryComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call the function from service component that return observable
        this.service.getallCountry()
            .subscribe(function (countries) {
            //here map is used to convert in to array 
            _this.modal = countries.map(function (_a) {
                var name = _a.name, languages = _a.languages, cca2 = _a.cca2, ccn3 = _a.ccn3, region = _a.region, currency = _a.currency, capital = _a.capital;
                return ({
                    name: name && name.common, languages: Object.keys(languages), cca2: cca2, capital: capital,
                    ccn3: ccn3, region: region, currency: currency
                });
            });
        }, function (error) {
            alert("An unexpected error occured");
            console.log(error);
        });
    };
    //function used to navigate to the previous page
    CountryComponent.prototype.view = function () {
        this.router.navigate(['/']);
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/currency/currency.component.css":
/*!*************************************************!*\
  !*** ./src/app/currency/currency.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column{\r\n    margin:2vh\r\n    \r\n}\r\n.right{\r\n    float: right;\r\n    cursor: pointer\r\n}\r\nbutton:hover{\r\n    background-color: blue\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/currency/currency.component.html":
/*!**************************************************!*\
  !*** ./src/app/currency/currency.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n    <span class=\"navbar-brand mb-0 h1\">All Country View</span>\n    <!-- create a button and set click event -->\n    <button (click)=\"viewAll()\" class=\"right\">back to previous</button>\n  </nav>\n\n\n\n<div class=\"container-fluid\"><h3>{{name}}</h3>\n  <div \n  class=\"row\">\n    <div  *ngFor = 'let t of currency '\n    class=\"col-sm-3 column\">\n    <div *ngFor='let c of t.currencies'\n    class=\"card\" style=\"width: 18rem;\">\n      <div class=\"card-header\">\n        {{t.name}}\n      </div>\n      <ul  class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">CurrencyCode :{{c.code}}</li>\n        <li class=\"list-group-item\">CurrencyName :{{c.name }}</li>\n        <li class=\"list-group-item\">CurrencySymbol :{{ c.symbol }}</li>\n      </ul>\n    </div>\n    \n    </div>\n  </div>\n</div>\n\n\n\n\n  "

/***/ }),

/***/ "./src/app/currency/currency.component.ts":
/*!************************************************!*\
  !*** ./src/app/currency/currency.component.ts ***!
  \************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurrency() //call getCurrency method from service to get detail
            .subscribe(function (currency) {
            _this.currency = currency; //fill the currency array
        }, function (error) {
            alert("An Unexpected error occured");
            console.log(error);
        });
    };
    // it is used to navigate back
    CurrencyComponent.prototype.viewAll = function () {
        this.router.navigate(['/country']);
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.css */ "./src/app/currency/currency.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    /* Set rules to fill background */\r\n    min-height: 100%;\r\n    min-width: 1024px;\r\n      \r\n    /* Set up proportionate scaling */\r\n    width: 100%;\r\n    height: auto;\r\n      \r\n    /* Set up positioning */\r\n    position: fixed;\r\n    top: 5;\r\n    left: 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 1024px) { /* Specific to this particular image */\r\n    img {\r\n      padding-top: 0vh;\r\n      \r\n      left: 50%;\r\n      margin-left: -512px;   /* 50% */\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div routerLink=\"/country\">\n\n\n <div>\n   <img [src]=\"imageUrl\"  class=\"img-fluid\" alt=\"Responsive image\">\n </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageUrl = "assets/image2.png";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/language/language.component.css":
/*!*************************************************!*\
  !*** ./src/app/language/language.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column{\r\n    margin: 2vh\r\n}\r\n\r\n.right{\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: blue\r\n}\r\n"

/***/ }),

/***/ "./src/app/language/language.component.html":
/*!**************************************************!*\
  !*** ./src/app/language/language.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <button (click)=\"viewAll()\" class=\"right\">back to previous</button>\n</div> -->\n<html>\n\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>My page</title>\n</head>\n<body>\n<nav class=\"navbar navbar-dark bg-dark\">\n  <span class=\"navbar-brand mb-0 h1\">Countries with same language</span>\n  <button (click)=\"viewAll()\" class=\"right\">back to previous</button>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor='let t of language ' class=\"col-sm-3 column\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-header\">\n          {{ t.name }}\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">alpha2Code :{{t.alpha2Code}}</li>\n          <li class=\"list-group-item\">alpha2Code :{{t.alpha3Code}}</li>\n          <li class=\"list-group-item\">capital :{{ t.capital }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/language/language.component.ts":
/*!************************************************!*\
  !*** ./src/app/language/language.component.ts ***!
  \************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageComponent = /** @class */ (function () {
    //initialise the service,Router,ActivatedRoute
    function LanguageComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call the method
        this.service.getLanguage()
            .subscribe(function (response) {
            _this.language = response.json();
        }, function (error) {
            alert("An unexpected error occured");
            console.log(error);
        });
    };
    //used to navigate back
    LanguageComponent.prototype.viewAll = function () {
        this.router.navigate(['/country']);
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/language/language.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/region/region.component.css":
/*!*********************************************!*\
  !*** ./src/app/region/region.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column{\r\n    padding: 2vh;\r\n}\r\n.right{\r\n    float: right;\r\n    cursor: pointer\r\n}\r\nbutton:hover{\r\n    background-color: blue\r\n}\r\n"

/***/ }),

/***/ "./src/app/region/region.component.html":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <title>Region</title>\n</head>\n<body>\n<nav class=\"navbar navbar-dark bg-dark\">\n    <span class=\"navbar-brand mb-0 h1\">Single Country View</span>\n    <button (click)=\"viewAll()\" class=\"right\">back to previous</button>\n  </nav>\n\n<!-- <div class=\"container\">\n  <div class=\"row justify-content-around\"><h1>{{ regionName}}</h1>\n    <div *ngFor = 'let r of regionInfo'\n    class=\"col-sm-3\">\n\n    <div *ngIf =\"regionName == r.region\" \n    class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"{{ r.flag }}\" alt=\"Card image cap\">\n      <h3></h3>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Country :{{ r.name }}</h5>\n        <p class=\"card-text\">Region :{{ r.region}}</p>\n        <p class=\"card-text\">Capital :{{ r.capital}}</p>\n        <p class=\"card-text\">Subregion :{{r.subregion}}</p>\n        <p class=\"card-text\">Timezone :{{r.timezones}}</p>\n      </div>\n    </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"container\"><h1> Common Region Name:{{ regionName }}</h1>\n  <div class=\"row justify-content-around\">\n    <div \n    *ngFor = 'let r of regionInfo'class=\"col-sm-6 column\">\n      <div *ngIf =\"regionName == r.region\"\n      class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"{{ r.flag }}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Country :{{ r.name }}</h5>\n          <p class=\"card-text\">Region :{{ r.region}}</p>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Capital :{{ r.capital}}</li>\n          <li class=\"list-group-item\">Subregion :{{r.subregion}}</li>\n          <li class=\"list-group-item\">Timezone :{{r.timezones}}</li>\n        </ul>\n        \n      </div>\n    </div>\n  </div>\n</div>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegionComponent = /** @class */ (function () {
    function RegionComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    RegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var regionName = params.get('name');
            _this.service.getRegion(regionName)
                .subscribe(function (region) {
                _this.regions = region;
                //iterate the array
                for (var i in _this.regions) {
                    if (regionName == _this.regions[i].region)
                        _this.regionName = _this.regions[i].region; //access region name and store in property
                }
            }, 
            //handle the error
            function (error) {
                alert("An unexpected error occured");
                console.log(error);
            });
            //call the method 
            _this.service.getRegionFlag()
                .subscribe(function (response) {
                _this.regionInfo = response;
            }, function (error) {
                console.log(error); //handle the error
            });
        });
    };
    RegionComponent.prototype.viewAll = function () {
        this.router.navigate(['/country']);
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// this service is used in whole application 
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryService = /** @class */ (function () {
    //initialise the http service
    function CountryService(http) {
        this.http = http;
        //store the url of api in variable
        this.url = 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json';
        this.countryUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital;region;single-country;flag';
    }
    //this method used in CountryComponent return country details
    CountryService.prototype.getallCountry = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); })); //map is used to convert json data into array
    };
    //this method used in LanguageComponent
    CountryService.prototype.getLanguage = function () {
        return this.http.get('https://restcountries.eu/rest/v2/lang/es'); //making get request to server
    };
    //this method used in currency component
    CountryService.prototype.getCurrency = function () {
        return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies') //making get request to server
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }) //map is used to convert json data into array
        );
    };
    //this method used in RegionComponent
    CountryService.prototype.getRegion = function (region) {
        return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;country;flag' + region + "/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }) //map is used to convert json data into array
        );
    };
    //this method  used in SingleViewComponent
    CountryService.prototype.getId = function (name) {
        return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;country;flag' + name + "/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }) //map is used to convert json data into array
        );
    };
    //it is used in SingleViewComponent
    CountryService.prototype.getRegionFlag = function () {
        return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;country;flag;subregion;timezones')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }) //map is used to convert json data into array
        );
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/single-view/single-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-view/single-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right{\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\nbutton:hover{\r\n    background-color: blue\r\n}\r\n.column{\r\n    margin: 5vh\r\n}"

/***/ }),

/***/ "./src/app/single-view/single-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-view/single-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <title>Single country</title>\n</head>\n\n<body>\n\n<nav class=\"navbar navbar-dark bg-dark\">\n    <span class=\"navbar-brand mb-0 h1\">Single Country View</span>\n    <button (click)=\"viewAll()\" class=\"right\">View all countries</button>\n  </nav>\n\n<!-- \n<div>\n  <button (click)=\"viewAll()\" class=\"right\">View all countries</button>\n</div> -->\n\n\n\n<div class=\"card bg-dark text-white column\">\n  <img class=\"card-img\" src=\"{{ flag }}\" alt=\"Card image\">\n  <div class=\"card-img-overlay\">\n    <h3 class=\"card-title\">Country :{{ name }}</h3>\n    <p class=\"card-text\">Capital : {{ capital}}</p>\n    <p class=\"card-text\">Region : {{ region }}</p>\n  </div>\n  </div>\n  </body>\n</html>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/single-view/single-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-view/single-view.component.ts ***!
  \******************************************************/
/*! exports provided: SingleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleViewComponent", function() { return SingleViewComponent; });
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleViewComponent = /** @class */ (function () {
    function SingleViewComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    SingleViewComponent.prototype.ngOnInit = function () {
        // let name =this.route.snapshot.paramMap.get('name');
        //using route paramMap get name
        //paramMap is an observable so subscribe it
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            var name = params.get('name');
            //call the getId method via service object
            _this.service.getId(name)
                .subscribe(function (country) {
                _this.country = country; // fill the country array
                // iterate the country array to access the details
                for (var i in _this.country) {
                    if (name == _this.country[i].name) {
                        _this.name = _this.country[i].name; //access the country name
                        _this.capital = _this.country[i].capital; //access capital name
                        _this.region = _this.country[i].region; //access region name
                    }
                    else { }
                }
                //to access flag image call method getRegionFlag
                _this.service.getRegionFlag()
                    .subscribe(function (response) {
                    _this.regions = response; //fill the regions array
                    //iterate the regions array
                    for (var j in _this.regions) {
                        if (name == _this.regions[j].name) {
                            _this.flag = _this.regions[j].flag;
                        }
                    }
                });
            }, 
            //handle the error
            function (error) {
                alert("unexpected error");
                console.log(error);
            });
        });
    };
    //method to navigate to the country component
    SingleViewComponent.prototype.viewAll = function () {
        this.router.navigate(['/country']);
    };
    SingleViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-view',
            template: __webpack_require__(/*! ./single-view.component.html */ "./src/app/single-view/single-view.component.html"),
            styles: [__webpack_require__(/*! ./single-view.component.css */ "./src/app/single-view/single-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_0__["CountryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SingleViewComponent);
    return SingleViewComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DAGAR\Desktop\ang\hello\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map