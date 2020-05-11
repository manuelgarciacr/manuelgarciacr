(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-notes/angular-notes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/angular-notes/angular-notes.component.ts ***!
  \**********************************************************/
/*! exports provided: AngularNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularNotesComponent", function() { return AngularNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _code_snippet_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code-snippet.directive */ "./src/app/code-snippet.directive.ts");




class AngularNotesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AngularNotesComponent.ɵfac = function AngularNotesComponent_Factory(t) { return new (t || AngularNotesComponent)(); };
AngularNotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularNotesComponent, selectors: [["app-angular-notes"]], decls: 37, vars: 2, consts: [[2, "visibility", "hidden"], ["href", "https://stackoverflow.com/a/54270462", "target", "_blank"], ["appCodeSnippet", ""], ["cpy", "blue"]], template: function AngularNotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "JQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "https://stackoverflow.com/a/54270462");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " npm install jquery &nl npm install @types/jquery &nl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "npm < 5.0.0: The --save option is required to install the dependencies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "angular.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \"scripts\": [&nl &t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \"node_modules/jquery/dist/jquery.min.js\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " &nl ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "angular < 6: The file is angular-cli.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "tsconfig.app.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\"jquery\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "] &nl &t } &nl } &nl\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "{", " &nl &t \u2026 , &nl &t \"compilerOptions\": ", "{", " &nl &t &t \u2026 , &nl &t &t \"types\": [");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _code_snippet_directive__WEBPACK_IMPORTED_MODULE_2__["CodeSnippetDirective"]], styles: ["h3[_ngcontent-%COMP%] {\r\n    margin-top: 1.5em;\r\n}\r\n\r\nh4[_ngcontent-%COMP%], div[appCodeSnippet][_ngcontent-%COMP%], sub[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: .25em;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYW5ndWxhci1ub3Rlcy9hbmd1bGFyLW5vdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FuZ3VsYXItbm90ZXMvYW5ndWxhci1ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbn1cclxuXHJcbmg0LCBkaXZbYXBwQ29kZVNuaXBwZXRdLCBzdWIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW46IC4yNWVtO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularNotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-angular-notes',
                templateUrl: './angular-notes.component.html',
                styleUrls: ['./angular-notes.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.service */ "./src/app/header.service.ts");
/* harmony import */ var _header001_header001_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header001/header001.component */ "./src/app/header001/header001.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sudoku/sudoku.component */ "./src/app/sudoku/sudoku.component.ts");
/* harmony import */ var _lorem05_lorem05_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lorem05/lorem05.component */ "./src/app/lorem05/lorem05.component.ts");
/* harmony import */ var _angular_notes_angular_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-notes/angular-notes.component */ "./src/app/angular-notes/angular-notes.component.ts");








