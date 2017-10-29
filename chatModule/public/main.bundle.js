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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: auto;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");
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
    function AppComponent($store) {
        this.$store = $store;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.$store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__auth_auth_actions__["a" /* AuthActions */].FETCH_SESSION });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_reducer__ = __webpack_require__("../../../../../src/app/user/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_reducer__ = __webpack_require__("../../../../../src/app/auth/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_secret__ = __webpack_require__("../../../../../src/environments/firebase.secret.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_effects__ = __webpack_require__("../../../../../src/app/auth/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_chat_reducer__ = __webpack_require__("../../../../../src/app/chat/chat.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_1__chat_chat_module__["a" /* ChatModule */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_0__app_routes__["a" /* AppRoutesModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_secret__["a" /* firebaseSecret */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_13__ngrx_store__["c" /* StoreModule */].provideStore({
                auth: __WEBPACK_IMPORTED_MODULE_4__auth_auth_reducer__["a" /* authReducer */],
                user: __WEBPACK_IMPORTED_MODULE_2__user_user_reducer__["a" /* userReducer */],
                chat: __WEBPACK_IMPORTED_MODULE_17__chat_chat_reducer__["a" /* chatReducer */]
            }),
            __WEBPACK_IMPORTED_MODULE_14__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_15__auth_auth_effects__["a" /* AuthEffects */])
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__["a" /* ChatComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__auth_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '**',
        redirectTo: 'chat'
    }
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    return AppRoutesModule;
}());
AppRoutesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__auth_auth_guard__["a" /* AuthGuard */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutesModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActions; });
/* unused harmony export AuthAction */
var AuthActions = (function () {
    function AuthActions() {
    }
    return AuthActions;
}());

AuthActions.AUTHENTICATE = 'AUTHENTICATE';
AuthActions.AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
AuthActions.AUTHENTICATE_ERROR = 'AUTHENTCATE_ERROR';
AuthActions.LOGOUT = 'LOGOUT';
AuthActions.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
AuthActions.LOGOUT_ERROR = 'LOGOUT_ERROR';
AuthActions.FETCH_SESSION = 'FETCH_SESSION';
AuthActions.FETCH_SESSION_SUCCESS = 'FETCH_SESSION_SUCCESS';
AuthActions.FETCH_SESSION_ERROR = 'FETCH_SESSION_ERROR';
var AuthAction = (function () {
    function AuthAction() {
    }
    return AuthAction;
}());

//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthEffects = (function () {
    function AuthEffects($as, $action) {
        var _this = this;
        this.$as = $as;
        this.$action = $action;
        this.$authenticate = this.$action
            .ofType(__WEBPACK_IMPORTED_MODULE_3__auth_actions__["a" /* AuthActions */].AUTHENTICATE)
            .switchMap(function () {
            return _this.$as.$authenticate().switchMap(function (result) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_3__auth_actions__["a" /* AuthActions */].AUTHENTICATE_SUCCESS, payload: result });
            }).catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_3__auth_actions__["a" /* AuthActions */].AUTHENTICATE_ERROR, payload: error });
            });
        });
        this.$fetchSession = this.$action
            .ofType(__WEBPACK_IMPORTED_MODULE_3__auth_actions__["a" /* AuthActions */].FETCH_SESSION)
            .switchMap(function () {
            return _this.$as.$fetchSession().switchMap(function (result) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_3__auth_actions__["a" /* AuthActions */].FETCH_SESSION_SUCCESS, payload: result });
            }).catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_3__auth_actions__["a" /* AuthActions */].FETCH_SESSION_ERROR });
            });
        });
    }
    return AuthEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "$authenticate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "$fetchSession", void 0);
AuthEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object])
], AuthEffects);

var _a, _b;
//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard($as, $router) {
        this.$as = $as;
        this.$router = $router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.$as.authenticated) {
            return true;
        }
        this.$router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");

function authReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActions */].AUTHENTICATE_SUCCESS: return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActions */].LOGOUT_SUCCESS: return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActions */].FETCH_SESSION_SUCCESS: return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* AuthActions */].FETCH_SESSION_ERROR: return undefined;
        default: return state;
    }
}
//# sourceMappingURL=auth.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService($af, $router) {
        var _this = this;
        this.$af = $af;
        this.$router = $router;
        this.$af.authState.subscribe(function (state) {
            _this.state = state;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.state !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.$authenticate = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.$af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider()));
    };
    AuthService.prototype.$logout = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.$af.auth.signOut());
    };
    AuthService.prototype.$fetchSession = function () {
        return this.$af.authState;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatActions; });
/* unused harmony export ChatAction */
var ChatActions = (function () {
    function ChatActions() {
    }
    return ChatActions;
}());

ChatActions.CONNECT = 'CONNECT';
ChatActions.CONNECT_SUCCESS = 'CONNECT_SUCCESS';
ChatActions.CONNECT_ERROR = 'CONNECT_ERROR';
ChatActions.ADD_MEMBER = 'ADD_MEMBER';
ChatActions.ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
ChatActions.ADD_MEMBER_ERROR = 'ADD_MEMBER_ERROR';
ChatActions.SEND_MESSAGE = 'SEND_MESSAGE';
ChatActions.SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
ChatActions.SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
var ChatAction = (function () {
    function ChatAction() {
    }
    return ChatAction;
}());

