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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _assets_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/resources */ "./src/assets/resources.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _meetup_meetup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetup/meetup.component */ "./src/app/meetup/meetup.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");









function AppComponent_app_meetup_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-meetup", 13);
} if (rf & 2) {
    var meetup_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("meetup", meetup_r3);
} }
function AppComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_div_30_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", tag_r4)("name", tag_r4)("value", tag_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", tag_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r4);
} }
function AppComponent_app_resource_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-resource", 17);
} if (rf & 2) {
    var resource_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resource", resource_r7);
} }
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Code Norman';
        this.meetups = [
            {
                time: 'Thursday, February 20th 6:00 - ?',
                location: {
                    name: 'All About Cha',
                    address: '3750 W Main St, Norman, OK 73072'
                },
                topic: 'Mutable vs Immutable, Haskell, + Open Topics'
            },
            {
                time: 'Thursday, February 27th 6:00 - ?',
                location: {
                    name: 'All About Cha',
                    address: '3750 W Main St, Norman, OK 73072'
                },
                topic: 'Open Topics'
            }
        ];
        this.resources = _assets_resources__WEBPACK_IMPORTED_MODULE_2__["resources"].sort(function (a, b) {
            return (a.title < b.title) ? -1 : (a.title === b.title) ? 0 : 1;
        });
        this.filteredResources = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.resources);
        this.tags = Object(_assets_resources__WEBPACK_IMPORTED_MODULE_2__["tags"])().sort();
        this.includeTags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tags);
    }
    AppComponent.prototype.onFilter = function (e) {
        var _this = this;
        var name = e.target.name;
        var isChecked = e.target.checked;
        if (isChecked) {
            this.includeTags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.includeTags, [name]);
        }
        else {
            this.includeTags = this.includeTags.filter(function (f) { return f !== name; });
        }
        this.filteredResources = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.resources.filter(function (r) {
            var tags = new Set(r.tags);
            return _this.includeTags.some(function (tag) { return tags.has(tag); });
        }));
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 4, consts: [[2, "text-align", "center", "margin-top", "15px"], ["width", "250", "alt", "Code Norman Logo", "src", "../assets/codenorman.jpg"], [1, "content-container"], [1, "meetup-container"], ["class", "meetup", 3, "meetup", 4, "ngFor", "ngForOf"], [1, "book-container"], [2, "font-weight", "bold"], ["href", "https://www.amazon.com/gp/product/B084BNMN7T?pf_rd_p=ab873d20-a0ca-439b-ac45-cd78f07a84d8&pf_rd_r=R1XGZXZTTN9K9TV41T01"], ["href", "https://leanpub.com/ydkjsy-get-started", 2, "margin-left", "10px"], [1, "resource-container"], [1, "filter-container"], ["class", "filter-tag", 4, "ngFor", "ngForOf"], [3, "resource", 4, "ngFor", "ngForOf"], [1, "meetup", 3, "meetup"], [1, "filter-tag"], ["type", "checkbox", "checked", "", 3, "id", "name", "value", "change"], [3, "for"], [3, "resource"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Upcoming Meetups");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_app_meetup_9_Template, 1, 1, "app-meetup", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Current Book Reading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "You Don't Know JS Yet: Getting Start");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "By Kyle Simpson");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Amazon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Leanpub");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start discussing the book in a few weeks.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Chapter 1: Discuss on Thursday March 12");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Resources");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppComponent_div_30_Template, 4, 5, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AppComponent_app_resource_31_Template, 1, 1, "app-resource", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.meetups);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredResources);
        } }, directives: [_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__["TopMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _meetup_meetup_component__WEBPACK_IMPORTED_MODULE_6__["MeetupComponent"], _resource_resource_component__WEBPACK_IMPORTED_MODULE_7__["ResourceComponent"]], styles: [".content-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  padding: 10px;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 10px 0 0 10px;\r\n}\r\n\r\n.meetup-container[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.book-container[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.resource-container[_ngcontent-%COMP%] {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZpbHRlci1jb250YWluZXIgLmZpbHRlci10YWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHggMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5tZWV0dXAtY29udGFpbmVyIHtcclxuXHJcbn1cclxuXHJcbi5ib29rLWNvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4ucmVzb3VyY2UtY29udGFpbmVyIHtcclxuXHJcbn1cclxuIl19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _meetup_meetup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./meetup/meetup.component */ "./src/app/meetup/meetup.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resource-form/resource-form.component */ "./src/app/resource-form/resource-form.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] })
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_13__["TopMenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _meetup_meetup_component__WEBPACK_IMPORTED_MODULE_15__["MeetupComponent"],
        _resource_resource_component__WEBPACK_IMPORTED_MODULE_16__["ResourceComponent"],
        _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_17__["ResourceFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_13__["TopMenuComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _meetup_meetup_component__WEBPACK_IMPORTED_MODULE_15__["MeetupComponent"],
                    _resource_resource_component__WEBPACK_IMPORTED_MODULE_16__["ResourceComponent"],
                    _resource_form_resource_form_component__WEBPACK_IMPORTED_MODULE_17__["ResourceFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footer"], ["width", "30", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["href", "https://angular.io"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Created using Angular");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["html[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  \r\n  margin-bottom: 60px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLyogTWFyZ2luIGJvdHRvbSBieSBmb290ZXIgaGVpZ2h0ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/meetup/meetup.component.ts":
/*!********************************************!*\
  !*** ./src/app/meetup/meetup.component.ts ***!
  \********************************************/
/*! exports provided: MeetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetupComponent", function() { return MeetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MeetupComponent = /** @class */ (function () {
    function MeetupComponent() {
    }
    MeetupComponent.prototype.ngOnInit = function () {
    };
    MeetupComponent.ɵfac = function MeetupComponent_Factory(t) { return new (t || MeetupComponent)(); };
    MeetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetupComponent, selectors: [["app-meetup"]], inputs: { meetup: "meetup" }, decls: 9, vars: 4, consts: [[1, "meetup"], [1, "time"], [1, "location"], [1, "address"], [1, "topic"]], template: function MeetupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Time: ", ctx.meetup.time, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Location: ", ctx.meetup.location.name, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Address: ", ctx.meetup.location.address, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Topic: ", ctx.meetup.topic, "");
        } }, styles: [".meetup[_ngcontent-%COMP%] {\r\n  border: 1px solid dodgerblue;\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.time[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  background-color: dodgerblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.location[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.address[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  margin: 0 15px;\r\n}\r\n\r\n.topic[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  background-color: dodgerblue;\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldHVwL21lZXR1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBOztBQUVBOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lZXR1cC9tZWV0dXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWV0dXAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG5cclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcblxyXG4udG9waWMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */"] });
    return MeetupComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetup',
                templateUrl: './meetup.component.html',
                styleUrls: ['./meetup.component.css']
            }]
    }], function () { return []; }, { meetup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var reducers = {};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/resource-form/resource-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resource-form/resource-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceFormComponent", function() { return ResourceFormComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");