const _c0 = ["tabContent"];
const _c1 = function (a0) { return { active: a0 }; };
class AppComponent {
    constructor(headerService) {
        this.headerService = headerService;
        this.title = 'mgc';
        this.active = '#1a';
        this.headerHeight = '';
        headerService.active.subscribe((value) => {
            if (value.charAt(0) === '#') {
                this.active = value;
            }
        });
        headerService.height.subscribe(() => this.onResize(null));
        headerService.getMarginTop.subscribe(() => this.headerService.marginTopEmiter.next(this.getMargin()));
    }
    onResize(event) {
        const newSize = getComputedStyle(document.documentElement)
            .getPropertyValue('--min-width');
        if (newSize !== 'xs' && newSize !== 'sm')
            this.headerHeight = this.headerService.getHeight() + 'px';
        else
            this.headerHeight = '11em';
    }
    onScroll(event) {
        if (event.target.scrollingElement.scrollTop === 0) {
            this.headerService.scrollTop.emit(null);
        }
    }
    getMargin() {
        if (this.tabContent !== undefined)
            return this.tabContent.nativeElement.offsetTop;
        return 0;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabContent = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 14, consts: [["layout", "row", 1, "container"], [1, "tab-content", "clearfix", 3, "resize"], ["tabContent", ""], ["id", "1a", 1, "tab-pane", 3, "ngClass"], ["id", "2a", 1, "tab-pane", 3, "ngClass"], ["id", "3a", 1, "tab-pane", 3, "ngClass"], ["id", "4a", 1, "tab-pane", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_2_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sudoku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-lorem05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-angular-notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-lorem05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "We use css to change the background color of the content to be equal to the tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.active === "#1a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.active === "#2a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.active === "#3a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.active === "#4a"));
    } }, directives: [_header001_header001_component__WEBPACK_IMPORTED_MODULE_2__["Header001Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_4__["SudokuComponent"], _lorem05_lorem05_component__WEBPACK_IMPORTED_MODULE_5__["Lorem05Component"], _angular_notes_angular_notes_component__WEBPACK_IMPORTED_MODULE_6__["AngularNotesComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background: #eff7f9;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow-x: scroll;\r\n}\r\n\r\napp-board[_ngcontent-%COMP%], app-controls[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: top;;\r\n}\r\n\r\napp-board[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmN2Y5O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG5hcHAtYm9hcmQsIGFwcC1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOztcclxufVxyXG5cclxuYXBwLWJvYXJke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }]; }, { tabContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabContent']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header001_header001_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header001/header001.component */ "./src/app/header001/header001.component.ts");
/* harmony import */ var _lorem05_lorem05_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lorem05/lorem05.component */ "./src/app/lorem05/lorem05.component.ts");
/* harmony import */ var _tabs001_tabs001_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs001/tabs001.component */ "./src/app/tabs001/tabs001.component.ts");
/* harmony import */ var _sudoku_cell_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sudoku/cell/cell.component */ "./src/app/sudoku/cell/cell.component.ts");
/* harmony import */ var _sudoku_board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sudoku/board/board.component */ "./src/app/sudoku/board/board.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _sudoku_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sudoku/controls/controls.component */ "./src/app/sudoku/controls/controls.component.ts");
/* harmony import */ var _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sudoku/sudoku.component */ "./src/app/sudoku/sudoku.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _header001_compress_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header001/compress.directive */ "./src/app/header001/compress.directive.ts");
/* harmony import */ var _tabs002_tabs002_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tabs002/tabs002.component */ "./src/app/tabs002/tabs002.component.ts");
/* harmony import */ var ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap-navbar */ "./node_modules/ngx-bootstrap-navbar/__ivy_ngcc__/fesm2015/ngx-bootstrap-navbar.js");
/* harmony import */ var _angular_notes_angular_notes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./angular-notes/angular-notes.component */ "./src/app/angular-notes/angular-notes.component.ts");
/* harmony import */ var _code_snippet_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./code-snippet.directive */ "./src/app/code-snippet.directive.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"].forRoot({
                useBootstrap4: true
            }),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
            ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_22__["NgxNavbarModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__["ClipboardModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header001_header001_component__WEBPACK_IMPORTED_MODULE_4__["Header001Component"],
        _lorem05_lorem05_component__WEBPACK_IMPORTED_MODULE_5__["Lorem05Component"],
        _tabs001_tabs001_component__WEBPACK_IMPORTED_MODULE_6__["Tabs001Component"],
        _sudoku_cell_cell_component__WEBPACK_IMPORTED_MODULE_7__["CellComponent"],
        _sudoku_board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
        _sudoku_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__["ControlsComponent"],
        _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_11__["SudokuComponent"],
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"],
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ModalContentComponent"],
        _sudoku_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__["NameDialog"],
        _header001_compress_directive__WEBPACK_IMPORTED_MODULE_20__["CompressDirective"],
        _tabs002_tabs002_component__WEBPACK_IMPORTED_MODULE_21__["Tabs002Component"],
        _angular_notes_angular_notes_component__WEBPACK_IMPORTED_MODULE_23__["AngularNotesComponent"],
        _code_snippet_directive__WEBPACK_IMPORTED_MODULE_24__["CodeSnippetDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
        ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_22__["NgxNavbarModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__["ClipboardModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"]], exports: [_header001_compress_directive__WEBPACK_IMPORTED_MODULE_20__["CompressDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header001_header001_component__WEBPACK_IMPORTED_MODULE_4__["Header001Component"],
                    _lorem05_lorem05_component__WEBPACK_IMPORTED_MODULE_5__["Lorem05Component"],
                    _tabs001_tabs001_component__WEBPACK_IMPORTED_MODULE_6__["Tabs001Component"],
                    _sudoku_cell_cell_component__WEBPACK_IMPORTED_MODULE_7__["CellComponent"],
                    _sudoku_board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
                    _sudoku_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__["ControlsComponent"],
                    _sudoku_sudoku_component__WEBPACK_IMPORTED_MODULE_11__["SudokuComponent"],
                    _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"],
                    _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ModalContentComponent"],
                    _sudoku_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__["NameDialog"],
                    _header001_compress_directive__WEBPACK_IMPORTED_MODULE_20__["CompressDirective"],
                    _tabs002_tabs002_component__WEBPACK_IMPORTED_MODULE_21__["Tabs002Component"],
                    _angular_notes_angular_notes_component__WEBPACK_IMPORTED_MODULE_23__["AngularNotesComponent"],
                    _code_snippet_directive__WEBPACK_IMPORTED_MODULE_24__["CodeSnippetDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_contextmenu__WEBPACK_IMPORTED_MODULE_9__["ContextMenuModule"].forRoot({
                        useBootstrap4: true
                    }),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                    ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_22__["NgxNavbarModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__["ClipboardModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                entryComponents: [_sudoku_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__["NameDialog"]],
                exports: [_header001_compress_directive__WEBPACK_IMPORTED_MODULE_20__["CompressDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/code-snippet.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/code-snippet.directive.ts ***!
  \*******************************************/
/*! exports provided: CodeSnippetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetDirective", function() { return CodeSnippetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");



class CodeSnippetDirective {
    constructor(elementRef, clipboard) {
        this.elementRef = elementRef;
        this.clipboard = clipboard;
        this.cpyArray = [];
        this.border = '2px solid black';
        this.backgroundColor = 'lightyellow';
        this.padding = '1em';
        this.fontFamily = '\'Courier Prime\'';
        this.defaultFontFamily = 'monospace';
        this.lightColor = true;
        const ne = elementRef.nativeElement;
        ne.style.display = 'inline-block';
        ne.style.border = this.border;
        ne.style.backgroundColor = this.backgroundColor;
        ne.style.padding = this.padding;
        ne.style.fontFamily = this.fontFamily + ', ' + this.defaultFontFamily;
    }
    ngAfterViewInit() {
        // const pattern3 = '^&\S*;$';
        const pattern = [['&t', '&nbsp;&nbsp;&nbsp;&nbsp;', '    ', false],
            ['&nl', '<br/>', String.fromCharCode(13, 10), false],
            ['&nbsp;', '&nbsp;', ' ', false],
            ['<br.*>', '<br>', String.fromCharCode(13, 10), true]];
        const ne = this.elementRef.nativeElement;
        const nodes = $(ne).contents(); // ne.childNodes;
        let htmlText;
        let color;
        for (const node of nodes) {
            const element = node;
            if (node.nodeType === node.ELEMENT_NODE) {
                // alert(element.textContent)
                htmlText = this.formatText(element.innerHTML, pattern, true, true);
                if (element.hasAttribute('cpy')) {
                    color = $(element).attr('cpy');
                    if (this.lightColor)
                        color = 'light' + color;
                    const cpyText = this.formatText(element.innerHTML, pattern, true, false);
                    $(element).css('backgroundColor', color)
                        .css('display', 'inline-block')
                        .on('click', () => this.clipboard.copy(cpyText));
                }
                $(element).html(htmlText);
            }
            if (node.nodeType === node.TEXT_NODE) {
                htmlText = this.formatText(element.textContent, pattern, false, true);
                $('<span>' + htmlText + '</span>').insertAfter(element);
                element.remove();
            }
        }
        return;
    }
    formatText(text, pattern, fromHtml, toHtml, patternIdx = 0) {
        let patternText = pattern[patternIdx][0];
        if (fromHtml && !pattern[patternIdx][3])
            patternText = $('<div>').html(patternText).html();
        const strings = getCadenas(text, patternText, '');
        if (patternIdx < pattern.length - 1)
            strings.forEach((val, idx) => {
                strings[idx] = this.formatText(val, pattern, fromHtml, toHtml, patternIdx + 1);
            });
        return strings.join(pattern[patternIdx][toHtml ? 1 : 2]);
        // tslint:disable: no-shadowed-variable
        function getCadenas(text, pattern, flags) {
            let res;
            let idx = 0;
            let preTxt;
            const strings = [];
            let foundExp;
            text = text.trim();
            do {
                // idx = text.search(new RegExp(pattern, flags));
                res = text.match(new RegExp(pattern, flags));
                if (res === null) {
                    idx = -1;
                }
                else {
                    idx = res.index;
                    foundExp = res[0];
                }
                if (idx === 0 || idx > 0 && text[idx - 1] !== '\\') {
                    preTxt = text.slice(0, idx).trim();
                    text = text.slice(idx + foundExp.length).trim();
                    strings.push(preTxt);
                }
            } while (idx >= 0);
            strings.push(text);
            return strings;
        }
        // tslint:enable
    }
}
CodeSnippetDirective.ɵfac = function CodeSnippetDirective_Factory(t) { return new (t || CodeSnippetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"])); };
CodeSnippetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CodeSnippetDirective, selectors: [["", "appCodeSnippet", ""]], inputs: { cpy: "cpy" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeSnippetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCodeSnippet]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"] }]; }, { cpy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent, ModalContentComponent, ConfirmParms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmParms", function() { return ConfirmParms; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ModalContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38);
} }
function ModalContentComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalContentComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.fnFirstButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.firstButton, "");
} }
function ModalContentComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalContentComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.fnSecondButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r36.secondButton, "");
} }
function ModalContentComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalContentComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r37.cancelButton, "");
} }
class ConfirmComponent {
    constructor(modalService) {
        this.modalService = modalService;
        modalService.onHide.subscribe(() => this.confirmResult.next(this.bsModalRef.content.result));
    }
    openModalWithComponent(parms) {
        this.confirmResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState: parms });
        // this.bsModalRef.content.closeBtnName = 'Close';
        return this.confirmResult;
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["confirm-component"]], decls: 0, vars: 0, template: function ConfirmComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'confirm-component',
                templateUrl: './confirm.component.html'
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }]; }, null); })();
/* This is a component which we pass in modal*/
class ModalContentComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.result = 0;
        this.body = [];
    }
    fnFirstButton() {
        this.result = 1;
        this.bsModalRef.hide();
    }
    fnSecondButton() {
        this.result = 2;
        this.bsModalRef.hide();
    }
}
ModalContentComponent.ɵfac = function ModalContentComponent_Factory(t) { return new (t || ModalContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"])); };
ModalContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalContentComponent, selectors: [["modal-content"]], decls: 6, vars: 4, consts: [[1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "class", "btn btn-default", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ModalContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalContentComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalContentComponent_button_3_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalContentComponent_button_4_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalContentComponent_button_5_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cancelButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".modal-body[_ngcontent-%COMP%]{\n            font-weight: bolder;\n            font-size: 1.2em;\n            color: darkblue;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                styles: [`
        .modal-body{
            font-weight: bolder;
            font-size: 1.2em;
            color: darkblue;
        }
    `],
                selector: 'modal-content',
                template: `
    <ul class="modal-body">
        <div *ngFor="let item of body">{{item}}</div>
    </ul>
    <div class="modal-footer">
        <button type="button" *ngIf="firstButton"
            class="btn btn-default" (click)="fnFirstButton()" >
            {{firstButton}}</button>
        <button type="button" *ngIf="secondButton"
            class="btn btn-default" (click)="fnSecondButton()" >
            {{secondButton}}</button>
        <button type="button" *ngIf="cancelButton"
            class="btn btn-primary" (click)="bsModalRef.hide()" >
            {{cancelButton}}</button>
    </div>
  `,
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }]; }, null); })();
class ConfirmParms {
}


/***/ }),

/***/ "./src/app/header.service.ts":
/*!***********************************!*\
  !*** ./src/app/header.service.ts ***!
  \***********************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class HeaderService {
    constructor() {
        this.height = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getMarginTop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.marginTopEmiter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scrollTop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getHeight() {
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
        const min = getComputedStyle(document.documentElement)
            .getPropertyValue('--min-width');
        const height = this.height.getValue();
        let value = 0;
        // tslint:disable-next-line: forin
        for (const size of sizes) {
            if (height[size] !== undefined)
                value = height[size];
            if (size === min)
                break;
        }
        return value;
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], getMarginTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/header001/compress.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/header001/compress.directive.ts ***!
  \*************************************************/
/*! exports provided: CompressDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompressDirective", function() { return CompressDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CompressDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.initialHeight = 0;
        this.initialTop = 0;
        this.tempScroll = new Array(3);
        this.isTracking = true;
        this.newHeight = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.minHeight = 0;
    }
    ngAfterViewInit() {
        this.initialHeight = this.eleRef.nativeElement.clientHeight;
    }
    onWindowScroll(event) {
        //  for (let i = 0; i < this.tempScroll.length - 1; i++)
        //     if (Math.round(window.scrollY) === this.tempScroll[i])
        //         return;
        //  console.log(Math.round(window.scrollY), this.eleRef.nativeElement.style.height )
        //  for (let i = 0; i < this.tempScroll.length - 1; i++)
        //     this.tempScroll[i] = this.tempScroll[i + 1];
        //  this.tempScroll[this.tempScroll.length - 1] = Math.round(window.scrollY);
        if (!this.isTracking)
            return;
        const newHeight = this.initialHeight - Math.round(window.scrollY);
        if (newHeight < this.minHeight)
            return;
        this.eleRef.nativeElement.style.height =
            newHeight + 'px';
        this.newHeight.next(newHeight);
    }
    setMinHeight(value) {
        this.minHeight = value;
    }
    setScrollY(value) {
        window.scrollTo(window.scrollX, value);
    }
    getScrollY() {
        return Math.round(window.scrollY);
    }
    setTrack(value) {
        this.isTracking = value;
    }
}
CompressDirective.ɵfac = function CompressDirective_Factory(t) { return new (t || CompressDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CompressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CompressDirective, selectors: [["", "appCompress", ""]], hostBindings: function CompressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CompressDirective_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { minHeight: ["appCompress", "minHeight"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCompress]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appCompress']
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/header001/header001.component.ts":
/*!**************************************************!*\
  !*** ./src/app/header001/header001.component.ts ***!
  \**************************************************/
/*! exports provided: Header001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header001Component", function() { return Header001Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _compress_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compress.directive */ "./src/app/header001/compress.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
/* harmony import */ var _tabs002_tabs002_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabs002/tabs002.component */ "./src/app/tabs002/tabs002.component.ts");








const _c0 = ["header"];
const _c1 = ["titleElement"];
const _c2 = ["subtitleElement"];
const _c3 = ["links"];
const _c4 = ["tabs"];
function Header001Component_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Header001Component_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onPushPinClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.pushPinUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function Header001Component_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r6.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function Header001Component_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Linkedin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r7.linkedinUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c5 = function (a0) { return { "min-height": a0 }; };
class Header001Component {
    constructor(headerService, document) {
        this.headerService = headerService;
        this.document = document;
        this.title = 'Manuel García Criado';
        this.subtitle = 'Analista Programador Multiplataforma';
        this.imgUrl = './assets/png/Foto Manuel 201912 Transparente Izquierda.png';
        this.imgAlt = 'Foto';
        this.pushPinUrl = './assets/png/pushpin.png';
        this.hasPushPin = false;
        this.pushPinOn = false;
        this.email = 'manuel.garcia.cr@hotmail.com';
        this.linkedinUrl = 'http://www.linkedin.com/in/manuelgarciacriado';
        this.heightLimit = [1000, 1000, 1000];
        this.minHeight = 0;
        this.initialMdHeight = 0;
        this.secondSubtitleBottom = 0;
        this.headerClass = { inlineLinks: false, reducedTitleFonts: false, inlineSubtitle: false };
        this.headerService.active.subscribe((value) => {
            if (value.charAt(0) === '*') {
                let sy = this.compressDirective.getScrollY();
                if (this.minHeight && sy > this.initialMdHeight - this.minHeight)
                    sy = this.initialMdHeight - this.minHeight;
                if (this.pushPinOn)
                    sy = 0;
                const subscription = this.headerService.scrollTop.subscribe(() => {
                    this.compressDirective.setScrollY(sy);
                    subscription.unsubscribe();
                });
                this.headerService.active.emit(value.slice(1));
            }
        });
    }
    ngOnInit() {
        this.headerService.height.next({ xs: document.documentElement.clientHeight,
            md: Math.round(document.documentElement.clientHeight / 2) });
        this.initialMdHeight = Math.round(document.documentElement.clientHeight / 2);
    }
    ngAfterViewInit() {
        this.onResize(null);
        this.compressDirective.newHeight.subscribe((value) => {
            const tabsTop = this.tabsElement.navBar.nativeElement.offsetTop;
            if (this.secondSubtitleBottom === 0 &&
                tabsTop < this.subtitleBottom &&
                this.headerClass.reducedTitleFonts) {
                this.calcSecondSubtitleBottom();
            }
            if (this.minHeight === 0 &&
                tabsTop < this.secondSubtitleBottom &&
                this.headerClass.inlineSubtitle) {
                this.calcMinHeight();
            }
            if (tabsTop < this.linksBottom && !this.headerClass.inlineLinks) {
                this.headerClass.inlineLinks = true;
                this.tabsElement.appendElement(this.linksElement.nativeElement);
                this.heightLimit[0] = value;
            }
            if (value > this.heightLimit[0] && this.headerClass.inlineLinks) {
                this.headerClass.inlineLinks = false;
                const element = this.tabsElement.removeElement();
                $(element).insertAfter(this.subtitleElement.nativeElement);
            }
            if (tabsTop < this.subtitleBottom && !this.headerClass.reducedTitleFonts) {
                this.headerClass.reducedTitleFonts = true;
                this.heightLimit[1] = value;
            }
            if (value > this.heightLimit[1] && this.headerClass.reducedTitleFonts) {
                this.headerClass.reducedTitleFonts = false;
            }
            if (tabsTop < this.secondSubtitleBottom && !this.headerClass.inlineSubtitle) {
                this.headerClass.inlineSubtitle = true;
                this.tabsElement.reducedFonts = true;
                this.heightLimit[2] = value;
            }
            if (value > this.heightLimit[2] && this.headerClass.inlineSubtitle) {
                this.headerClass.inlineSubtitle = false;
                this.tabsElement.reducedFonts = false;
            }
            if (value <= this.minHeight)
                this.hasPushPin = true;
            else
                this.hasPushPin = false;
        });
    }
    onResize(event) {
        const newSize = getComputedStyle(document.documentElement)
            .getPropertyValue('--min-width');
        if (this.screenSize !== newSize) {
            this.screenSize = newSize;
            this.pushPinUrl = './assets/png/pushpin.png';
            this.headerService.height.next({ xs: this.headerService.height.getValue().xs, md: this.initialMdHeight });
            this.header.nativeElement.style.height = this.headerService.getHeight() + 'px';
            this.linksBottom = this.getBottom(this.linksElement);
            this.subtitleBottom = this.getBottom(this.subtitleElement);
            this.secondSubtitleBottom = 0;
            this.minHeight = 0;
            this.hasPushPin = false;
            if (this.headerClass.inlineSubtitle) {
                this.headerClass.inlineSubtitle = false;
                this.tabsElement.reducedFonts = false;
            }
            if (this.headerClass.reducedTitleFonts) {
                this.headerClass.reducedTitleFonts = false;
            }
            if (this.headerClass.inlineLinks) {
                this.headerClass.inlineLinks = false;
                const element = this.tabsElement.removeElement();
                $(element).insertAfter(this.subtitleElement.nativeElement);
            }
            this.heightLimit = [1000, 1000, 1000];
            this.compressDirective.setTrack(false);
            this.compressDirective.setScrollY(0);
            this.compressDirective.setTrack(this.screenSize !== 'xs' && this.screenSize !== 'sm');
        }
    }
    getBottom(element) {
        return element.nativeElement.offsetTop +
            element.nativeElement.offsetHeight;
    }
    calcSecondSubtitleBottom() {
        const value = this.getBottom(this.subtitleElement);
        if (value !== this.subtitleBottom)
            this.secondSubtitleBottom = value;
    }
    calcMinHeight() {
        const value = this.getBottom(this.titleElement);
        if (value < this.secondSubtitleBottom)
            this.minHeight = value + this.tabsElement.getHeight() + 15;
    }
    onPushPinClick() {
        this.pushPinOn = !this.pushPinOn;
        this.compressDirective.setTrack(!this.pushPinOn);
        const sy = this.compressDirective.getScrollY();
        const xs = this.headerService.height.getValue().xs;
        if (this.pushPinOn) {
            this.pushPinUrl = './assets/png/pushpin-on.png';
            this.headerService.marginTopEmiter.subscribe(value => {
                this.headerService.height.next({ xs, md: this.minHeight });
                this.compressDirective.setScrollY(sy - value + this.minHeight);
            });
            this.headerService.getMarginTop.emit();
        }
        else {
            this.pushPinUrl = './assets/png/pushpin.png';
            this.headerService.height.next({ xs, md: this.initialMdHeight });
            this.compressDirective.setScrollY(sy - this.minHeight + this.initialMdHeight);
        }
    }
}
Header001Component.ɵfac = function Header001Component_Factory(t) { return new (t || Header001Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
Header001Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Header001Component, selectors: [["app-header001"]], viewQuery: function Header001Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_compress_directive__WEBPACK_IMPORTED_MODULE_1__["CompressDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.compressDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subtitleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linksElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabsElement = _t.first);
    } }, hostBindings: function Header001Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function Header001Component_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 11, consts: [["appCompress", "", "id", "header", 1, "row", "col-md-12", "header", 3, "ngClass", "ngStyle"], ["header", ""], ["alt", "Push Pin", "class", "pushpin", 3, "src", "click", 4, "ngIf"], [1, "col-md-3", "logo"], [3, "src", "alt"], [1, "col-md-9", "content"], [1, "title"], ["titleElement", ""], [1, "subtitle"], ["subtitleElement", ""], [1, "links"], ["links", ""], [3, "href", 4, "ngIf"], [1, "tabs"], ["tabs", ""], ["alt", "Push Pin", 1, "pushpin", 3, "src", "click"], [3, "href"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["aria-hidden", "true", 1, "fa", "fa-linkedin-square"]], template: function Header001Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Header001Component_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Header001Component_a_14_Template, 4, 1, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Header001Component_a_15_Template, 4, 1, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-tabs002", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.headerClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, ctx.minHeight + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPushPin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.imgAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linkedinUrl);
    } }, directives: [_compress_directive__WEBPACK_IMPORTED_MODULE_1__["CompressDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _tabs002_tabs002_component__WEBPACK_IMPORTED_MODULE_4__["Tabs002Component"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\r\n#header[_ngcontent-%COMP%] {\r\n    \r\n    background: #eff7f9;   \r\n    background: linear-gradient(\r\n        45deg,\r\n        #eff7f9 0%,\r\n        #53cbf1 66%,\r\n        #33c9f7 79%,\r\n        #00aadd 100%\r\n    ); \r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eff7f9', endColorstr='#00aadd',GradientType=1 ); \r\n    z-index: 10;\r\n    width: 100%;\r\n    height: 50vh;\r\n    margin: 0;\r\n    padding: 2em 0;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n#header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n#header[_ngcontent-%COMP%] > div.logo[_ngcontent-%COMP%] {\r\n    height: 60vh;\r\n}\r\ndiv.logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: auto;\r\n    padding-top: 2em;\r\n}\r\n#header[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] {\r\n    height: 40vh;\r\n}\r\n#header[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{\r\n    font-size: 3em;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   img.pushpin[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 24px;\r\n    height: 24px;\r\n    display: none;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n    background-color: rgb(239, 247, 249);\r\n}\r\ndiv.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\np.title[_ngcontent-%COMP%] {\r\n    font-family: \"Pacifico\", cursive;\r\n    font-size: 3em;\r\n}\r\n#header.inlineLinks.reducedTitleFonts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 2.2em;\r\n    margin-bottom: 0;\r\n}\r\n#header.inlineLinks.reducedTitleFonts.inlineSubtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    line-height: 2em;\r\n    font-size: 1.6em;\r\n    display: inline-block;\r\n    margin-right: 1em;\r\n}\r\n\r\np.subtitle[_ngcontent-%COMP%] {\r\n    font-family: \"Robotto\", sans-serif;\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n}\r\n#header.inlineLinks.reducedTitleFonts[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\n#header.inlineLinks.inlineSubtitle[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n    display: inline-block;\r\n}\r\n\r\np.links[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\np.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    margin-left: 1em;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n\r\n    \r\n\r\n    #header[_ngcontent-%COMP%]   img.pushpin[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #header[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        padding: 1em 3vw 0 15px;\r\n    }\r\n\r\n    #header[_ngcontent-%COMP%] > div.logo[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n    }\r\n\r\n    #header[_ngcontent-%COMP%] > div.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        padding-top: 0;\r\n    }\r\n\r\n    #header[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n    }\r\n\r\n    #header[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{\r\n        font-size: 3em;\r\n    }\r\n\r\n    \r\n\r\n    div.content[_ngcontent-%COMP%] {\r\n        background-color: transparent;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvaGVhZGVyMDAxL2hlYWRlcjAwMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RSwwRUFBMEU7QUFFMUU7SUFDSSxxSUFBcUk7SUFDckksbUJBQW1CLEVBQUUsaUJBQWlCLEVBQzJHLGFBQWEsRUFDViw0QkFBNEI7SUFDaEw7Ozs7OztLQUEwSSxFQUFFLHFEQUFxRDtJQUNqTSxtSEFBbUgsRUFBRSwwQ0FBMEM7SUFDL0osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGNBQWM7SUFDZCxNQUFNO0lBQ04sT0FBTztBQUNYO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQSxZQUFZO0FBRVo7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQSxpQ0FBaUM7QUFFakM7SUFDSSxvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBLFVBQVU7QUFFVjtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFFQSxhQUFhO0FBRWI7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBRUEsVUFBVTtBQUVWO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQSxtREFBbUQ7QUFDbkQ7O0lBRUksWUFBWTs7SUFFWjtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUVBLDJDQUEyQztBQUMzQztJQUNJO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUEsaUNBQWlDOztJQUVqQztRQUNJLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvaGVhZGVyMDAxL2hlYWRlcjAwMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuI2hlYWRlciB7XHJcbiAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cHM6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvI2VmZjdmOSswLDUzY2JmMSs2NiwzM2M5ZjcrNzksMDBhYWRkKzEwMCAqL1xyXG4gICAgYmFja2dyb3VuZDogI2VmZjdmOTsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICA0NWRlZyxcclxuICAgICAgICAjZWZmN2Y5IDAlLFxyXG4gICAgICAgICM1M2NiZjEgNjYlLFxyXG4gICAgICAgICMzM2M5ZjcgNzklLFxyXG4gICAgICAgICMwMGFhZGQgMTAwJVxyXG4gICAgKTsgLyogRkYzLjYtMTUgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDQ1ZGVnLFxyXG4gICAgICAgICNlZmY3ZjkgMCUsXHJcbiAgICAgICAgIzUzY2JmMSA2NiUsXHJcbiAgICAgICAgIzMzYzlmNyA3OSUsXHJcbiAgICAgICAgIzAwYWFkZCAxMDAlXHJcbiAgICApOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDQ1ZGVnLFxyXG4gICAgICAgICNlZmY3ZjkgMCUsXHJcbiAgICAgICAgIzUzY2JmMSA2NiUsXHJcbiAgICAgICAgIzMzYzlmNyA3OSUsXHJcbiAgICAgICAgIzAwYWFkZCAxMDAlXHJcbiAgICApOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZWZmN2Y5JywgZW5kQ29sb3JzdHI9JyMwMGFhZGQnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNoZWFkZXIgPiBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jaGVhZGVyPmRpdi5sb2dvIHtcclxuICAgIGhlaWdodDogNjB2aDtcclxufVxyXG5cclxuZGl2LmxvZ28+aW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG5cclxuI2hlYWRlcj5kaXYuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbn1cclxuXHJcbiNoZWFkZXI+ZGl2LmNvbnRlbnQgcC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4vKiBQdXNoUGluICovXHJcblxyXG4jaGVhZGVyIGltZy5wdXNocGluIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBUaXRsZSwgc3VidGl0bGUsIGxpbmtzLCB0YWJzICovXHJcblxyXG5kaXYuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDcsIDI0OSk7XHJcbn1cclxuXHJcbmRpdi5jb250ZW50IHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaXRsZSAqL1xyXG5cclxucC50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQYWNpZmljb1wiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbiNoZWFkZXIuaW5saW5lTGlua3MucmVkdWNlZFRpdGxlRm9udHMgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jaGVhZGVyLmlubGluZUxpbmtzLnJlZHVjZWRUaXRsZUZvbnRzLmlubGluZVN1YnRpdGxlIC50aXRsZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG4vKiBTdWJ0aXRsZSAqL1xyXG5cclxucC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdHRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jaGVhZGVyLmlubGluZUxpbmtzLnJlZHVjZWRUaXRsZUZvbnRzIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jaGVhZGVyLmlubGluZUxpbmtzLmlubGluZVN1YnRpdGxlIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBMaW5rcyAqL1xyXG5cclxucC5saW5rcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5wLmxpbmtzIGE6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuXHJcbiAgICAvKiBQdXNoUGluICovXHJcblxyXG4gICAgI2hlYWRlciBpbWcucHVzaHBpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAzdncgMCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNoZWFkZXI+ZGl2LmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjaGVhZGVyPmRpdi5sb2dvIGltZ3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAjaGVhZGVyPmRpdi5jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2hlYWRlcj5kaXYuY29udGVudCBwLnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFRpdGxlLCBzdWJ0aXRsZSwgbGlua3MsIHRhYnMgKi9cclxuXHJcbiAgICBkaXYuY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Header001Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header001',
                templateUrl: './header001.component.html',
                styleUrls: ['./header001.component.css'],
            }]
    }], function () { return [{ type: _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { compressDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_compress_directive__WEBPACK_IMPORTED_MODULE_1__["CompressDirective"]]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header']
        }], titleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['titleElement']
        }], subtitleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['subtitleElement']
        }], linksElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['links']
        }], tabsElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabs']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/lorem05/lorem05.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lorem05/lorem05.component.ts ***!
  \**********************************************/
/*! exports provided: Lorem05Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lorem05Component", function() { return Lorem05Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Lorem05Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Lorem05Component.ɵfac = function Lorem05Component_Factory(t) { return new (t || Lorem05Component)(); };
Lorem05Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Lorem05Component, selectors: [["app-lorem05"]], decls: 10, vars: 0, template: function Lorem05Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis est quis augue luctus rhoncus. Quisque scelerisque velit vitae velit ornare scelerisque. Donec interdum dictum enim, at dapibus ex molestie sit amet. Etiam interdum libero nulla, a ultrices erat pulvinar at. Nullam vestibulum ac est sit amet fringilla. Duis feugiat in ante vitae luctus. Duis et nibh vitae mi interdum eleifend eget in nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ut pellentesque est. Cras lobortis, orci sit amet maximus vulputate, augue diam maximus turpis, at consequat mauris ligula in erat. Maecenas efficitur, diam et congue posuere, dui elit vehicula eros, at fermentum ex libero a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut suscipit maximus est quis sodales.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nDonec ac eros a nulla ultricies laoreet. Aenean sit amet nisl malesuada, consectetur lectus a, laoreet diam. Pellentesque leo odio, placerat sit amet massa et, tempus tincidunt magna. Vivamus dignissim a felis eget vestibulum. Suspendisse ante lacus, viverra id maximus ut, semper a massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dui ligula, vehicula sed sem rutrum, rhoncus tincidunt leo. Vivamus lacinia ipsum nec quam efficitur, at tempus nulla placerat. Sed lorem nibh, rutrum ut purus elementum, malesuada gravida arcu. Sed pulvinar lorem ut urna iaculis, ac efficitur lacus blandit. Suspendisse at velit lectus. Suspendisse euismod odio at nisi volutpat, sit amet congue urna vulputate. Praesent convallis facilisis mauris et rhoncus. Phasellus fringilla augue mauris, eget mattis neque dignissim ac. Quisque id felis et libero ullamcorper finibus. Donec posuere purus at condimentum posuere.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nUt eget erat quis dolor accumsan vehicula. In hendrerit nec diam eu ullamcorper. Etiam pellentesque nibh erat, id faucibus massa hendrerit eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu mi commodo, bibendum ante vitae, pulvinar odio. Nunc tincidunt rhoncus dolor, sodales condimentum magna auctor eu. Nunc luctus porttitor nulla sed sollicitudin. Aenean eget ullamcorper arcu. In quis eros vitae ante mollis sagittis.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\nProin in ex laoreet elit placerat molestie suscipit ac ipsum. Ut sit amet leo cursus elit dapibus aliquet in in nisl. Nullam sed metus vel elit tempus condimentum. Aliquam semper libero in diam tincidunt auctor. Nam egestas, lacus vitae tincidunt viverra, tellus nulla tincidunt nisi, eget hendrerit tellus lectus at enim. Pellentesque aliquet, elit scelerisque posuere finibus, magna orci sodales mi, ornare rhoncus ipsum urna ac sapien. Nunc tellus ex, tempus nec erat sit amet, scelerisque ultrices dui. Aliquam id turpis vulputate, rhoncus sem at, lobortis ante. In vehicula placerat mollis. In ornare velit sed diam elementum elementum. Donec commodo mauris tellus, vitae dapibus tellus tristique ut.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\nNam porta suscipit porta. Aliquam neque justo, lobortis in hendrerit a, mollis sit amet risus. Donec fermentum nisl vel nisi ornare, accumsan vulputate eros gravida. Vestibulum ullamcorper justo posuere ipsum pharetra, id aliquet augue vehicula. Curabitur non tempor sapien, in egestas massa. Sed laoreet massa ut iaculis fringilla. Nullam sagittis, felis et congue congue, magna sem porttitor dui, ultrices rutrum lorem elit ac tellus. Nulla vitae turpis eget leo cursus elementum. Fusce odio ex, consectetur et dignissim at, sodales vel diam. Donec elementum dolor eget dolor efficitur iaculis.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL2xvcmVtMDUvbG9yZW0wNS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Lorem05Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lorem05',
                templateUrl: './lorem05.component.html',
                styleUrls: ['./lorem05.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sudoku/board/board.component.ts":
/*!*************************************************!*\
  !*** ./src/app/sudoku/board/board.component.ts ***!
  \*************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/utils */ "./src/app/sudoku/classes/utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell/cell.component */ "./src/app/sudoku/cell/cell.component.ts");





function BoardComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r32 = ctx.index;
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", i_r29)("column", j_r32)("box", ctx_r30.fn_box(i_r29, j_r32));
} }
function BoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_1_div_1_Template, 2, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.cols);
} }
class BoardComponent {
    constructor() {
        this.rows = new Array(9);
        this.cols = new Array(9);
        this.fn_box = _classes_utils__WEBPACK_IMPORTED_MODULE_1__["fn_box"];
    }
    ngOnInit() {
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 2, vars: 1, consts: [["flex", "", 1, "content"], ["class", "cells-row", 4, "ngFor", "ngForOf"], [1, "cells-row"], ["class", "cells-column", 4, "ngFor", "ngForOf"], [1, "cells-column"], [3, "row", "column", "box"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__["CellComponent"]], styles: ["div.content[_ngcontent-%COMP%]{\r\n   margin: 3em auto 1em;\r\n}\r\n.cells-row[_ngcontent-%COMP%]{\r\n    min-width: 23em;\r\n    text-align: center;\r\n}\r\n.cells-column[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    vertical-align: bottom;;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvc3Vkb2t1L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxvQkFBb0I7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Ii4uLy4uL3NyYy9hcHAvc3Vkb2t1L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGVudHtcclxuICAgbWFyZ2luOiAzZW0gYXV0byAxZW07XHJcbn1cclxuLmNlbGxzLXJvd3tcclxuICAgIG1pbi13aWR0aDogMjNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VsbHMtY29sdW1ue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTs7XHJcbiAgICAvKiB3aWR0aDogMmVtOyAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sudoku/cell/cell.component.ts":
/*!***********************************************!*\
  !*** ./src/app/sudoku/cell/cell.component.ts ***!
  \***********************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _classes_state_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/state.enum */ "./src/app/sudoku/classes/state.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/state.service */ "./src/app/sudoku/services/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function CellComponent_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.ctxNoteClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r16.value);
} }
function CellComponent_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellComponent_4_ng_template_0_Template, 2, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function CellComponent_4_Template_ng_template_execute_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const val_r16 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.setValue(val_r16.value); });
} }
function CellComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r21.ctxNoteClass);
} }
function CellComponent_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellComponent_5_ng_template_0_Template, 2, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function CellComponent_5_Template_ng_template_execute_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.setValue(" "); });
} }
function CellComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CellComponent_6_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.noteToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r24.ctxNoteClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.ctxToggleText, " ");
} }
function CellComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellComponent_6_ng_template_0_Template, 2, 2, "ng-template", 7);
} }
const _c0 = function (a0) { return { "cls-note": a0 }; };
class CellComponent {
    constructor(stateService) {
        this.stateService = stateService;
        this.value = ' ';
        this.notes = '';
        this.isNote = false;
        this.possibleValues = [];
        this.isFixedValue = false;
        this.classes = {};
        this.hasContent = false;
        this.ctxToggleText = 'Notes';
        this.ctxNoteClass = { 'cls-note': false };
        this.hasNoteToggle = false;
    }
    ngOnInit() {
        this.stateService.board[this.row * 9 + this.column]
            .valueEmitter.subscribe((val) => {
            this.value = val;
            if (this.stateService.state !== _classes_state_enum__WEBPACK_IMPORTED_MODULE_2__["StateEnum"].Solving) {
                if (val === ' ')
                    this.classes['val-bold'] = false;
                else
                    this.classes['val-bold'] = true;
            }
            this.isNote = false;
            this.setHasContent();
        });
        this.stateService.board[this.row * 9 + this.column]
            .isFixedValueEmitter.subscribe((val) => this.isFixedValue = val);
        this.stateService.board[this.row * 9 + this.column]
            .possibleValuesEmitter.subscribe((val) => {
            this.possibleValues = [];
            for (const v of val)
                this.possibleValues.push({ value: v });
        });
        this.stateService.board[this.row * 9 + this.column]
            .notesEmitter.subscribe((val) => {
            if (val.length) {
                for (let i = 0; i < val.length; i++)
                    if (i === 0)
                        this.value = val[i];
                    else
                        this.value += ' ' + val[i];
                this.isNote = true;
            }
            else {
                this.value = ' ';
                this.isNote = false;
            }
            this.setHasContent();
        });
        this.stateService.stateEmitter.subscribe((val) => this.hasNoteToggle = val === _classes_state_enum__WEBPACK_IMPORTED_MODULE_2__["StateEnum"].Solving);
        CellComponent.settingNotes.subscribe((val) => {
            this.ctxNoteClass['cls-note'] = val;
            if (val)
                this.ctxToggleText = 'Values';
            else
                this.ctxToggleText = 'Notes';
        });
        this.cellClasses();
    }
    setValue(value) {
        if (this.ctxNoteClass['cls-note'])
            this.stateService.setNote(this.row, this.column, value);
        else
            this.stateService.setValue(this.row, this.column, value);
    }
    setHasContent() {
        if (this.value !== ' ')
            this.hasContent = true;
        else
            this.hasContent = false;
    }
    noteToggle() {
        CellComponent.settingNotes.next(!this.ctxNoteClass['cls-note']);
    }
    // noteToggle() {
    //     this.settingNotes = !this.settingNotes;
    //     if (this.settingNotes){
    //         this.ctxItemClasses['cls-note'] = true;
    //         this.ctxToggleClasses['cls-note'] = true;
    //         this.ctxToggleText = 'Values';
    //     } else {
    //         this.ctxItemClasses['cls-note'] = false;
    //         this.ctxToggleClasses['cls-note'] = false;
    //         this.ctxToggleText = 'Notes';
    //     }
    // }
    setFixedValue(value) {
        this.isFixedValue = value;
    }
    cellClasses() {
        const classes = { 'cls-cell': true };
        if ((this.column + 1) % 3 === 0) {
            classes['right-bold'] = true;
        }
        if (this.column === 0) {
            classes['left-bold'] = true;
        }
        if ((this.row + 1) % 3 === 0) {
            classes['bottom-bold'] = true;
        }
        if (this.row === 0) {
            classes['top-bold'] = true;
        }
        classes['val-bold'] = false;
        this.classes = classes;
    }
}
CellComponent.settingNotes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"])); };
CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellComponent, selectors: [["app-cell"]], viewQuery: function CellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicMenu = _t.first);
    } }, inputs: { row: "row", column: "column", box: "box" }, decls: 7, vars: 10, consts: [[3, "contextMenu", "ngClass"], [3, "ngClass"], [3, "disabled"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["contextMenuItem", "", 3, "execute"], [1, "cls-item", 3, "ngClass"], ["contextMenuItem", "", "passive", "true"], [1, "cls-toggle", 3, "ngClass", "click"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "context-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CellComponent_4_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CellComponent_5_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CellComponent_6_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextMenu", ctx.basicMenu)("ngClass", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isNote));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isFixedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.possibleValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoteToggle);
    } }, directives: [ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], styles: ["div.cls-cell[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    width: 2em;\r\n    height: 2em;\r\n    max-width: 10vw;\r\n    max-height: 10vw;\r\n    text-align: center;\r\n    line-height: 1.6em;\r\n    font-size: 1.25em;\r\n}\r\ndiv.cls-cell.right-bold[_ngcontent-%COMP%]{\r\n    border-right: 4px solid black;\r\n}\r\ndiv.cls-cell.left-bold[_ngcontent-%COMP%]{\r\n    border-left: 4px solid black;\r\n}\r\ndiv.cls-cell.top-bold[_ngcontent-%COMP%]{\r\n    border-top: 4px solid black;\r\n}\r\ndiv.cls-cell.bottom-bold[_ngcontent-%COMP%]{\r\n    border-bottom: 4px solid black;\r\n}\r\ndiv.cls-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: blue;\r\n    font-size: 1.5em;\r\n}\r\ndiv.cls-cell[_ngcontent-%COMP%]   span.cls-note[_ngcontent-%COMP%]{\r\n    color: silver;\r\n    font-weight: bolder;\r\n    font-size: .6em;\r\n    display: block;\r\n    text-align: start;\r\n    line-height: 1;\r\n    padding-left: .4em;\r\n}\r\ndiv.cls-cell.val-bold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-weight: bolder;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvc3Vkb2t1L2NlbGwvY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiLi4vLi4vc3JjL2FwcC9zdWRva3UvY2VsbC9jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2xzLWNlbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMHZ3O1xyXG4gICAgbWF4LWhlaWdodDogMTB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcbmRpdi5jbHMtY2VsbC5yaWdodC1ib2xke1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XHJcbn1cclxuZGl2LmNscy1jZWxsLmxlZnQtYm9sZHtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XHJcbn1cclxuZGl2LmNscy1jZWxsLnRvcC1ib2xke1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbmRpdi5jbHMtY2VsbC5ib3R0b20tYm9sZHtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcclxufVxyXG5kaXYuY2xzLWNlbGwgc3BhbntcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5kaXYuY2xzLWNlbGwgc3Bhbi5jbHMtbm90ZXtcclxuICAgIGNvbG9yOiBzaWx2ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAuNmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG59XHJcbmRpdi5jbHMtY2VsbC52YWwtYm9sZCBzcGFue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIC8qIGZvbnQtc2l6ZTogMS41ZW07ICovXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cell',
                templateUrl: './cell.component.html',
                styleUrls: ['./cell.component.css']
            }]
    }], function () { return [{ type: _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }]; }, { row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], box: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], basicMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/sudoku/classes/cell.ts":
/*!****************************************!*\
  !*** ./src/app/sudoku/classes/cell.ts ***!
  \****************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/sudoku/classes/utils.ts");


class Cell {
    constructor(row, column, box) {
        this.row = row;
        this.column = column;
        this.box = box;
        this._value = ' ';
        this._isFixedValue = false;
        this._possibleValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this._notes = [];
        this.valueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFixedValueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.possibleValuesEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notesEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get isFixedValue() {
        return this._isFixedValue;
    }
    set isFixedValue(value) {
        this._isFixedValue = value;
    }
    get possibleValues() {
        return this._possibleValues;
    }
    set possibleValues(possibleValues) {
        this._possibleValues = possibleValues;
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }
    inGroups(row, column) {
        return row === this.row || column === this.column || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["fn_box"])(row, column) === this.box;
    }
    hasPossibleValue(value) {
        return this.possibleValues.indexOf(value) >= 0;
    }
    addPossibleValue(value) {
        this.possibleValues.push(value);
        this.possibleValues.sort();
    }
    removePossibleValue(value) {
        const idx = this.possibleValues.indexOf(value);
        if (idx >= 0) {
            this.possibleValues.splice(idx, 1);
            if (this.removeNote(value))
                this.emitNotes();
            return true;
        }
        return false;
    }
    hasNote(note) {
        return this.notes.indexOf(note) >= 0;
    }
    addNote(note) {
        this.notes.push(note);
        this.notes.sort();
    }
    removeNote(note) {
        const idx = this.notes.indexOf(note);
        if (idx >= 0) {
            this.notes.splice(idx, 1);
            return true;
        }
        return false;
    }
    // emit
    emitValue() {
        this.valueEmitter.emit(this.value);
    }
    emitFixedValue() {
        this.isFixedValueEmitter.emit(this.isFixedValue);
    }
    emitPossibleValues() {
        this.possibleValuesEmitter.emit(this.possibleValues);
    }
    emitNotes() {
        this.notesEmitter.emit(this.notes);
    }
}


/***/ }),

/***/ "./src/app/sudoku/classes/state.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/sudoku/classes/state.enum.ts ***!
  \**********************************************/
/*! exports provided: StateEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateEnum", function() { return StateEnum; });
var StateEnum;
(function (StateEnum) {
    StateEnum[StateEnum["Empty Board"] = 0] = "Empty Board";
    StateEnum[StateEnum["Editing"] = 1] = "Editing";
    StateEnum[StateEnum["Solving"] = 2] = "Solving";
    StateEnum[StateEnum["Automatically Solving"] = 3] = "Automatically Solving";
})(StateEnum || (StateEnum = {}));


/***/ }),

/***/ "./src/app/sudoku/classes/utils.ts":
/*!*****************************************!*\
  !*** ./src/app/sudoku/classes/utils.ts ***!
  \*****************************************/
/*! exports provided: fn_box, isOverlap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn_box", function() { return fn_box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOverlap", function() { return isOverlap; });
function fn_box(row, column) {
    return Math.floor(row / 3) * 3 + Math.floor(column / 3);
}
function isOverlap(idOne, idTwo) {
    // tslint:disable-next-line: one-variable-per-declaration
    const objOne = $(idOne), objTwo = $(idTwo), offsetOne = objOne.offset(), offsetTwo = objTwo.offset(), topOne = offsetOne.top, topTwo = offsetTwo.top, leftOne = offsetOne.left, leftTwo = offsetTwo.left, widthOne = objOne.width(), widthTwo = objTwo.width(), heightOne = objOne.height(), heightTwo = objTwo.height();
    const leftTop = leftTwo > leftOne && leftTwo < leftOne + widthOne &&
        topTwo > topOne && topTwo < topOne + heightOne;
    const rightTop = leftTwo + widthTwo > leftOne && leftTwo + widthTwo < leftOne + widthOne &&
        topTwo > topOne && topTwo < topOne + heightOne;
    const leftBottom = leftTwo > leftOne && leftTwo < leftOne + widthOne &&
        topTwo + heightTwo > topOne && topTwo + heightTwo < topOne + heightOne;
    const rightBottom = leftTwo + widthTwo > leftOne && leftTwo + widthTwo < leftOne + widthOne &&
        topTwo + heightTwo > topOne && topTwo + heightTwo < topOne + heightOne;
    return leftTop || rightTop || leftBottom || rightBottom;
}


/***/ }),

/***/ "./src/app/sudoku/controls/controls.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/sudoku/controls/controls.component.ts ***!
  \*******************************************************/
/*! exports provided: ControlsComponent, NameDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameDialog", function() { return NameDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/state.enum */ "./src/app/sudoku/classes/state.enum.ts");
/* harmony import */ var src_app_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/state.service */ "./src/app/sudoku/services/state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















function ControlsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.manualEdition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manual Edition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.mediumTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Medium Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.hardTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hard Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.hardestTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hardest Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.withoutSolutionTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Without Solution Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.multipleSolutionsTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Multiple Solutions Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ControlsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.clearAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.finishEdition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Finish Edition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r46.clearAllDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r46.finishEditionDisabled());
} }
function ControlsComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_8_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.solutionReload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_8_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.solutionUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_8_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.solutionDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Solution ", ctx_r58.solutionOrder + 1, "/", ctx_r58.numberOfSolutions, "");
} }
function ControlsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.editTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.calculateSolution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Calculate Solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ControlsComponent_div_8_div_5_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.multipleSolutions);
} }
function NameDialog_mat_form_field_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", record_r70[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r70[0], "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, record_r70[1]), "\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, record_r70[2]), "");
} }
function NameDialog_mat_form_field_2_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r69.getErrorMessage());
} }
function NameDialog_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NameDialog_mat_form_field_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.data.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NameDialog_mat_form_field_2_mat_option_6_Template, 6, 8, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NameDialog_mat_form_field_2_mat_error_8_Template, 2, 1, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r66.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r66.data.name)("formControl", ctx_r66.nameCtrl)("matAutocomplete", _r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r66.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r66.nameCtrl.invalid);
} }
class ControlsComponent {
    constructor(stateService, dialog) {
        this.stateService = stateService;
        this.dialog = dialog;
        this.multipleSolutions = false;
        this.numberOfSolutions = 0;
        this.solutionOrder = 0;
        this.sudokuName = '';
        this.stateService.stateEmitter.subscribe((val) => (this.stateString = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"][val]));
        this.stateService.messageEmitter.subscribe((val) => this.confirmComponent.openModalWithComponent({
            body: val,
            firstButton: 'Ok',
        }));
    }
    ngOnInit() {
        this.stateString = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"][this.stateService.state];
    }
    // Empty Board
    manualEdition() {
        this.stateService.manualEdition();
    }
    mediumTemplate() {
        this.stateService.mediumTemplate();
    }
    hardTemplate() {
        this.stateService.hardTemplate();
    }
    hardestTemplate() {
        this.stateService.hardestTemplate();
    }
    withoutSolutionTemplate() {
        this.stateService.withoutSolutionTemplate();
    }
    multipleSolutionsTemplate() {
        this.stateService.multipleSolutionsTemplate();
    }
    // Editing
    clearAll() {
        this.confirmResult = this.confirmComponent.openModalWithComponent({
            body: ['Clear all?'],
            firstButton: 'yes',
            cancelButton: 'no',
        });
        this.confirmResult.subscribe((result) => {
            if (result)
                this.stateService.clearAll();
            this.confirmResult.unsubscribe();
        });
    }
    clearAllDisabled() {
        return this.stateService.fixedValues < 1;
    }
    finishEdition() {
        this.stateService.finishEdition();
    }
    finishEditionDisabled() {
        return this.stateService.fixedValues < 17;
    }
    // Solving
    editTemplate() {
        if (!this.stateService.hasValuesSetted()) {
            this.multipleSolutions = false;
            this.stateService.editTemplate();
            return;
        }
        this.confirmResult = this.confirmComponent.openModalWithComponent({
            body: ['Clear all established values?'],
            firstButton: 'yes',
            cancelButton: 'no',
        });
        this.confirmResult.subscribe((result) => {
            if (result) {
                this.multipleSolutions = false;
                this.stateService.editTemplate();
            }
            this.confirmResult.unsubscribe();
        });
    }
    calculateSolution() {
        if (!this.stateService.hasValuesSetted()) {
            this.numberOfSolutions = this.stateService.calculateSolution(false);
            this.multipleSolutions = this.numberOfSolutions > 1;
            return;
        }
        this.confirmResult = this.confirmComponent.openModalWithComponent({
            body: ['Clear all established values?'],
            firstButton: 'Yes',
            secondButton: 'No',
            cancelButton: 'Cancel',
        });
        this.confirmResult.subscribe((result) => {
            if (result > 0) {
                this.numberOfSolutions = this.stateService.calculateSolution(result === 1);
                this.multipleSolutions = this.numberOfSolutions > 1;
            }
            this.confirmResult.unsubscribe();
        });
    }
    solutionReload() {
        this.stateService.loadSolution(this.solutionOrder);
    }
    solutionUp() {
        this.solutionOrder++;
        if (this.solutionOrder >= this.numberOfSolutions)
            this.solutionOrder = 0;
        this.stateService.loadSolution(this.solutionOrder);
    }
    solutionDown() {
        this.solutionOrder--;
        if (this.solutionOrder < 0)
            this.solutionOrder = this.numberOfSolutions - 1;
        this.stateService.loadSolution(this.solutionOrder);
    }
    // load/save
    load() {
        const name = '';
        let records = JSON.parse(localStorage.getItem('@@@names'));
        if (records === null)
            records = Array();
        const dialogRef = this.dialog.open(NameDialog, {
            width: '400px',
            data: { name, records, save: true, rewrite: true },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                localStorage.setItem('@@@' + result, JSON.stringify(this.stateService.getSudoku()));
                for (const record of records)
                    if (record[0] === result)
                        record[2] = new Date();
                localStorage.setItem('@@@names', JSON.stringify(records));
            }
        });
    }
    save() {
        const name = '';
        let records = JSON.parse(localStorage.getItem('@@@names'));
        if (records === null)
            records = Array();
        const dialogRef = this.dialog.open(NameDialog, {
            width: '400px',
            data: { name, title: 'Name for save', records, hasInput: true, hasAutocomplete: false, load: false },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                localStorage.setItem('@@@' + result, JSON.stringify(this.stateService.getSudoku()));
                const date = new Date();
                records.push([result, date, date]);
                localStorage.setItem('@@@names', JSON.stringify(records));
            }
        });
    }
    loadOverwrite(load) {
        const name = '';
        let records = JSON.parse(localStorage.getItem('@@@names'));
        if (records === null)
            records = Array();
        const dialogRef = this.dialog.open(NameDialog, {
            width: '400px',
            data: { name, title: (load ? 'Sudoku name to load' : 'Sudoku name to overwrite'),
                records, hasInput: true, hasAutocomplete: true, load },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                if (load) {
                    this.sudokuName = result;
                    this.stateService.setSudoku(JSON.parse(localStorage.getItem('@@@' + result)));
                    return;
                }
                localStorage.setItem('@@@' + result, JSON.stringify(this.stateService.getSudoku()));
                for (const record of records)
                    if (record[0] === result)
                        record[2] = new Date();
                localStorage.setItem('@@@names', JSON.stringify(records));
            }
        });
    }
}
ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return new (t || ControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlsComponent, selectors: [["app-controls"]], viewQuery: function ControlsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmComponent = _t.first);
    } }, decls: 16, vars: 5, consts: [["flex", "", 1, "content"], [1, "state"], [1, "cls-buttons", 3, "ngSwitch"], ["class", "btn-group-vertical", 4, "ngSwitchCase"], [1, "btn-group"], [1, "btn", "btn-success", 3, "click"], [1, "btn-group-vertical"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-warning", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-warning", 3, "click"], ["class", "btn-group", 4, "ngIf"], [1, "btn", "btn-success", "fa", "fa-angle-double-up", 3, "click"], [1, "btn", "btn-success", "fa", "fa-angle-double-down", 3, "click"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "confirm-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ControlsComponent_div_6_Template, 13, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ControlsComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ControlsComponent_div_8_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_Template_button_click_10_listener() { return ctx.loadOverwrite(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_Template_button_click_12_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlsComponent_Template_button_click_14_listener() { return ctx.loadOverwrite(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overwrite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.stateString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Empty Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Solving");
    } }, directives: [src_app_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["div.content[_ngcontent-%COMP%]{\r\n    min-width: 10em;\r\n    max-width: 15em;\r\n    margin: 0 auto;\r\n}\r\n.state[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: .5em;\r\n    color: darkblue;\r\n}\r\n.cls-buttons[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: 1em auto;\r\n}\r\nbutton[_ngcontent-%COMP%]:first-of-type{\r\n    margin-top: 2em;\r\n}\r\n.btn-group[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.btn-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(:first-of-type){\r\n    margin: 2em 0 1em .05em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvc3Vkb2t1L2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL3N1ZG9rdS9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRlbnR7XHJcbiAgICBtaW4td2lkdGg6IDEwZW07XHJcbiAgICBtYXgtd2lkdGg6IDE1ZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc3RhdGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgY29sb3I6IGRhcmtibHVlO1xyXG59XHJcbi5jbHMtYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG59XHJcbmJ1dHRvbjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcbi5idG4tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYnRuLWdyb3VwPmJ1dHRvbjpub3QoOmZpcnN0LW9mLXR5cGUpe1xyXG4gICAgbWFyZ2luOiAyZW0gMCAxZW0gLjA1ZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-controls',
                templateUrl: './controls.component.html',
                styleUrls: ['./controls.component.css'],
            }]
    }], function () { return [{ type: _services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { confirmComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"]]
        }] }); })();
// tslint:disable-next-line: component-class-suffix
class NameDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.nameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            this.nameValidator(data.records)
        ]);
    }
    ngOnInit() {
        if (!this.data.hasAutocomplete)
            return;
        this.filteredOptions = this.nameCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.data.records.filter(record => record[0].toLowerCase().includes(filterValue));
    }
    onNoClick() {
        this.dialogRef.close();
    }
    getErrorMessage() {
        if (this.nameCtrl.hasError('required')) {
            return 'You must enter a value';
        }
        return this.nameCtrl.hasError('nameOk')
            ? 'Not a valid name'
            : this.nameCtrl.hasError('nameRepeated')
                ? 'Repeated name'
                : this.nameCtrl.hasError('nameNotExists')
                    ? 'The name does not exists'
                    : '';
    }
    nameValidator(records) {
        return (control) => {
            if (control.value === '@@@names')
                return { nameKo: true };
            if (!this.data.hasAutocomplete && !this.data.load)
                for (const record of records)
                    if (record[0] === control.value)
                        return { nameRepeated: true };
            if (this.data.hasAutocomplete && this.data.load) {
                for (const record of records)
                    if (record[0] === control.value)
                        return null;
                return { nameNotExists: true };
            }
            return null;
        };
    }
}
NameDialog.ɵfac = function NameDialog_Factory(t) { return new (t || NameDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])); };
NameDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NameDialog, selectors: [["name-dialog"]], decls: 8, vars: 3, consts: [[1, "dialog"], ["mat-dialog-content", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"], ["matInput", "", "required", "", 3, "ngModel", "formControl", "matAutocomplete", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "color", "green", "float", "right"]], template: function NameDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NameDialog_mat_form_field_2_Template, 9, 8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NameDialog_Template_button_click_4_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ok ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.hasInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.name)("disabled", !ctx.nameCtrl.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".mat-dialog-container[_ngcontent-%COMP%] {\n                min-width: 450px;\n                max-width: 500px;\n                width: 100%;\n            }\n            .mat-option.mat-active[_ngcontent-%COMP%], .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n                background: rgba(0,0,0,.1);\n                color: rgba(0,0,0,1);\n            }\n            .mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled) {\n                background-color: lightcyan;\n            }\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'name-dialog',
                template: `
        <div class="dialog">
            <div mat-dialog-content>
                <mat-form-field *ngIf="data.hasInput">
                    <mat-label>{{data.title}}</mat-label>
                    <input
                        matInput
                        [(ngModel)]="data.name"
                        [formControl]="nameCtrl"
                        required
                        [matAutocomplete]="auto"
                    />
                    <mat-autocomplete #auto="matAutocomplete">
                        <mat-option *ngFor="let record of filteredOptions | async" [value]="record[0]">
                            {{ record[0] }}&nbsp;
                            <span style="color: green; float: right;">{{record[1] | date}}&nbsp;{{record[2] | date}}</span>
                        </mat-option>
                    </mat-autocomplete>
                    <mat-error *ngIf="nameCtrl.invalid">{{
                        getErrorMessage()
                    }}</mat-error>
                </mat-form-field>

                <!-- <label id="radio-group-label" *ngIf="!data.save">Select a record</label>
                <mat-radio-group
                    *ngIf="!data.save"
                    aria-labelledby="radio-group-label"
                    class="radio-group"
                    [(ngModel)]="favoriteSeason">
                    <mat-radio-button class="radio-button" *ngFor="let record of records" [value]="season">
                        {{season}}
                    </mat-radio-button>
                </mat-radio-group> -->
            </div>
            <div mat-dialog-actions>
                <button mat-button (click)="onNoClick()">No Thanks</button>
                <button
                    mat-button
                    [mat-dialog-close]="data.name"
                    cdkFocusInitial
                    [disabled]="!nameCtrl.valid"
                >
                    Ok
                </button>
            </div>
        </div>
        `,
                styles: [
                    `
            .mat-dialog-container {
                min-width: 450px;
                max-width: 500px;
                width: 100%;
            }
            .mat-option.mat-active,
            .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
                background: rgba(0,0,0,.1);
                color: rgba(0,0,0,1);
            }
            .mat-option:hover:not(.mat-option-disabled) {
                background-color: lightcyan;
            }
            mat-form-field {
                width: 100%;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/sudoku/services/calculate.ts":
/*!**********************************************!*\
  !*** ./src/app/sudoku/services/calculate.ts ***!
  \**********************************************/
/*! exports provided: calculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculate", function() { return calculate; });
let board;
let rows;
let columns;
let boxes;
function calculate(_board) {
    let cnt;
    board = _board;
    rows = new Array();
    columns = new Array();
    boxes = new Array();
    for (let i = 0; i < 9; i++) {
        rows.push(new Array());
        columns.push(new Array());
        boxes.push(new Array());
    }
    for (const cell of board) {
        rows[cell.row].push(cell);
        columns[cell.column].push(cell);
        boxes[cell.box].push(cell);
    }
    do {
        cnt = searchOne();
        console.log('S1', cnt);
        if (cnt < 0)
            break;
        cnt += searchTwo();
        console.log('S2', cnt);
        cnt += searchThree();
        console.log('S3', cnt);
        cnt += searchFour();
        console.log('S4', cnt);
    } while (cnt > 0);
}
function setValue(row, column, newValue) {
    const oldValue = rows[row][column].value;
    if (rows[row][column].notes.length) {
        rows[row][column].notes = [];
        rows[row][column].emitNotes();
    }
    rows[row][column].value = newValue;
    rows[row][column].emitValue();
    for (const cell of board) {
        if (cell.inGroups(row, column)) {
            if (oldValue !== ' ' && isPossibleValue(cell))
                cell.addPossibleValue(oldValue);
            if (newValue !== ' ')
                cell.removePossibleValue(newValue);
            cell.emitPossibleValues();
        }
    }
    function isPossibleValue(settedCell) {
        for (const cell of board) {
            if (cell.inGroups(settedCell.row, settedCell.column)
                && cell.value === oldValue)
                return false;
        }
        return true;
    }
}
/**
 * Find empty cells with only one possible value and sets this value.
 * Returns the number of cells setted or -1 (error) if the number of
 *   possible values in an empty cell is zero.
 * @returns Number or setted cells. -1 on error.
 */
function searchOne() {
    let cnt; // Number of cells setted in a loop
    let totalCnt = 0; // Total number of cells setted
    let pvCnt; // Number of possible values in a cell
    do {
        cnt = 0;
        for (const cell of board) {
            // tslint:disable-next-line: no-conditional-assignment
            if (cell.value !== ' ' || (pvCnt = cell.possibleValues.length) > 1)
                continue;
            if (pvCnt === 0)
                return -1; // Error. Number of possible values in and empty cell 0
            cnt++;
            setValue(cell.row, cell.column, cell.possibleValues[0]);
        }
        totalCnt += cnt;
    } while (cnt > 0);
    return totalCnt;
}
/**
 * Checks values in a group
 *
 * @returns Number or setted cells. -1 on error
 */
function searchTwo() {
    let cnt; // Number of cells setted in a loop
    let totalCnt = 0; // Total number of cells setted
    do {
        cnt = 0;
        for (let n = 1; n < 10; n++) { // Checked value
            for (let i = 0; i < 9; i++) { // Number of the checked group (row, column or box)
                if (searchTwoProc1(n.toString(), rows[i]))
                    cnt++;
                if (searchTwoProc1(n.toString(), columns[i]))
                    cnt++;
                if (searchTwoProc1(n.toString(), boxes[i]))
                    cnt++;
            }
        }
        totalCnt += cnt;
    } while (cnt > 0);
    return totalCnt;
}
function searchTwoProc1(value, array) {
    let foundCell = null;
    for (const cell of array) {
        if (cell.value !== ' ')
            continue;
        if (cell.possibleValues.indexOf(value) >= 0) {
            if (foundCell === null)
                foundCell = cell;
            else
                return false;
        }
    }
    if (foundCell === null)
        return false;
    setValue(foundCell.row, foundCell.column, value);
    return true;
}
function searchThree() {
    let cnt = 0;
    for (let i = 0; i < 9; i++) {
        if (searchThreeProc1(rows[i]))
            cnt++;
        if (searchThreeProc1(columns[i]))
            cnt++;
        if (searchThreeProc1(boxes[i]))
            cnt++;
    }
    return cnt;
}
function searchThreeProc1(array) {
    let cnt;
    let str;
    const checked = [];
    let goOut = false;
    for (let i = 0; i < 8; i++) {
        if (array[i].value !== ' ')
            continue;
        str = array[i].possibleValues.toString();
        if (checked.indexOf(str) >= 0)
            continue;
        cnt = 1;
        for (let j = i + 1; j < 9; j++) {
            if (array[j].value !== ' ')
                continue;
            if (str === array[j].possibleValues.toString()) {
                cnt++;
            }
        }
        if (cnt > 1) {
            checked.push(str);
            if (cnt === array[i].possibleValues.length) {
                for (const n of array[i].possibleValues) {
                    for (const cell of array) {
                        if (str === cell.possibleValues.toString() &&
                            cell.value === ' ')
                            continue;
                        if (cell.removePossibleValue(n)) {
                            cell.emitPossibleValues();
                            goOut = true;
                        }
                    }
                }
                if (goOut)
                    return true;
            }
        }
    }
    return false;
}
/**
 * Find empty cells in a box with a common possible value.
 * If these cells belong to the same row or column, the value
 *   is removed from the possible values of the cells in this
 *   row or column that do not belong to the tested box.
 * If any possible value is removed, call {@link searchOne}
 *   to search for empty cells with only one possible value and
 *   set this value.
 * Returns the number of cells setted or -1 (error) if the number of
 *   possible values in an empty cell is zero.
 * @returns Number or setted cells. -1 on error.
 */
function searchFour() {
    let row;
    let column;
    let boxNumber;
    let value;
    let cnt = 0;
    for (let n = 1; n < 10; n++) {
        value = n.toString();
        for (const box of boxes) {
            row = null;
            column = null;
            boxNumber = box[0].box;
            for (const cell of box) {
                if (cell.value !== ' ' || !cell.hasPossibleValue(value))
                    continue;
                if (row === null)
                    row = cell.row;
                else if (row !== cell.row)
                    row = -1;
                if (column === null)
                    column = cell.column;
                else if (column !== cell.column)
                    column = -1;
            }
            cnt += searchFourProc1(row, column, boxNumber, value);
        }
    }
    return cnt;
}
function searchFourProc1(row, column, box, value) {
    let cnt = 0;
    cnt = searchFourProc2(row, rows, box, value);
    cnt += searchFourProc2(column, columns, box, value);
    return cnt;
}
function searchFourProc2(group, array, box, value) {
    let cnt = 0;
    if (group === null || group === -1)
        return 0;
    for (const cell of array[group]) {
        if (cell.box === box)
            continue;
        if (cell.removePossibleValue(value)) {
            cell.emitPossibleValues();
            cnt++;
        }
    }
    return cnt;
}


/***/ }),

/***/ "./src/app/sudoku/services/hard-solution.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/sudoku/services/hard-solution.service.ts ***!
  \**********************************************************/
/*! exports provided: HardSolutionService, SimpleCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardSolutionService", function() { return HardSolutionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCell", function() { return SimpleCell; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HardSolutionService {
    constructor() {
        this.firstCell = null;
    }
    solve(sudokuBoard) {
        let lastCell;
        this.firstCell = null;
        for (const cell of sudokuBoard) {
            if (cell.value !== ' ')
                continue;
            if (this.firstCell === null) {
                this.firstCell = new SimpleCell(cell);
                lastCell = this.firstCell;
                continue;
            }
            lastCell.next = new SimpleCell(cell);
            lastCell.next.prev = lastCell;
            lastCell = lastCell.next;
        }
        this.solutions = new Array();
        this.solveProc(this.firstCell);
        return this.solutions;
    }
    solveProc(cell) {
        for (const value of cell.possibleValues) {
            cell.set(value);
            if (cell.next !== null)
                this.solveProc(cell.next);
            else
                this.dump();
            if (this.solutions.length >= 11)
                break;
        }
        cell.set(' ');
    }
    dump() {
        const length = this.solutions.push(new Array());
        console.log(new Date());
        let cell = this.firstCell;
        let str = '';
        while (cell !== null) {
            this.solutions[length - 1].push([cell.row, cell.column, cell.value]);
            if (str !== '')
                str += ', ';
            else
                str += '\n';
            str += (cell.row + ' ' + cell.column + ' ' + cell.value + ' [' + cell.possibleValues + ']');
            cell = cell.next;
        }
        console.log(str);
    }
}
HardSolutionService.ɵfac = function HardSolutionService_Factory(t) { return new (t || HardSolutionService)(); };
HardSolutionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HardSolutionService, factory: HardSolutionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HardSolutionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class SimpleCell {
    constructor(cell) {
        this.possibleValues = new Array();
        this.row = cell.row;
        this.column = cell.column;
        this.box = cell.box;
        this.value = cell.value;
        for (const value of cell.possibleValues)
            this.possibleValues.push(value);
        this.initialPossibleValues = [...this.possibleValues];
        this.next = null;
        this.prev = null;
    }
    set(value) {
        let idx;
        let cell = this.next;
        const oldValue = this.value;
        this.value = value;
        while (cell !== null) {
            if (cell.row !== this.row && cell.column !== this.column && cell.box !== this.box) {
                cell = cell.next;
                continue;
            }
            idx = cell.initialPossibleValues.indexOf(oldValue);
            if (idx >= 0 && this.isPossible(cell, oldValue)) {
                cell.possibleValues.push(oldValue);
                cell.possibleValues.sort();
            }
            idx = cell.possibleValues.indexOf(value);
            if (idx >= 0)
                cell.possibleValues.splice(idx, 1);
            cell = cell.next;
        }
    }
    isPossible(settedCell, value) {
        let cell = settedCell.prev;
        const row = settedCell.row;
        const column = settedCell.column;
        const box = settedCell.box;
        while (cell !== null) {
            if (cell.row !== row && cell.column !== column && cell.box !== box) {
                cell = cell.prev;
                continue;
            }
            if (cell.value === value)
                return false;
            cell = cell.prev;
        }
        return true;
    }
}


/***/ }),

/***/ "./src/app/sudoku/services/set-value.service.ts":
/*!******************************************************!*\
  !*** ./src/app/sudoku/services/set-value.service.ts ***!
  \******************************************************/
/*! exports provided: SetValueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetValueService", function() { return SetValueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/state.enum */ "./src/app/sudoku/classes/state.enum.ts");



class SetValueService {
    constructor() {
    }
    setValue(board, state, fixedValues, row, column, newValue) {
        const settedCell = board[row * 9 + column];
        const oldValue = settedCell.value;
        if (settedCell.notes.length) {
            settedCell.notes = [];
            settedCell.emitNotes();
        }
        // New value must be setted before isPossibleValue calls
        settedCell.value = newValue;
        settedCell.emitValue();
        if (state === _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"].Editing) {
            if (oldValue === ' ')
                fixedValues++;
            else if (newValue === ' ')
                fixedValues--;
        }
        for (const cell of board) {
            if (cell.inGroups(row, column)) {
                if (oldValue !== ' ' && this.isPossibleValue(board, cell, oldValue))
                    cell.addPossibleValue(oldValue);
                if (newValue !== ' ')
                    cell.removePossibleValue(newValue);
                cell.emitPossibleValues();
            }
        }
        return fixedValues;
    }
    isPossibleValue(board, settedCell, newValue) {
        for (const cell of board) {
            if (cell.inGroups(settedCell.row, settedCell.column)
                && cell.value === newValue)
                return false;
        }
        return true;
    }
    setNote(board, state, fixedValues, row, column, newNote) {
        const settedCell = board[row * 9 + column];
        const oldValue = settedCell.value;
        if (settedCell.value !== ' ')
            fixedValues = this.setValue(board, state, fixedValues, row, column, ' ');
        if (newNote === ' ' && oldValue !== ' ')
            settedCell.addNote(oldValue);
        else if (newNote === ' ')
            settedCell.notes = [];
        else if (settedCell.hasNote(newNote))
            settedCell.removeNote(newNote);
        else
            settedCell.addNote(newNote);
        settedCell.emitNotes();
        return fixedValues;
    }
}
SetValueService.ɵfac = function SetValueService_Factory(t) { return new (t || SetValueService)(); };
SetValueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SetValueService, factory: SetValueService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetValueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sudoku/services/state.service.ts":
/*!**************************************************!*\
  !*** ./src/app/sudoku/services/state.service.ts ***!
  \**************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/state.enum */ "./src/app/sudoku/classes/state.enum.ts");
/* harmony import */ var _classes_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/cell */ "./src/app/sudoku/classes/cell.ts");
/* harmony import */ var _classes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/utils */ "./src/app/sudoku/classes/utils.ts");
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculate */ "./src/app/sudoku/services/calculate.ts");
/* harmony import */ var src_db_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/db-data */ "./src/db-data.ts");
/* harmony import */ var _set_value_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-value.service */ "./src/app/sudoku/services/set-value.service.ts");
/* harmony import */ var _hard_solution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hard-solution.service */ "./src/app/sudoku/services/hard-solution.service.ts");