//# sourceMappingURL=chat.actions.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shell\">\r\n  <div class=\"header\">\r\n    <span *ngIf=\"(chat | async); let chat; else loading\" >\r\n      Количество участников: {{ chat.members.length }}\r\n    </span>\r\n    <ng-template #loading >\r\n      Чат загружается...\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"content\" *ngIf=\"(chat | async); let chat\" #messagesContainer >\r\n    <div class=\"messages-list\" >\r\n      <ng-container *ngFor=\"let message of chat.messages\" >\r\n          <div class=\"message\" [ngClass]=\"{ 'from-user': message.author.uid === user.uid }\" >\r\n            <span>{{ message.text }}</span>\r\n          </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"input-group\">\r\n    <input [formControl]=\"messageText\" (keyup.enter)=\"sendMessage()\" >\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shell {\n  height: 52vh;\n  min-height: 50vh;\n  width: 50vw;\n  border: 1em silver solid;\n  float: left; }\n  .shell .header {\n    height: 3vh;\n    width: auto;\n    background-color: grey;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0 12px; }\n  .shell .content {\n    -webkit-scrollbar: 0 !important;\n    height: 47vh;\n    overflow: auto; }\n    .shell .content .messages-list {\n      width: 100%;\n      min-height: 47vh;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      overflow: auto;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n          -ms-flex-direction: column-reverse;\n              flex-direction: column-reverse; }\n      .shell .content .messages-list .message {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: auto;\n        width: auto;\n        padding: 0.3em 0.4em;\n        margin: 0.5em;\n        border-radius: 15px;\n        background-color: #c2fdc1; }\n      .shell .content .messages-list .from-user {\n        -ms-flex-item-align: end;\n            align-self: flex-end;\n        background-color: #c2fdc8; }\n  .shell .input-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 100%; }\n    .shell .input-group input {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_actions__ = __webpack_require__("../../../../../src/app/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_class__ = __webpack_require__("../../../../../src/app/user/user.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message_class__ = __webpack_require__("../../../../../src/app/chat/message/message.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatComponent = (function () {
    function ChatComponent($store) {
        this.$store = $store;
    }
    ChatComponent.prototype.ngAfterViewChecked = function () {
        try {
            this.messagesListRef.nativeElement.scrollTop = this.messagesListRef.nativeElement.scrollHeight;
        }
        catch (err) {
            //
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chat = this.$store.select('chat');
        this.$store.select('user')
            .map(function (user) { return user; })
            .subscribe(function (user) {
            if (!user) {
                return;
            }
            user = new __WEBPACK_IMPORTED_MODULE_3__user_user_class__["a" /* User */](user.displayName, user.email, user.photoURL, user.uid);
            _this.user = user;
            return _this.$store.select('chat')
                .map(function (value) { return value; })
                .filter(function (chat) { return chat !== undefined; })
                .subscribe(function (chat) {
                if (!chat.members.some(function (_) { return _.uid === user.uid; })) {
                    _this.$store.dispatch({
                        type: __WEBPACK_IMPORTED_MODULE_2__chat_actions__["a" /* ChatActions */].ADD_MEMBER,
                        payload: user
                    });
                }
            });
        });
        this.chat
            .filter(function (chat) { return chat !== undefined; })
            .subscribe(function (val) {
            console.log(val);
        });
        this.messageText = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
    };
    ChatComponent.prototype.scrollListener = function (event) {
        console.log(event);
    };
    ChatComponent.prototype.sendMessage = function () {
        this.$store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__chat_actions__["a" /* ChatActions */].SEND_MESSAGE,
            payload: new __WEBPACK_IMPORTED_MODULE_4__message_message_class__["a" /* Message */](this.user, this.messageText.value, false)
        });
        this.messageText.reset();
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ViewChild */])('messagesContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ChatComponent.prototype, "messagesListRef", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-chat-component',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_actions__ = __webpack_require__("../../../../../src/app/chat/chat.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatEffects = (function () {
    function ChatEffects($chatService, $action) {
        var _this = this;
        this.$chatService = $chatService;
        this.$action = $action;
        this.$connect = this.$action.ofType(__WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].CONNECT)
            .switchMap(function () {
            return _this.$chatService.$connect()
                .map(function (result) {
                if (result) {
                    return result;
                }
                else {
                    return {};
                }
            })
                .switchMap(function (result) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].CONNECT_SUCCESS, payload: result });
            }).catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].CONNECT_ERROR });
            });
        });
        this.$addMember = this.$action.ofType(__WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].ADD_MEMBER)
            .map(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) {
            return _this.$chatService.$addMember(payload).switchMap(function (result) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].ADD_MEMBER_SUCCESS, payload: result });
            }).catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].ADD_MEMBER_ERROR });
            });
        });
        this.$sendMessage = this.$action.ofType(__WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].SEND_MESSAGE)
            .map(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) {
            return _this.$chatService.$sendMessage(payload).switchMap(function (result) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].SEND_MESSAGE_SUCCESS, payload: result });
            }).catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of({ type: __WEBPACK_IMPORTED_MODULE_4__chat_actions__["a" /* ChatActions */].SEND_MESSAGE_ERROR, payload: error });
            });
        });
    }
    return ChatEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "$connect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "$addMember", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "$sendMessage", void 0);
ChatEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object])
], ChatEffects);