function ResourceFormComponent_mat_chip_7_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResourceFormComponent_mat_chip_7_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function ResourceFormComponent_mat_chip_7_Template_mat_chip_removed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var weightClass_r12 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.remove(weightClass_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResourceFormComponent_mat_chip_7_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var weightClass_r12 = ctx.$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r10.selectable)("removable", ctx_r10.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", weightClass_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.removable);
} }
function ResourceFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r8.value, " of Weight Classes required");
} }
var ResourceFormComponent = /** @class */ (function () {
    function ResourceFormComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.weightClasses = [
            { name: '10' },
            { name: '30' },
            { name: '40' },
            { name: '45' },
        ];
    }
    ResourceFormComponent.prototype.ngOnInit = function () {
    };
    ResourceFormComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.weightClasses.push({ name: value.trim() });
            this.weightClasses.sort(function (a, b) { return +a.name < +b.name ? -1 : 1; });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ResourceFormComponent.prototype.remove = function (weightClass) {
        var index = this.weightClasses.indexOf(weightClass);
        if (index >= 0) {
            this.weightClasses.splice(index, 1);
        }
    };
    ResourceFormComponent.ɵfac = function ResourceFormComponent_Factory(t) { return new (t || ResourceFormComponent)(); };
    ResourceFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResourceFormComponent, selectors: [["app-resource-form"]], decls: 11, vars: 7, consts: [["for", "count"], ["id", "count", "type", "number", "value", "5"], ["count", ""], [1, "example-chip-list"], ["aria-label", "Weight Class selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New weight class...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["class", "errorMessage", 4, "ngIf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "errorMessage"]], template: function ResourceFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Number of Weight Classes");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-chip-list", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ResourceFormComponent_mat_chip_7_Template, 3, 4, "mat-chip", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function ResourceFormComponent_Template_input_matChipInputTokenEnd_8_listener($event) { return ctx.add($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResourceFormComponent_div_10_Template, 2, 1, "div", 8);
        } if (rf & 2) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weightClasses);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r9)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n", ctx.weightClasses.length, " / ", _r8.value, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.weightClasses.length != _r8.value);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipInput"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipRemove"]], styles: [".example-chip-list[_ngcontent-%COMP%] {\r\n  width: 100%\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UtZm9ybS9yZXNvdXJjZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcmVzb3VyY2UtZm9ybS9yZXNvdXJjZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"] });
    return ResourceFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResourceFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resource-form',
                templateUrl: './resource-form.component.html',
                styleUrls: ['./resource-form.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/resource/resource.component.ts":
/*!************************************************!*\
  !*** ./src/app/resource/resource.component.ts ***!
  \************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ResourceComponent = /** @class */ (function () {
    function ResourceComponent() {
    }
    ResourceComponent.prototype.ngOnInit = function () {
    };
    ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(); };
    ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["app-resource"]], inputs: { resource: "resource" }, decls: 8, vars: 4, consts: [[1, "resource"], [1, "type"], [1, "title"], ["target", "_blank", 3, "href"], [1, "description"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resource.type);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.resource.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resource.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resource.description);
        } }, styles: [".resource[_ngcontent-%COMP%] {\r\n  border: 1px solid dodgerblue;\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  margin-left: 5px ;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  margin: 10px 15px 0 15px;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  \r\n  color: grey;\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlL3Jlc291cmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzb3VyY2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50eXBlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHggO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMTBweCAxNXB4IDAgMTVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7Ki9cclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"] });
    return ResourceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource',
                templateUrl: './resource.component.html',
                styleUrls: ['./resource.component.css']
            }]
    }], function () { return []; }, { resource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ts ***!
  \************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");




var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent() {
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent.ɵfac = function TopMenuComponent_Factory(t) { return new (t || TopMenuComponent)(); };
    TopMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopMenuComponent, selectors: [["app-top-menu"]], decls: 3, vars: 0, consts: [["mat-icon-button", ""]], template: function TopMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["[_nghost-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: block;\r\n  background: dodgerblue;\r\n  line-height: 40px;\r\n  color: #fff;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcbiJdfQ== */"] });
    return TopMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-menu',
                templateUrl: './top-menu.component.html',
                styleUrls: ['./top-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/resources.ts":
/*!*********************************!*\
  !*** ./src/assets/resources.ts ***!
  \*********************************/
/*! exports provided: resources, tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tags", function() { return tags; });
var resources = [
    {
        title: 'Angular 5',
        url: 'https://www.udemy.com/angular-5',
        description: 'Free beginner intro to angular',
        paid: false,
        upVotes: 0,
        tags: ['angular',]
    },
    {
        title: 'Git Branching',
        url: 'https://learngitbranching.js.org',
        description: 'Learn Git Branching',
        paid: false,
        upVotes: 0,
        tags: ['git'],
    },
    {
        title: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/',
        description: 'Learn to code. Build Projects. Earn Certification.',
        paid: false,
        upVotes: 0,
        tags: ['html', 'javascript', 'css'],
    },
    {
        title: 'Packt Free Book of the Day',
        url: 'https://www.packtpub.com/packt/offers/free-learning',
        description: 'Packt Free Learning',
        paid: false,
        upVotes: 0,
        tags: ['book'],
    },
    {
        title: 'JavaScript 30',
        url: 'https://javascript30.com/',
        description: '30 Day Vanilla JS Coding Challenge',
        paid: false,
        upVotes: 0,
        tags: ['javascript'],
    },
    {
        title: 'JavaScript snippets',
        url: 'https://github.com/Chalarangelo/30-seconds-of-code#readme',
        description: 'Curated collection of useful Javascript snippets that you can understand in 30 seconds or less.',
        paid: false,
        upVotes: 0,
        tags: ['javascript'],
    },
    {
        title: 'Code Academy',
        url: 'https://www.codecademy.com',
        description: 'Code Academy',
        paid: false,
        upVotes: 0,
        tags: ['courses'],
    },
    {
        title: 'Code School',
        url: 'https://www.codeschool.com',
        description: 'Code School',
        paid: false,
        upVotes: 0,
        tags: ['courses'],
    },
    {
        title: 'Team Tree House',
        url: 'https://teamtreehouse.com',
        description: 'Code School',
        paid: false,
        upVotes: 0,
        tags: ['courses'],
    },
    {
        title: 'ng-conf session videos',
        url: 'https://www.youtube.com/user/ngconfvideos',
        description: 'ng-conf videos of past sessions',
        paid: false,
        upVotes: 0,
        tags: ['angular'],
    },
    {
        title: 'twit.tv',
        url: 'https://twit.tv/',
        description: 'podcast network',
        paid: false,
        upVotes: 0,
        tags: ['podcast'],
    },
    {
        title: '.NET Rocks',
        url: 'https://www.dotnetrocks.com/',
        description: '.NET Rocks! is a weekly talk show for anyone interested in programming on the Microsoft .NET platform. The shows range from introductory information to hardcore geekiness.',
        paid: false,
        upVotes: 0,
        tags: ['podcast'],
    },
    {
        title: 'Developer On Fire',
        url: 'https://developeronfire.com/',
        description: 'podcast: Inspiring software developers tell their stories',
        paid: false,
        upVotes: 0,
        tags: ['podcast'],
    },
    {
        title: 'Devchat.tv',
        url: 'https://devchat.tv/',
        description: 'podcast network',
        paid: false,
        upVotes: 0,
        tags: ['podcast'],
    },
    {
        title: 'Angular Air',
        url: 'https://angularair.com/',
        description: 'A live videocast on YouTube about all things Angular (by Google), a JavaScript platform for building mobile and desktop web applications.',
        paid: false,
        upVotes: 0,
        tags: ['videocast', 'angular'],
    },
    {
        title: 'Command_Line Heroes',
        url: 'https://www.redhat.com/en/command-line-heroes',
        description: 'An original podcast about the people who transform technology from the command line up. Presented by Red Hat.',
        paid: false,
        upVotes: 0,
        tags: ['podcast'],
    },
    {
        title: 'Risky Business',
        url: 'https://risky.biz/',
        description: 'Risky Business was established in February, 2007. Published weekly, the Risky Business podcast features news and in-depth commentary from security industry luminaries. Hosted by award-winning journalist Patrick Gray, Risky Business has become a must-listen digest for information security professionals. We are also known to publish blog posts from time to time.',
        paid: false,
        upVotes: 0,
        tags: ['podcast', 'security'],
    },
    {
        title: 'Toolsday',
        url: 'https://spec.fm/podcasts/toolsday',
        description: 'A show about the latest in tech tools, tips, and tricks on Tuesdays at 2',
        paid: false,
        upVotes: 0,
        tags: ['podcast'],
    },
    {
        title: 'Manning Publications',
        url: 'https://www.manning.com/',
        description: 'ebooks/Books on technology ',
        paid: false,
        upVotes: 0,
        tags: ['book'],
    },
    {
        title: 'Humble Bundle',
        url: 'https://www.humblebundle.com/',
        description: 'Bundles of ebooks/software offered for a donation',
        paid: true,
        upVotes: 0,
        tags: ['book', 'software'],
    },
    {
        title: 'MS Channel 9',
        url: 'https://channel9.msdn.com/',
        description: 'Welcome to Channel 9! We are a humble group of developers and technical enthusiasts within Microsoft who operate this site devoted to including you into the conversations we have.',
        paid: false,
        upVotes: 0,
        tags: ['video'],
    },
];
var tags = function () {
    var t = resources.reduce(function (tags, resource) {
        return tags.concat(resource.tags);
    }, []);
    return Array.from(new Set(t));
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\github\codenorman\codenorman.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map