class StateService {
    constructor(setValueService, hardSolutionService) {
        this.setValueService = setValueService;
        this.hardSolutionService = hardSolutionService;
        this.state = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"]['Empty Board'];
        this.stateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.board = [];
        this.fixedValues = 0;
        this.solutions = new Array();
        this.numberOfSolutions = 0;
        this.fn_box = _classes_utils__WEBPACK_IMPORTED_MODULE_3__["fn_box"];
        this.rows = new Array();
        this.columns = new Array();
        this.boxes = new Array();
        this.emitState();
        for (let r = 0; r < 9; r++)
            for (let c = 0; c < 9; c++)
                this.board.push(new _classes_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](r, c, Object(_classes_utils__WEBPACK_IMPORTED_MODULE_3__["fn_box"])(r, c)));
    }
    setTemplate(template) {
        this.manualEdition();
        template.forEach((rowArray, row) => rowArray.forEach((value, column) => {
            if (value !== ' ')
                this.setValue(row, column, value);
        }));
    }
    emitAllPossibleValues() {
        for (const cell of this.board)
            cell.emitPossibleValues();
    }
    emitState() {
        this.stateEmitter.emit(this.state);
    }
    setValue(row, column, newValue) {
        this.fixedValues = this.setValueService.setValue(this.board, this.state, this.fixedValues, row, column, newValue);
    }
    setNote(row, column, newNote) {
        this.fixedValues = this.setValueService.setNote(this.board, this.state, this.fixedValues, row, column, newNote);
    }
    // Empty Board
    manualEdition() {
        this.state = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"].Editing;
        this.emitState();
        this.emitAllPossibleValues();
    }
    mediumTemplate() {
        this.setTemplate(src_db_data__WEBPACK_IMPORTED_MODULE_5__["TEMPLATES"].MEDIUM_TEMPLATE);
    }
    hardTemplate() {
        this.setTemplate(src_db_data__WEBPACK_IMPORTED_MODULE_5__["TEMPLATES"].HARD_TEMPLATE);
    }
    hardestTemplate() {
        this.setTemplate(src_db_data__WEBPACK_IMPORTED_MODULE_5__["TEMPLATES"].HARDEST_TEMPLATE);
    }
    withoutSolutionTemplate() {
        this.setTemplate(src_db_data__WEBPACK_IMPORTED_MODULE_5__["TEMPLATES"].WITHOUT_SOLUTION_TEMPLATE);
    }
    multipleSolutionsTemplate() {
        this.setTemplate(src_db_data__WEBPACK_IMPORTED_MODULE_5__["TEMPLATES"].MULTIPLE_SOLUTIONS_TEMPLATE);
    }
    // Editing
    clearAll() {
        this.state = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"]['Empty Board'];
        this.emitState();
        this.fixedValues = 0;
        for (const cell of this.board) {
            cell.value = ' ';
            cell.possibleValues = [];
            cell.notes = [];
            cell.emitValue();
            cell.emitPossibleValues();
            cell.emitNotes();
            cell.possibleValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        }
    }
    finishEdition() {
        this.state = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"].Solving;
        this.emitState();
        for (const cell of this.board) {
            if (cell.value !== ' ') {
                cell.isFixedValue = true;
                cell.emitFixedValue();
            }
        }
    }
    // Solving
    hasValuesSetted() {
        for (const cell of this.board)
            if (!cell.isFixedValue && cell.value !== ' ')
                return true;
        return false;
    }
    editTemplate() {
        for (const cell of this.board) {
            if (cell.isFixedValue) {
                cell.isFixedValue = false;
                cell.emitFixedValue();
            }
            else if (cell.value !== ' ') {
                this.setValue(cell.row, cell.column, ' ');
            }
        }
        // Changing the state at the end prevents updating the fixed value counter
        this.state = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"].Editing;
        this.emitState();
    }
    calculateSolution(clearValues) {
        let solved = true;
        if (clearValues) {
            for (const cell of this.board) {
                if (!cell.isFixedValue && cell.value !== ' ') {
                    this.setValue(cell.row, cell.column, ' ');
                }
            }
        }
        Object(_calculate__WEBPACK_IMPORTED_MODULE_4__["calculate"])(this.board);
        for (const cell of this.board)
            if (cell.value === ' ')
                solved = false;
        if (solved)
            return 1;
        this.solutions = this.hardSolutionService.solve(this.board);
        console.log(this.solutions);
        this.numberOfSolutions = this.solutions.length;
        if (this.numberOfSolutions === 0)
            this.messageEmitter.emit(['Sudoku without solutions']);
        if (this.numberOfSolutions === 1)
            this.loadSolution(0);
        if (this.numberOfSolutions <= 1)
            return this.numberOfSolutions;
        this.loadSolution(0);
        if (this.numberOfSolutions > 10) {
            delete this.solutions[10];
            this.numberOfSolutions = 10;
            this.messageEmitter.emit([
                'Sudoku with more than 10 solutions.',
                'Only the first ten solutions are loaded.'
            ]);
        }
        return this.numberOfSolutions;
    }
    loadSolution(num) {
        for (const value of this.solutions[num])
            this.setValue(value[0], value[1], value[2]);
    }
    // saving
    // Row, column, isFixedValue, value, notes
    getSudoku() {
        const sudoku = [];
        for (const cell of this.board) {
            if (cell.value === ' ' && !cell.notes.length)
                continue;
            sudoku.push([cell.row, cell.column, cell.isFixedValue, cell.value, cell.notes]);
        }
        return sudoku;
    }
    setSudoku(sudoku) {
        this.clearAll();
        this.state = _classes_state_enum__WEBPACK_IMPORTED_MODULE_1__["StateEnum"].Editing;
        this.emitState();
        for (const cellData of sudoku)
            if (cellData[2])
                this.setValue(cellData[0], cellData[1], cellData[3]);
        this.finishEdition();
        for (const cellData of sudoku)
            if (!cellData[2] && cellData[3] !== ' ')
                this.setValue(cellData[0], cellData[1], cellData[3]);
            else if (cellData[4].length) {
                this.board[cellData[0] * 9 + cellData[1]].notes = cellData[4];
                this.board[cellData[0] * 9 + cellData[1]].emitNotes();
            }
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_set_value_service__WEBPACK_IMPORTED_MODULE_6__["SetValueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_hard_solution_service__WEBPACK_IMPORTED_MODULE_7__["HardSolutionService"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _set_value_service__WEBPACK_IMPORTED_MODULE_6__["SetValueService"] }, { type: _hard_solution_service__WEBPACK_IMPORTED_MODULE_7__["HardSolutionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sudoku/sudoku.component.ts":
/*!********************************************!*\
  !*** ./src/app/sudoku/sudoku.component.ts ***!
  \********************************************/
/*! exports provided: SudokuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuComponent", function() { return SudokuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "./src/app/sudoku/board/board.component.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/sudoku/controls/controls.component.ts");




class SudokuComponent {
}
SudokuComponent.ɵfac = function SudokuComponent_Factory(t) { return new (t || SudokuComponent)(); };
SudokuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SudokuComponent, selectors: [["app-sudoku"]], decls: 3, vars: 0, consts: [[1, "content", "row"], [1, "col-md-6"]], template: function SudokuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-board", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"], _controls_controls_component__WEBPACK_IMPORTED_MODULE_2__["ControlsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zcmMvYXBwL3N1ZG9rdS9zdWRva3UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SudokuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sudoku',
                templateUrl: './sudoku.component.html',
                styleUrls: ['./sudoku.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tabs001/tabs001.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs001/tabs001.component.ts ***!
  \**********************************************/
/*! exports provided: Tabs001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs001Component", function() { return Tabs001Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_db_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/db-data */ "./src/db-data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function Tabs001Component_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", tab_r12.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r12.tag, " ");
} }
class Tabs001Component {
    constructor() {
        this.tabs = src_db_data__WEBPACK_IMPORTED_MODULE_1__["TABS"];
    }
    ngOnInit() {
    }
}
Tabs001Component.ɵfac = function Tabs001Component_Factory(t) { return new (t || Tabs001Component)(); };
Tabs001Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Tabs001Component, selectors: [["app-tabs001"]], decls: 2, vars: 1, consts: [["id", "tabs", 1, "row"], ["class", "col", 3, "href", 4, "ngFor", "ngForOf"], [1, "col", 3, "href"]], template: function Tabs001Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tabs001Component_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["p[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  position: absolute;\r\n  margin-bottom: 0;\r\n  max-width: 100%;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  border-top: 2px solid blue;\r\n  border-right: 2px solid blue;\r\n  border-top-right-radius: 10px;\r\n  margin-left: 0.2em;\r\n    \r\n  background: linear-gradient(\r\n    45deg,\r\n    rgba(206, 204, 204, 0.08) 0%,\r\n    rgba(226, 226, 226, 1) 100%\r\n  ); \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14cecccc', endColorstr='#e2e2e2',GradientType=1 ); \r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n  font-weight: bolder;\r\n    \r\n  background: linear-gradient(\r\n    45deg,\r\n    rgba(206, 204, 204, 0.5) 0%,\r\n    rgba(226, 226, 226, 1) 100%\r\n  ); \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14cecccc', endColorstr='#e2e2e2',GradientType=1 ); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvdGFiczAwMS90YWJzMDAxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDhIQUE4SCxFQUszSCxhQUFhLEVBS2IsNEJBQTRCO0VBQy9COzs7O0dBSUMsRUFBRSxxREFBcUQ7RUFDeEQscUhBQXFILEVBQUUsMENBQTBDO0FBQ25LO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsOEhBQThILEVBSzNILGFBQWEsRUFLYiw0QkFBNEI7RUFDL0I7Ozs7R0FJQyxFQUFFLHFEQUFxRDtFQUN4RCxxSEFBcUgsRUFBRSwwQ0FBMEM7QUFDbksiLCJmaWxlIjoiLi4vLi4vc3JjL2FwcC90YWJzMDAxL3RhYnMwMDEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibHVlO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsdWU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xyXG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jY2VjY2NjKzAsZTJlMmUyKzEwMCYwLjA4KzAsMSsxMDAgKi9cclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcclxuICAgIDQ1ZGVnLFxyXG4gICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjA4KSAwJSxcclxuICAgIHJnYmEoMjI2LCAyMjYsIDIyNiwgMSkgMTAwJVxyXG4gICk7IC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXHJcbiAgICA0NWRlZyxcclxuICAgIHJnYmEoMjA2LCAyMDQsIDIwNCwgMC4wOCkgMCUsXHJcbiAgICByZ2JhKDIyNiwgMjI2LCAyMjYsIDEpIDEwMCVcclxuICApOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDQ1ZGVnLFxyXG4gICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjA4KSAwJSxcclxuICAgIHJnYmEoMjI2LCAyMjYsIDIyNiwgMSkgMTAwJVxyXG4gICk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMTRjZWNjY2MnLCBlbmRDb2xvcnN0cj0nI2UyZTJlMicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHBzOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNjZWNjY2MrMCxlMmUyZTIrMTAwJjAuNTArMCwxKzEwMCAqL1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgNDVkZWcsXHJcbiAgICByZ2JhKDIwNiwgMjA0LCAyMDQsIDAuNSkgMCUsXHJcbiAgICByZ2JhKDIyNiwgMjI2LCAyMjYsIDEpIDEwMCVcclxuICApOyAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgNDVkZWcsXHJcbiAgICByZ2JhKDIwNiwgMjA0LCAyMDQsIDAuNSkgMCUsXHJcbiAgICByZ2JhKDIyNiwgMjI2LCAyMjYsIDEpIDEwMCVcclxuICApOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDQ1ZGVnLFxyXG4gICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjUpIDAlLFxyXG4gICAgcmdiYSgyMjYsIDIyNiwgMjI2LCAxKSAxMDAlXHJcbiAgKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMxNGNlY2NjYycsIGVuZENvbG9yc3RyPScjZTJlMmUyJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tabs001Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs001',
                templateUrl: './tabs001.component.html',
                styleUrls: ['./tabs001.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tabs002/tabs002.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs002/tabs002.component.ts ***!
  \**********************************************/
/*! exports provided: Tabs002Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs002Component", function() { return Tabs002Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_db_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/db-data */ "./src/db-data.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "./src/app/header.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["navUl"];
const _c1 = ["navBar"];
const _c2 = ["navbarContent"];
function Tabs002Component_li_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { active: a0 }; };
function Tabs002Component_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tabs002Component_li_8_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Tabs002Component_li_8_span_3_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, tab_r77.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", tab_r77.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r77.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r77.active);
} }
const _c4 = function (a0) { return { "reducedFonts": a0 }; };
class Tabs002Component {
    constructor(headerService) {
        this.headerService = headerService;
        this.tabs = src_db_data__WEBPACK_IMPORTED_MODULE_1__["TABS"];
        this.appendedElement = null;
        this.reducedFonts = false;
    }
    ngOnInit() {
        let hrefActive = '';
        for (const tab of this.tabs)
            if (tab.active)
                hrefActive = tab.href;
        if (hrefActive === '') {
            hrefActive = this.tabs[0].href;
            this.tabs[0].active = true;
        }
        this.headerService.active.emit(hrefActive);
    }
    onClick(event) {
        const active = this.navUl.nativeElement.getElementsByClassName('active')[0];
        const current = $(active).find('span');
        $(active).removeClass('active');
        $(event.target.parentElement).addClass('active');
        if (current.length)
            $(current[0]).appendTo($(event.target));
        this.headerService.active.emit('*' + event.target.name);
    }
    appendElement(element) {
        const ne = this.navbarContent.nativeElement;
        if (this.appendedElement !== null)
            this.appendedElement.remove();
        this.appendedElement = element;
        $(ne).append(this.appendedElement);
    }
    removeElement() {
        if (this.appendedElement !== null) {
            const element = this.appendedElement;
            this.appendedElement = null;
            return element;
        }
        return null;
    }
    getHeight() {
        return this.navBar.nativeElement.offsetHeight;
    }
}
Tabs002Component.ɵfac = function Tabs002Component_Factory(t) { return new (t || Tabs002Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
Tabs002Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Tabs002Component, selectors: [["app-tabs002"]], viewQuery: function Tabs002Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navUl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarContent = _t.first);
    } }, decls: 9, vars: 4, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], ["navBar", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarContent", "aria-controls", "navbarContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ml-auto"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "collapse", "navbar-collapse", 3, "ngClass"], ["navbarContent", ""], [1, "navbar-nav", "mr-auto"], ["navUl", ""], ["class", "nav-item active", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-item", "active", 3, "ngClass"], ["href", "#", 1, "nav-link", 3, "name", "click"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"]], template: function Tabs002Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Tabs002Component_li_8_Template, 4, 6, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx.reducedFonts));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: auto;\r\n    left: 0;\r\n    padding: .5em;\r\n    width: 100vw;\r\n}\r\n\r\n#navbarContent[_ngcontent-%COMP%] {\r\n    background-color: rgb(239, 247, 249);\r\n}\r\n\r\n\r\n\r\n@media (min-width: 576px) {\r\n    .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .navbar-toggler[_ngcontent-%COMP%] {\r\n        \r\n        \r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n    }\r\n\r\n    #navbarContent.reducedFonts[_ngcontent-%COMP%] {\r\n        font-size: .8em;\r\n        line-height: 1em;;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%] {\r\n        text-decoration: none;\r\n        border-top: 2px solid #007bff;\r\n        border-right: 2px solid #007bff;\r\n        border-top-right-radius: 10px;\r\n        margin-left: 0.2em;\r\n          \r\n        background: linear-gradient(\r\n            45deg,\r\n            rgba(206, 204, 204, 0.08) 0%,\r\n            rgba(226, 226, 226, 1) 100%\r\n        ); \r\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14cecccc', endColorstr='#e2e2e2',GradientType=1 ); \r\n    }\r\n\r\n    .navbar[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover {\r\n        font-weight: bolder;\r\n          \r\n        background: linear-gradient(\r\n            45deg,\r\n            rgba(206, 204, 204, 0.5) 0%,\r\n            rgba(226, 226, 226, 1) 100%\r\n        ); \r\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14cecccc', endColorstr='#e2e2e2',GradientType=1 ); \r\n    }\r\n\r\n    .navbar[_ngcontent-%COMP%]   li.nav-item.active[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%] {\r\n        font-weight: bold;\r\n        color: #007bff;\r\n    }\r\n\r\n    ul.navbar-nav[_ngcontent-%COMP%] {\r\n        margin-right: 1em!important;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: auto;\r\n        bottom: 0;\r\n        background-color: transparent!important;\r\n        padding-bottom: 0;\r\n        z-index: 20;\r\n    }\r\n\r\n    #navbarContent[_ngcontent-%COMP%] {\r\n        background-color: transparent;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvdGFiczAwMi90YWJzMDAyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsbURBQW1EOztBQUNuRDtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQiw4QkFBOEI7UUFDOUIsd0JBQWdCO1FBQWhCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsOEhBQThILEVBSzNILGFBQWEsRUFLYiw0QkFBNEI7UUFDL0I7Ozs7U0FJQyxFQUFFLHFEQUFxRDtRQUN4RCxxSEFBcUgsRUFBRSwwQ0FBMEM7SUFDcks7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsOEhBQThILEVBSzNILGFBQWEsRUFLYiw0QkFBNEI7UUFDL0I7Ozs7U0FJQyxFQUFFLHFEQUFxRDtRQUN4RCxxSEFBcUgsRUFBRSwwQ0FBMEM7SUFDcks7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKOztBQUVBLDJDQUEyQzs7QUFDM0M7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsU0FBUztRQUNULHVDQUF1QztRQUN2QyxpQkFBaUI7UUFDakIsV0FBVztJQUNmOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0oiLCJmaWxlIjoiLi4vLi4vc3JjL2FwcC90YWJzMDAyL3RhYnMwMDIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbiNuYXZiYXJDb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0NywgMjQ5KTtcclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5uYXZiYXIgdWwge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2YmFyQ29udGVudC5yZWR1Y2VkRm9udHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtOztcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwN2JmZjtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC4yZW07XHJcbiAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHBzOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNjZWNjY2MrMCxlMmUyZTIrMTAwJjAuMDgrMCwxKzEwMCAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICA0NWRlZyxcclxuICAgICAgICAgICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjA4KSAwJSxcclxuICAgICAgICAgICAgcmdiYSgyMjYsIDIyNiwgMjI2LCAxKSAxMDAlXHJcbiAgICAgICAgKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgNDVkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMjA2LCAyMDQsIDIwNCwgMC4wOCkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjI2LCAyMjYsIDIyNiwgMSkgMTAwJVxyXG4gICAgICAgICk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICA0NWRlZyxcclxuICAgICAgICAgICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjA4KSAwJSxcclxuICAgICAgICAgICAgcmdiYSgyMjYsIDIyNiwgMjI2LCAxKSAxMDAlXHJcbiAgICAgICAgKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMxNGNlY2NjYycsIGVuZENvbG9yc3RyPScjZTJlMmUyJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhciBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHBzOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNjZWNjY2MrMCxlMmUyZTIrMTAwJjAuNTArMCwxKzEwMCAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICA0NWRlZyxcclxuICAgICAgICAgICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjUpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDIyNiwgMjI2LCAyMjYsIDEpIDEwMCVcclxuICAgICAgICApOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICA0NWRlZyxcclxuICAgICAgICAgICAgcmdiYSgyMDYsIDIwNCwgMjA0LCAwLjUpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDIyNiwgMjI2LCAyMjYsIDEpIDEwMCVcclxuICAgICAgICApOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgNDVkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMjA2LCAyMDQsIDIwNCwgMC41KSAwJSxcclxuICAgICAgICAgICAgcmdiYSgyMjYsIDIyNiwgMjI2LCAxKSAxMDAlXHJcbiAgICAgICAgKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMxNGNlY2NjYycsIGVuZENvbG9yc3RyPScjZTJlMmUyJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhciBsaS5uYXYtaXRlbS5hY3RpdmUgPiBhLm5hdi1saW5rIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIH1cclxuXHJcbiAgICB1bC5uYXZiYXItbmF2IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgICNuYXZiYXJDb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tabs002Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs002',
                templateUrl: './tabs002.component.html',
                styleUrls: ['./tabs002.component.css'],
            }]
    }], function () { return [{ type: _header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }]; }, { navUl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navUl']
        }], navBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navBar']
        }], navbarContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navbarContent']
        }] }); })();