var _a, _b;
//# sourceMappingURL=chat.effects.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_actions__ = __webpack_require__("../../../../../src/app/chat/chat.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_service__ = __webpack_require__("../../../../../src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_effects__ = __webpack_require__("../../../../../src/app/chat/chat.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatModule = (function () {
    function ChatModule($store) {
        this.$store = $store;
        this.$store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__chat_actions__["a" /* ChatActions */].CONNECT });
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__chat_effects__["a" /* ChatEffects */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__chat_service__["a" /* ChatService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], ChatModule);

var _a;
//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chatReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_actions__ = __webpack_require__("../../../../../src/app/chat/chat.actions.ts");

function chatReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__chat_actions__["a" /* ChatActions */].CONNECT_SUCCESS:
            return {
                connectionPath: state ? state.connectionPath : '',
                connected: true,
                messages: action.payload.messages ? action.payload.messages : [],
                members: action.payload.members ? action.payload.members : []
            };
        // case ChatActions.SEND_MESSAGE:
        //   return <Chat> {
        //     connectionPath: state ? state.connectionPath : '',
        //     connected: true,
        //     messages: action.payload ? [...state.messages, ...action.payload] : [...state.messages],
        //     members: action.payload.members ? action.payload.members : []
        //   };
        default: return state;
    }
}
//# sourceMappingURL=chat.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService($afd, $store) {
        var _this = this;
        this.$afd = $afd;
        this.$store = $store;
        this.$store.select('user')
            .subscribe(function (user) {
            _this.user = user;
        });
    }
    ChatService.prototype.$connect = function () {
        var _this = this;
        this.connection = this.$afd.object('chat');
        this.$store.select('chat')
            .map(function (value) { return value; })
            .subscribe(function (chat) {
            _this.chat = chat;
        });
        return this.$afd.object('chat').valueChanges();
    };
    ChatService.prototype.$addMember = function (member) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.connection.update({ members: this.chat.members ? this.chat.members.concat([member]) : [member] }));
    };
    ChatService.prototype.$sendMessage = function (message) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.connection.update({ messages: this.chat.messages ? [message].concat(this.chat.messages) : [message] }));
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], ChatService);

var _a, _b;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/message/message.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(author, text, isDelivered) {
        this.author = author;
        this.text = text;
        this.isDelivered = isDelivered;
    }
    return Message;
}());

//# sourceMappingURL=message.class.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <span class=\"title\">FlexChat</span>\r\n  <div class=\"user-credentials\" *ngIf=\"user | async; let user; else login\" >\r\n    <h2>{{ user.displayName }}</h2>\r\n    <img class=\"avatar\" [src]=\"user.photoURL\">\r\n  </div>\r\n  <ng-template #login>\r\n    <span (click)=\"authClick()\" >Login!</span>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  width: auto;\n  height: 5vh;\n  background-color: grey;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0;\n  padding: 0 12px; }\n  .header .title {\n    font-size: 2em; }\n  .header .user-credentials {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .header .user-credentials .avatar {\n      height: 4vh;\n      width: 4vh;\n      border-radius: 50%;\n      margin: 0 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent($store) {
        this.$store = $store;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.$store.select('user');
    };
    HeaderComponent.prototype.authClick = function () {
        this.$store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__auth_auth_actions__["a" /* AuthActions */].AUTHENTICATE });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__header_component__["a" /* HeaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__header_component__["a" /* HeaderComponent */]
        ]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/login/login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(displayName, email, photoURL, uid) {
        this.displayName = displayName;
        this.email = email;
        this.photoURL = photoURL;
        this.uid = uid;
    }
    return User;
}());

//# sourceMappingURL=user.class.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = userReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");

function userReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_auth_actions__["a" /* AuthActions */].AUTHENTICATE_SUCCESS:
            return action.payload.user;
        case __WEBPACK_IMPORTED_MODULE_0__auth_auth_actions__["a" /* AuthActions */].LOGOUT_SUCCESS:
            return undefined;
        case __WEBPACK_IMPORTED_MODULE_0__auth_auth_actions__["a" /* AuthActions */].FETCH_SESSION_SUCCESS:
            return action.payload;
        default: return state;
    }
}
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_secret__ = __webpack_require__("../../../../../src/environments/firebase.secret.ts");

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseSecret: __WEBPACK_IMPORTED_MODULE_0__firebase_secret__["a" /* firebaseSecret */]
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/environments/firebase.secret.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseSecret; });
var firebaseSecret = {
    apiKey: 'AIzaSyD-YZzXZ6S5DPDW77iv0p7FqQb-leD5-OY',
    authDomain: 'flex-chat-example.firebaseapp.com',
    databaseURL: 'https://flex-chat-example.firebaseio.com',
    projectId: 'flex-chat-example',
    storageBucket: 'flex-chat-example.appspot.com',
    messagingSenderId: '589850529022'
};
//# sourceMappingURL=firebase.secret.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
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