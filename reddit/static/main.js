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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.router.module */ "./src/app/app.router.module.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _postwrite_postwrite_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./postwrite/postwrite.component */ "./src/app/postwrite/postwrite.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _postedit_postedit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postedit/postedit.component */ "./src/app/postedit/postedit.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //for router













function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
                _postwrite_postwrite_component__WEBPACK_IMPORTED_MODULE_12__["PostwriteComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _postedit_postedit_component__WEBPACK_IMPORTED_MODULE_14__["PosteditComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['api-token-auth'],
                        blacklistedRoutes: ['']
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _postwrite_postwrite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postwrite/postwrite.component */ "./src/app/postwrite/postwrite.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _postedit_postedit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postedit/postedit.component */ "./src/app/postedit/postedit.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");









var AppRoutes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], pathMatch: 'full' },
    { path: 'category/:id', component: _category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"] },
    { path: 'post/add', component: _postwrite_postwrite_component__WEBPACK_IMPORTED_MODULE_4__["PostwriteComponent"], pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'post/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'post/edit/:id', component: _postedit_postedit_component__WEBPACK_IMPORTED_MODULE_6__["PosteditComponent"], pathMatch: 'full' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
];
var AppRouterModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, data) {
        this.router = router;
        this.data = data;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.data.isAuthenicated()) {
            console.log("invalid token");
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 0;\r\n  display: flex;\r\n}\r\ndiv.main{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  margin-left: 60px;\r\n  margin-right: 20px;\r\n  color: #111;\r\n  flex: 3;\r\n}\r\ndiv.main>ul{\r\n  list-style: none;\r\n  width : 100%;\r\n  justify-content: center;\r\n}\r\ndiv.main>ul>li{\r\n  border: 1px solid #aaa;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n}\r\n.like{\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  vertical-align: middle;\r\n  justify-content: center;\r\n  border-right: 1px solid #aaa;\r\n  background-color: #b3c5e2;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n.like.inner{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.content{\r\n  flex: 9;\r\n  margin-left: 20px;\r\n}\r\ndiv.sidebar{\r\n  flex:1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"main\">\n    <ul>\n      <li *ngFor=\"let post of post\" [routerLink]=\"['../../post/', post.id]\">\n        <div class=\"like\">\n          <div class=\"inner\">\n            <i class=\"fas fa-arrow-up\"></i>\n            <div>{{post.like}}</div>\n            <i class=\"fas fa-arrow-down\"></i>\n          </div>\n        </div>\n        <div class=\"content\">\n          <h4>{{post.content}}</h4>\n          <h5>{{post.category.name}}</h5>\n          <h5><a href={{post.link}}>{{post.link}}</a></h5>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    CategoryComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.data.PostfromCategory(id).subscribe(function (response) { return _this.post = response; });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = /** @class */ (function () {
    function DataService(http, router, jwtHelper) {
        this.http = http;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.TOKEN_NAME = "jwt_token";
        this.categoryclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginevent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DataService.prototype.getPost = function () {
        return this.http.get('/api/post/');
    };
    DataService.prototype.orderby_rec = function (order) {
        return this.http.get('/api/post/', { headers: { orderby: "like", order: order } });
    };
    DataService.prototype.orderby_date = function (order) {
        return this.http.get('/api/post/', { headers: { orderby: "date", order: order } });
    };
    DataService.prototype.getCategory = function () {
        return this.http.get('/api/category/');
    };
    DataService.prototype.getRecent = function () {
        return this.http.get('/api/post/recent');
    };
    DataService.prototype.Categoryview = function (categoryid) {
        this.router.navigate(['category/' + categoryid]);
    };
    DataService.prototype.PostfromCategory = function (categoryid) {
        return this.http.get('/api/category/' + categoryid + '/');
    };
    DataService.prototype.PostDetail = function (postid) {
        return this.http.get('/api/post/' + postid + '/');
    };
    DataService.prototype.login = function (credential) {
        var _this = this;
        return this.http.post('api-token-auth/', credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.setToken(res['token']);
        }));
    };
    DataService.prototype.setToken = function (token) {
        localStorage.setItem(this.TOKEN_NAME, token);
    };
    DataService.prototype.getToken = function () {
        return localStorage.getItem(this.TOKEN_NAME);
    };
    DataService.prototype.removeToken = function () {
        localStorage.removeItem(this.TOKEN_NAME);
    };
    DataService.prototype.getUUID = function () {
        return this.jwtHelper.decodeToken(this.getToken())['user_id'];
    };
    DataService.prototype.logout = function () {
        this.removeToken();
        this.logoutEvent();
    };
    DataService.prototype.isAuthenicated = function () {
        var token = this.getToken();
        return token ? !this.isTokenExpired(token) : false;
    };
    DataService.prototype.isTokenExpired = function (token) {
        return this.jwtHelper.isTokenExpired(token);
    };
    DataService.prototype.loginEvent = function () {
        this.loginevent.emit(this.loginEventcontent());
    };
    DataService.prototype.loginEventcontent = function () {
        return "로그아웃";
    };
    DataService.prototype.logoutEvent = function () {
        this.loginevent.emit(this.logoutEventcontent());
    };
    DataService.prototype.logoutEventcontent = function () {
        return "로그인/회원가입";
    };
    DataService.prototype.postwrite = function (title, content, category) {
        var postdata = { content: title, category: category, link: content };
        return this.http.post('/api/post/add/', postdata, { headers: { Authorization: "JWT " + this.getToken() } });
    };
    DataService.prototype.postEditView = function (postid) {
        return this.http.get('/api/post/' + postid + '/edit/', { headers: { Authorization: "JWT " + this.getToken() } });
    };
    DataService.prototype.postedit = function (postid, title, content, category) {
        var postdata = { content: title, category: category, link: content };
        return this.http.post('/api/post/' + postid + '/edit/', postdata, { headers: { Authorization: "JWT " + this.getToken() } });
    };
    DataService.prototype.PostRemove = function (postid) {
        return this.http.delete('/api/post/' + postid + '/edit/', { headers: { Authorization: "JWT " + this.getToken() } });
    };
    DataService.prototype.recommandUp = function (postid) {
        var rec_data = { "recommand": "up" };
        return this.http.post('/api/post/' + postid + '/recommand/', rec_data, { headers: { Authorization: "JWT " + this.getToken() } });
    };
    DataService.prototype.recommandDown = function (postid) {
        var rec_data = { "recommand": "down" };
        return this.http.post('/api/post/' + postid + '/recommand/', rec_data, { headers: { Authorization: "JWT " + this.getToken() } });
    };
    DataService.prototype.signup = function (email, name, password) {
        var user_info = { "email": email, "name": name, "password": password };
        return this.http.post('/api/signup/', user_info);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryclick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataService.prototype, "loginevent", void 0);
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 0;\r\n  display: flex;\r\n}\r\ndiv.main{\r\n  justify-content: space-between;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  margin-left: 100px;\r\n  margin-right: 20px;\r\n  color: #111;\r\n  flex: 3;\r\n}\r\ndiv.sidebar{\r\n  flex:1;\r\n}\r\ndiv.title{\r\n  background-color: #fff;\r\n  display: inline-block;\r\n  height: 5vh;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n  border: solid 1px #fff;\r\n  display: flex;\r\n  padding-left: 10px;\r\n}\r\ndiv.title>h3{\r\n  align-items: center;\r\n  display: flex;\r\n  margin-left: 10px;\r\n}\r\ndiv.detail{\r\n  width: 100%;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n  border: solid 1px #fff;\r\n  background-color: #fff;\r\n  /* display: flex; */\r\n  /* padding: 20px; */\r\n}\r\ndiv.container{\r\n  display: flex;\r\n  margin: 20px 5px;\r\n}\r\ndiv.container>a{\r\n  flex: 3;\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n  margin-top: 10px;\r\n  color: #000;\r\n  width: 100%;\r\n  height: 5vh;\r\n}\r\ndiv.container>h5{\r\n  text-align: right;\r\n  width: 100%;\r\n  margin: 10px 40px;\r\n}\r\ndiv.inner{\r\n  flex:1;\r\n  text-align: center;\r\n}\r\ndiv.detail>h5{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  vertical-align: bottom;\r\n  align-items: flex-end;\r\n  width: 100%;\r\n  margin-right: 10px;\r\n  height: 5vh;\r\n  margin: 0;\r\n}\r\n.writer{\r\n  text-align: left !important;\r\n  margin-left: 20px !important;\r\n  padding: 0;\r\n  font-weight: 400;\r\n}\r\n.undermenu{\r\n  text-align: right;\r\n}\r\n.undermenu>a{\r\n  margin-left: 10px;\r\n  text-decoration: underline;\r\n  color: #296ddb;\r\n}\r\n"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"main\">\n    <div class=\"title\">\n      <h3>{{post.content}}</h3>\n    </div>\n    <div class=\"detail\">\n      <div class=\"container\">\n        <a href={{post.link}}>{{post.link}}</a><br>\n        <div class=\"inner\">\n          <i class=\"fas fa-arrow-up\"></i>\n          <div>{{post.like}}</div>\n          <i class=\"fas fa-arrow-down\"></i>\n        </div>\n      </div>\n      <div class=\"container\">\n        <h5 class=\"writer\">{{post.writer}}에 의해 작성됨</h5>\n        <h5>{{post.date}}</h5>\n      </div>\n    </div>\n    <div class=\"undermenu\">\n      <a>목록보기</a>\n      <a (click)=\"postedit()\">글수정</a>\n      <a (click)=\"postremove()\">글삭제</a>\n    </div>\n  </div>\n  <div class=\"sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    DetailComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.data.PostDetail(id).subscribe(function (response) { return _this.post = response; });
    };
    DetailComponent.prototype.postedit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/post/edit/', id]);
    };
    DetailComponent.prototype.postremove = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        if (this.data.getToken()) {
            this.data.PostRemove(id).subscribe(function (response) {
                alert("글 삭제 완료");
                _this.router.navigate(['../']);
            }, function (response) { return alert("글 작성자가 아니거나 오류가 발생했습니다"); });
        }
        else {
            this.router.navigate(['login']);
        }
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n  height: 100vh;\r\n  margin-top: -50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\nh3{\r\n  font-size: 30px;\r\n  margin-bottom: 10px;\r\n  font-weight: 600;\r\n  font-family: sans-serif;\r\n  margin-top:0;\r\n}\r\ninput.loginform{\r\n  height: 40px;\r\n  width: 280px;\r\n  border-radius: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  margin-bottom: 10px;\r\n}\r\nbutton.signin{\r\n  width: 280px;\r\n  border-radius: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  height: 40px;\r\n  background-color: #3878e0;\r\n  color: #eee;\r\n  font-weight: 500;\r\n}\r\nbutton.signup{\r\n  margin-top: 10px;\r\n  width: 280px;\r\n  border-radius: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  height: 40px;\r\n  background-color: #f74fd0;\r\n  color: #eee;\r\n  font-weight: 500;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div class=\"loginbox\">\n    <h3>Reddit Style Board</h3>\n    <input name=\"username\" class=\"loginform\" placeholder=\"username\" #username><br>\n    <input name=\"password\" class=\"loginform\" type=\"password\" placeholder=\"password\" #password><br>\n    <button class=\"signin\" (click)=\"login(username, password)\">sign in</button><br>\n    <button class=\"signup\" (click)=\"signup()\">회원가입</button>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        var credential = { email: username.value, password: password.value };
        this.data.login(credential)
            .subscribe(function (response) {
            _this.router.navigate([""]),
                _this.data.loginEvent(),
                console.log(response);
        }, function (response) { return alert("다시 시도해주세요"); });
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(["signup"]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 0;\r\n  display: flex;\r\n}\r\ndiv.main{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  margin-left: 60px;\r\n  margin-right: 20px;\r\n  color: #111;\r\n  flex: 3;\r\n}\r\ndiv.main>ul{\r\n  list-style: none;\r\n  width : 100%;\r\n  justify-content: center;\r\n}\r\ndiv.main>ul>li{\r\n  border: 1px solid #aaa;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n}\r\n.like{\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  vertical-align: middle;\r\n  justify-content: center;\r\n  border-right: 1px solid #aaa;\r\n  background-color: #b3c5e2;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n.like.inner{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.content{\r\n  flex: 9;\r\n  margin-left: 20px;\r\n}\r\ndiv.sidebar{\r\n  flex:1;\r\n}\r\ndiv.sub{\r\n  display: flex;\r\n}\r\ndiv.sub-menu{\r\n  margin: 10px 0px;\r\n  flex:1;\r\n}\r\ndiv.sub-menu2{\r\n  margin: 10px 0px;\r\n  flex:1;\r\n  text-align: right;\r\n}\r\ndiv.sub-menu2>a{\r\n  margin-left: 10px;\r\n}\r\ndiv.sub-menu>a{\r\n  border: 1px solid #888;\r\n  border-radius: 5px;\r\n  background-color: #666;\r\n  color : #fff;\r\n  font-size: 18px;\r\n}\r\n.upPost i.fa-arrow-up{\r\n  color: #111;\r\n}\r\n.downPost i.fa-arrow-down{\r\n  color: #111;\r\n}\r\ni:hover{\r\n  cursor: Pointer;\r\n}\r\n.content:hover{\r\n  cursor: Pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"main\">\n    <ul>\n      <div class=\"sub\">\n        <div class=\"sub-menu\">\n          <a [routerLink]=\"['/post/add/']\">글쓰기</a>\n        </div>\n        <div class=\"sub-menu2\">\n          <a (click)=\"orderby_rec()\">추천순</a>\n          <a (click)=\"orderby_date()\">날짜순</a>\n        </div>\n      </div>\n      <li *ngFor=\"let post of post\"\n        [class.upPost]=\"post.upUser.includes(user_id)\"\n        [class.downPost]=\"post.downUser.includes(user_id)\">\n        <div class=\"like\">\n          <div class=\"inner\">\n            <i class=\"fas fa-arrow-up\" (click)=\"recommandUp(post.id)\"></i>\n            <div>{{post.like_total}}</div>\n            <i class=\"fas fa-arrow-down\" (click)=\"recommandDown(post.id)\"></i>\n          </div>\n        </div>\n        <div class=\"content\" [routerLink]=\"['/post/', post.id]\">\n          <h4>{{post.content}}</h4>\n          <h5>{{post.category.name}}</h5>\n          <h5><a href={{post.link}}>{{post.link}}</a></h5>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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

 //!import
 //추가
var MainComponent = /** @class */ (function () {
    function MainComponent(data, //!service명을 data로 명명합시다.
    router) {
        this.data = data;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getPost();
        this.logoutChecker();
        this.user_id = this.data.getUUID();
    };
    //!getPost 함수는 data서비스의 getPost를 실행,구독 후 responsne를 post에 저장
    MainComponent.prototype.getPost = function () {
        var _this = this;
        console.log("getPost");
        this.data.getPost().subscribe(function (response) {
            _this.post = response;
        });
    };
    MainComponent.prototype.logoutChecker = function () {
        var _this = this;
        this.data.loginevent.subscribe(function (resposne) { return _this.user_id = "need login"; });
    };
    MainComponent.prototype.recommandUp = function (postid) {
        var _this = this;
        this.data.recommandUp(postid).subscribe(function (response) { return _this.getPost(); }, function (response) { return alert("추천에 실패했습니다. 재로그인 후 다시 시도해주세요"); });
    };
    MainComponent.prototype.recommandDown = function (postid) {
        var _this = this;
        this.data.recommandDown(postid).subscribe(function (response) { return _this.getPost(); }, function (response) { return alert("비추에 실패했습니다. 재로그인 후 다시 시도해주세요"); });
    };
    MainComponent.prototype.orderby_rec = function () {
        var _this = this;
        if (this.order == "positive") {
            this.order = "negative";
        }
        else {
            this.order = "positive";
        }
        console.log(this.order);
        this.data.orderby_rec(this.order).subscribe(function (response) {
            _this.post = response,
                console.log(_this.post);
        }, function (response) { return console.log("failed"); });
    };
    MainComponent.prototype.orderby_date = function () {
        var _this = this;
        if (this.order == "positive") {
            this.order = "negative";
        }
        else {
            this.order = "positive";
        }
        console.log(this.order);
        this.data.orderby_date(this.order).subscribe(function (response) {
            _this.post = response,
                console.log(_this.post);
        }, function (response) { return console.log("failed"); });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  background-color: #486da8;\r\n  margin: 0;\r\n}\r\ndiv.nav{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 100px;\r\n  color: #fff;\r\n  height: 50px;\r\n}\r\ndiv.nav-left{\r\n  flex: 1;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\ndiv.nav-left>h2{\r\n  margin: 0;\r\n  font-weight: 800;\r\n}\r\ndiv.nav-right{\r\n  flex: 1;\r\n}\r\ndiv.nav-right>ul{\r\n  list-style: none;\r\n  display: flex;\r\n  float: right;\r\n  padding: 0;\r\n  width: auto;\r\n}\r\ndiv.nav-right>ul>li{\r\n  margin: 0 10px;\r\n  flex: auto;\r\n  padding: 0;\r\n}\r\n.nav-right>ul>li>h3{\r\n  font-weight: 400;\r\n  margin: 0;\r\n  width : auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"nav\">\n    <div class=\"nav-left\">\n      <h2 routerLink=\"\">SEDDIT</h2>\n    </div>\n    <div class=\"nav-right\">\n      <ul>\n        <li>\n          <h3>Browse</h3>\n        </li>\n        <li>\n          <h3 (click)=\"login()\">{{loginmenu}}</h3>\n        </li>\n        <li>\n          <h3>서비스 소개</h3>\n        </li>\n        <li>\n          <h3>Contact</h3>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.initCheck();
        this.loginCheck();
    };
    NavbarComponent.prototype.initCheck = function () {
        if (this.data.isAuthenicated()) {
            this.loginmenu = "로그아웃";
        }
        else {
            this.loginmenu = "로그인/회원가입";
        }
    };
    NavbarComponent.prototype.loginCheck = function () {
        var _this = this;
        this.data.loginevent.subscribe(function (response) { return _this.loginmenu = response; });
    };
    NavbarComponent.prototype.login = function () {
        if (!this.data.isAuthenicated()) {
            this.router.navigate(["login"]);
        }
        else {
            this.logout();
            this.router.navigate([""]);
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.data.logout();
        console.log("로그아웃");
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/postedit/postedit.component.css":
/*!*************************************************!*\
  !*** ./src/app/postedit/postedit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 0;\r\n  display: flex;\r\n}\r\ndiv.main{\r\n  justify-content: space-between;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  margin-left: 100px;\r\n  margin-right: 20px;\r\n  color: #111;\r\n  flex: 3;\r\n}\r\ndiv.sidebar{\r\n  flex:1;\r\n}\r\ndiv.title{\r\n  background-color: #fff;\r\n  display: inline-block;\r\n  height: 5vh;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n  border: solid 1px #fff;\r\n  display: flex;\r\n  padding-left: 10px;\r\n}\r\ndiv.title>h3{\r\n  align-items: center;\r\n  display: flex;\r\n  margin-left: 10px;\r\n}\r\ndiv.detail{\r\n  width: 100%;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n  border: solid 1px #fff;\r\n  background-color: #fff;\r\n  /* display: flex; */\r\n  /* padding: 20px; */\r\n}\r\ndiv.container{\r\n  display: flex;\r\n  margin: 20px 5px;\r\n}\r\ndiv.container>a{\r\n  flex: 3;\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n  margin-top: 10px;\r\n  color: #000;\r\n  width: 100%;\r\n  height: 5vh;\r\n}\r\ndiv.container>h5{\r\n  text-align: right;\r\n  width: 100%;\r\n  margin: 10px 40px;\r\n}\r\ndiv.inner{\r\n  flex:1;\r\n  text-align: center;\r\n}\r\ndiv.detail>h5{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  vertical-align: bottom;\r\n  align-items: flex-end;\r\n  width: 100%;\r\n  margin-right: 10px;\r\n  height: 5vh;\r\n  margin: 0;\r\n}\r\ndiv.button{\r\n  text-align: right;\r\n}\r\ndiv.button>button{\r\n  margin-top : 20px;\r\n  height: 30px;\r\n  width: 50px;\r\n}\r\ndiv.button>button.submit{\r\n  background-color: #1656bc;\r\n  border: none;\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  margin-right: 20px;\r\n}\r\ndiv.button>button.cancel{\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-weight: 700;\r\n}\r\n.title>input{\r\n  border: none;\r\n  font-size: 18px;\r\n  width: 80%;\r\n  margin: 4px 0;\r\n}\r\n.container>input{\r\n  border: none;\r\n  font-size: 24px;\r\n  width: 80%;\r\n  margin: 4px 0;\r\n}\r\ndiv.dropdown{\r\n  text-align: right;\r\n  margin-top: 20px;\r\n}\r\ndiv.dropdown>select{\r\n  width: 15%;\r\n  height: 100%;\r\n  text-align-last:center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/postedit/postedit.component.html":
/*!**************************************************!*\
  !*** ./src/app/postedit/postedit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"main\">\n    <div class=\"title\">\n      <input #title value={{editingpost.content}}>\n    </div>\n    <div class=\"detail\">\n      <div class=\"container\">\n        <input #content value={{editingpost.link}}>\n      </div>\n    </div>\n    <div class=\"dropdown\">\n      <select [(ngModel)]=\"selectedOption\">\n        <option [ngValue]=editingpost.category.name>현재: {{editingpost.category.name}}</option>\n        <option *ngFor=\"let category of category\"\n          [ngValue]=category.name>{{category.name}}</option>\n      </select>\n    </div>\n    <div class=\"button\">\n      <button class=\"submit\" (click)=\"edit(title,content)\">등록</button>\n      <button class=\"cancel\">취소</button>\n    </div>\n  </div>\n  <div class=\"sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/postedit/postedit.component.ts":
/*!************************************************!*\
  !*** ./src/app/postedit/postedit.component.ts ***!
  \************************************************/
/*! exports provided: PosteditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosteditComponent", function() { return PosteditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var PosteditComponent = /** @class */ (function () {
    function PosteditComponent(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    PosteditComponent.prototype.ngOnInit = function () {
        this.editinit();
    };
    PosteditComponent.prototype.editinit = function () {
        var _this = this;
        this.data.getCategory().subscribe(function (response) { return _this.category = response; });
        this.data.postEditView(this.id).subscribe(function (response) { return _this.editingpost = response; }, function (response) {
            alert("작성자만 수정 가능합니다");
            _this.router.navigate(['/post/' + _this.id]);
        });
    };
    PosteditComponent.prototype.edit = function (title, content) {
        var _this = this;
        if (!title.value) {
            alert("제목을 입력해주세요");
        }
        else if (!content.value) {
            alert("링크를 입력해주세요");
        }
        else if (!this.selectedOption) {
            alert("카테고리를 정해주세요");
        }
        else {
            this.data.postedit(this.id, title.value, content.value, this.selectedOption)
                .subscribe(function (response) {
                alert("글 수정 완료");
                _this.router.navigate([""]);
            }, function (response) { return alert("다시 시도 해주세요"); });
        }
    };
    PosteditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postedit',
            template: __webpack_require__(/*! ./postedit.component.html */ "./src/app/postedit/postedit.component.html"),
            styles: [__webpack_require__(/*! ./postedit.component.css */ "./src/app/postedit/postedit.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PosteditComponent);
    return PosteditComponent;
}());



/***/ }),

/***/ "./src/app/postwrite/postwrite.component.css":
/*!***************************************************!*\
  !*** ./src/app/postwrite/postwrite.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 0;\r\n  display: flex;\r\n}\r\ndiv.main{\r\n  justify-content: space-between;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  margin-left: 100px;\r\n  margin-right: 20px;\r\n  color: #111;\r\n  flex: 3;\r\n}\r\ndiv.sidebar{\r\n  flex:1;\r\n}\r\ndiv.title{\r\n  background-color: #fff;\r\n  display: inline-block;\r\n  height: 5vh;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n  border: solid 1px #fff;\r\n  display: flex;\r\n  padding-left: 10px;\r\n}\r\ndiv.title>h3{\r\n  align-items: center;\r\n  display: flex;\r\n  margin-left: 10px;\r\n}\r\ndiv.detail{\r\n  width: 100%;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n  border: solid 1px #fff;\r\n  background-color: #fff;\r\n  /* display: flex; */\r\n  /* padding: 20px; */\r\n}\r\ndiv.container{\r\n  display: flex;\r\n  margin: 20px 5px;\r\n}\r\ndiv.container>a{\r\n  flex: 3;\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n  margin-top: 10px;\r\n  color: #000;\r\n  width: 100%;\r\n  height: 5vh;\r\n}\r\ndiv.container>h5{\r\n  text-align: right;\r\n  width: 100%;\r\n  margin: 10px 40px;\r\n}\r\ndiv.inner{\r\n  flex:1;\r\n  text-align: center;\r\n}\r\ndiv.detail>h5{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  vertical-align: bottom;\r\n  align-items: flex-end;\r\n  width: 100%;\r\n  margin-right: 10px;\r\n  height: 5vh;\r\n  margin: 0;\r\n}\r\ndiv.button{\r\n  text-align: right;\r\n}\r\ndiv.button>button{\r\n  margin-top : 20px;\r\n  height: 30px;\r\n  width: 50px;\r\n}\r\ndiv.button>button.submit{\r\n  background-color: #1656bc;\r\n  border: none;\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  margin-right: 20px;\r\n}\r\ndiv.button>button.cancel{\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-weight: 700;\r\n}\r\n.title>input{\r\n  border: none;\r\n  font-size: 18px;\r\n  width: 80%;\r\n  margin: 4px 0;\r\n}\r\n.container>input{\r\n  border: none;\r\n  font-size: 24px;\r\n  width: 80%;\r\n  margin: 4px 0;\r\n}\r\ndiv.dropdown{\r\n  text-align: right;\r\n  margin-top: 20px;\r\n}\r\ndiv.dropdown>select{\r\n  width: 15%;\r\n  height: 100%;\r\n  text-align-last:center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/postwrite/postwrite.component.html":
/*!****************************************************!*\
  !*** ./src/app/postwrite/postwrite.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"main\">\n    <div class=\"title\">\n      <input #title placeholder=\"post title\">\n    </div>\n    <div class=\"detail\">\n      <div class=\"container\">\n        <input #content placeholder=\"Share Link!\" >\n      </div>\n    </div>\n    <div class=\"dropdown\">\n      <select [(ngModel)]=\"selectedOption\">\n        <option [ngValue]=\"\" selected>-- 선택 --</option>\n        <option *ngFor=\"let category of category\" [ngValue]=\"category.name\">{{category.name}}</option>\n      </select>\n    </div>\n    <div class=\"button\">\n      <button class=\"submit\" (click)=\"write(title,content)\">등록</button>\n      <button class=\"cancel\">취소</button>\n    </div>\n  </div>\n\n  <!-- <div class=\"main\">\n    <div class=\"title\">\n      <input *ngIf=\"!id\" #title placeholder=\"post title\">\n      <input *ngIf=\"id\" #title value={{editingpost.content}}>\n    </div>\n\n    <div class=\"detail\">\n      <div class=\"container\">\n        <input *ngIf=\"!id\" #content placeholder=\"Share Link!\" >\n        <input *ngIf=\"id\" #content value={{editingpost.link}}>\n      </div>\n    </div>\n\n    <div class=\"dropdown\">\n      <select *ngIf=\"!id\" [(ngModel)]=\"selectedOption\">\n        <option [ngValue]=\"\">-- 선택 --</option>\n        <option *ngFor=\"let category of category\"\n          [ngValue]=category.name.value>{{category.name}}</option>\n      </select>\n      <select *ngIf=\"id\" [(ngModel)]=\"selectedOption\">\n        <option [ngValue]=\"\">-- 선택 --</option>\n        <option *ngFor=\"let category of category\"\n          [ngValue]=category.name.value>{{category.name}}</option>\n      </select> -->\n\n\n    <!-- </div>\n    <div class=\"button\">\n      <button class=\"submit\" (click)=\"write(title,content)\">등록</button>\n      <button class=\"cancel\">취소</button>\n    </div> -->\n  <div class=\"sidebar\">\n    <app-sidebar></app-sidebar>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/postwrite/postwrite.component.ts":
/*!**************************************************!*\
  !*** ./src/app/postwrite/postwrite.component.ts ***!
  \**************************************************/
/*! exports provided: PostwriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostwriteComponent", function() { return PostwriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var PostwriteComponent = /** @class */ (function () {
    function PostwriteComponent(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
    }
    PostwriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getCategory().subscribe(function (response) { return _this.category = response; });
    };
    PostwriteComponent.prototype.write = function (title, content) {
        var _this = this;
        if (!title.value) {
            alert("제목을 입력해주세요");
        }
        else if (!content.value) {
            alert("링크를 입력해주세요");
        }
        else if (!this.selectedOption) {
            alert("카테고리를 정해주세요");
        }
        else {
            this.data.postwrite(title.value, content.value, this.selectedOption)
                .subscribe(function (response) {
                alert("글 등록 완료");
                _this.router.navigate([""]);
            }, function (response) { return alert("다시 시도 해주세요"); });
        }
    };
    PostwriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postwrite',
            template: __webpack_require__(/*! ./postwrite.component.html */ "./src/app/postwrite/postwrite.component.html"),
            styles: [__webpack_require__(/*! ./postwrite.component.css */ "./src/app/postwrite/postwrite.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostwriteComponent);
    return PostwriteComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 0;\r\n}\r\n.category-view{\r\n  padding-left: 30px;\r\n}\r\n.category-view>h4{\r\n  margin-top : 30px;\r\n  margin-bottom: 5px;\r\n}\r\n.category-view>ul{\r\n  padding: 0;\r\n  list-style: none;\r\n  margin:0;\r\n}\r\n.category-view>ul>li{\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  width: 300px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"category-view\">\n    <h4>카테고리별 보기</h4>\n    <ul>\n      <li *ngFor=\"let category of category\" (click)=\"search(category)\">\n        {{category.name}}({{category.count}})\n      </li>\n    </ul>\n    <h4>최근 게시물</h4>\n    <ul>\n      <li *ngFor=\"let recent of recent\">\n        {{recent.content}}\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(data) {
        this.data = data;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getCategory();
        this.getRecent();
    };
    SidebarComponent.prototype.getCategory = function () {
        var _this = this;
        this.data.getCategory().subscribe(function (response) { return _this.category = response; });
    };
    SidebarComponent.prototype.getRecent = function () {
        var _this = this;
        this.data.getRecent().subscribe(function (response) { return _this.recent = response; });
    };
    SidebarComponent.prototype.search = function (category) {
        this.data.Categoryview(category['id']);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-main{\r\n  display:flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 90vh;\r\n}\r\n.signup-main h4{\r\n  display: flex;\r\n}\r\n.singup-main form{\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n.signup-main input{\r\n  width: 200px;\r\n  height: 30px;\r\n  border: 1px solid #111;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  display: block;\r\n  margin-top: 5px;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.signup-btn{\r\n  margin-top: 20px;\r\n  display:flex;\r\n  justify-content: center;\r\n}\r\n.signup-btn-common{\r\n  width: 120px;\r\n  height: 30px;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n.signup-btn-check{\r\n  margin-right: 10px;\r\n  background-color: #4286f4;\r\n}\r\n.signup-btn-cancel{\r\n  background-color: #999;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-main\">\n  <form>\n    <h3>SEDDIT에 회원가입 하시면 더 많은 서비스를 이용할 수 있습니다</h3>\n    <input placeholder=\"이메일을 입력해주세요\" #email>\n    <input placeholder=\"이름을 입력해주세요\" #name>\n    <input placeholder=\"비밀번호를 입력해주세요\" type=\"password\" #password >\n    <input placeholder=\"비밀번호 확인\" type=\"password\" #check >\n    <div class=\"signup-btn\">\n      <button class=\"signup-btn-check signup-btn-common\" (click)=\"signup(email,name,password,check)\">회원가입</button>\n      <button class=\"signup-btn-cancel signup-btn-common\" (click)=\"gohome()\">홈으로</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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



var SignupComponent = /** @class */ (function () {
    function SignupComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (email, name, password, check) {
        var _this = this;
        if (password.value != check.value) {
            alert("패스워드가 일치하지 않습니다");
        }
        else {
            this.data.signup(email.value, name.value, password.value).subscribe(function (response) {
                alert("회원가입이 완료되었습니다"),
                    _this.router.navigate(["login"]);
            }, function (response) {
                alert("다시 시도해주세요");
            });
        }
    };
    SignupComponent.prototype.gohome = function () {
        this.router.navigate(['']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! C:\project\reddit\reddit-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map