/***/ }),

/***/ "./src/db-data.ts":
/*!************************!*\
  !*** ./src/db-data.ts ***!
  \************************/
/*! exports provided: TABS, TEMPLATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS", function() { return TABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATES", function() { return TEMPLATES; });
const TABS = [
    { tag: 'Sudoku', title: 'Sudoku', href: '#1a', active: false },
    { tag: 'Angular Notes', title: 'Angular Notes', href: '#2a', active: false },
    { tag: 'Hibernate', title: 'Hibernate', href: '#3a', active: false }
];
const TEMPLATES = {
    MEDIUM_TEMPLATE: [
        [' ', '7', ' ', ' ', ' ', ' ', '6', ' ', ' '],
        [' ', '8', ' ', ' ', ' ', ' ', '2', ' ', ' '],
        [' ', ' ', ' ', '1', '7', '4', ' ', ' ', ' '],
        [' ', '1', ' ', '6', ' ', ' ', '3', ' ', '2'],
        [' ', ' ', '7', ' ', ' ', ' ', '1', ' ', ' '],
        ['6', ' ', '8', ' ', ' ', '2', ' ', '5', ' '],
        [' ', ' ', ' ', '4', '8', '3', ' ', ' ', ' '],
        [' ', ' ', '1', ' ', ' ', ' ', ' ', '4', ' '],
        [' ', ' ', '5', ' ', ' ', ' ', ' ', '3', ' ']
    ],
    HARD_TEMPLATE: [
        [' ', '3', '4', ' ', ' ', ' ', ' ', '6', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', '9', ' ', ' '],
        [' ', ' ', '9', ' ', ' ', '4', '8', ' ', '5'],
        ['5', '6', ' ', ' ', '2', '7', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '8', ' ', ' ', ' ', '2'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['9', ' ', ' ', ' ', ' ', ' ', ' ', '4', ' '],
        ['8', ' ', ' ', '3', ' ', ' ', '6', ' ', ' '],
        [' ', '7', ' ', '2', '5', ' ', ' ', ' ', ' ']
    ],
    HARDEST_TEMPLATE: [
        ['8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', '3', '6', ' ', ' ', ' ', ' ', ' '],
        [' ', '7', ' ', ' ', '9', ' ', '2', ' ', ' '],
        [' ', '5', ' ', ' ', ' ', '7', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '4', '5', '7', ' ', ' '],
        [' ', ' ', ' ', '1', ' ', ' ', ' ', '3', ' '],
        [' ', ' ', '1', ' ', ' ', ' ', ' ', '6', '8'],
        [' ', ' ', '8', '5', ' ', ' ', ' ', '1', ' '],
        [' ', '9', ' ', ' ', ' ', ' ', '4', ' ', ' ']
    ],
    WITHOUT_SOLUTION_TEMPLATE: [
        [' ', '7', ' ', ' ', ' ', ' ', '6', ' ', ' '],
        [' ', '8', ' ', ' ', ' ', ' ', '2', ' ', ' '],
        [' ', ' ', ' ', '1', '7', '4', ' ', '8', ' '],
        [' ', '1', ' ', '6', ' ', ' ', '3', ' ', '2'],
        [' ', ' ', '7', ' ', ' ', ' ', '1', ' ', ' '],
        ['6', ' ', '8', ' ', ' ', '2', ' ', '5', ' '],
        [' ', ' ', ' ', '4', '8', '3', ' ', ' ', ' '],
        [' ', ' ', '1', ' ', ' ', ' ', ' ', '4', ' '],
        [' ', ' ', '5', ' ', ' ', ' ', ' ', '3', ' ']
    ],
    MULTIPLE_SOLUTIONS_TEMPLATE: [
        ['8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', '3', '6', ' ', ' ', ' ', ' ', ' '],
        [' ', '7', ' ', ' ', '9', ' ', '2', ' ', ' '],
        [' ', '5', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '4', '5', '7', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', '3', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', '6', '8'],
        [' ', ' ', '8', '5', ' ', ' ', ' ', '1', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', '4', ' ', ' ']
    ]
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Documents\AngularWS\mgc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map