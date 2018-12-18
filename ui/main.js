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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/player/player.component */ "./src/app/pages/player/player.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _pages_player_player_bulk_player_bulk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/player/player-bulk/player-bulk.component */ "./src/app/pages/player/player-bulk/player-bulk.component.ts");
/* harmony import */ var _pages_team_team_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/team/team-resolver.service */ "./src/app/pages/team/team-resolver.service.ts");








var resolve = {
    teamData: _pages_team_team_resolver_service__WEBPACK_IMPORTED_MODULE_7__["TeamResolverService"]
};
var admin = [
    {
        path: 'player',
        component: _pages_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"],
        resolve: resolve
    },
    { path: 'team', component: _pages_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"], resolve: resolve },
    { path: 'playerBulk', component: _pages_player_player_bulk_player_bulk_component__WEBPACK_IMPORTED_MODULE_6__["PlayerBulkComponent"] }
];
var routes = admin.concat([
    { path: 'admin', children: admin },
    { path: '', pathMatch: 'full', redirectTo: '/player' },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
]);
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"py-3\">\n      <nav mat-tab-nav-bar>\n        <a\n          mat-tab-link\n          *ngFor=\"let item of links\"\n          [routerLink]=\"item.link\"\n          routerLinkActive\n          #rla=\"routerLinkActive\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          [active]=\"rla.isActive\"\n        >\n          {{ item.text }}\n        </a>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\"><router-outlet></router-outlet></div>\n  </div>\n</div>\n"

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
        this.links = [
            { link: 'player', text: 'Player' },
            { link: 'team', text: 'Team' },
            { link: 'playerBulk', text: 'Add Players' }
        ];
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_in_use_material_in_use_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material-in-use/material-in-use.module */ "./src/app/material-in-use/material-in-use.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_team_team_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/team/team-resolver.service */ "./src/app/pages/team/team-resolver.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_in_use_material_in_use_module__WEBPACK_IMPORTED_MODULE_8__["MaterialInUseModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
                })
            ],
            providers: [_pages_team_team_resolver_service__WEBPACK_IMPORTED_MODULE_11__["TeamResolverService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material-in-use/material-in-use.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-in-use/material-in-use.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialInUseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialInUseModule", function() { return MaterialInUseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
];
var MaterialInUseModule = /** @class */ (function () {
    function MaterialInUseModule() {
    }
    MaterialInUseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [MaterialModules],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
                    useValue: {
                        duration: 4000,
                        verticalPosition: 'top',
                        panelClass: ['custom-snackbar']
                    }
                }
            ],
            exports: [MaterialModules]
        })
    ], MaterialInUseModule);
    return MaterialInUseModule;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_in_use_material_in_use_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material-in-use/material-in-use.module */ "./src/app/material-in-use/material-in-use.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "./src/app/pages/player/player.component.ts");
/* harmony import */ var _player_player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/player-ae/player-ae.component */ "./src/app/pages/player/player-ae/player-ae.component.ts");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player/player.service */ "./src/app/pages/player/player.service.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _team_team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team-ae/team-ae.component */ "./src/app/pages/team/team-ae/team-ae.component.ts");
/* harmony import */ var _team_team_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/team.service */ "./src/app/pages/team/team.service.ts");
/* harmony import */ var _player_player_bulk_player_bulk_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player/player-bulk/player-bulk.component */ "./src/app/pages/player/player-bulk/player-bulk.component.ts");
/* harmony import */ var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-photo/upload-photo.component */ "./src/app/pages/upload-photo/upload-photo.component.ts");














var PAGES = [
    _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"],
    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
    _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
    _player_player_bulk_player_bulk_component__WEBPACK_IMPORTED_MODULE_12__["PlayerBulkComponent"]
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _material_in_use_material_in_use_module__WEBPACK_IMPORTED_MODULE_4__["MaterialInUseModule"]],
            declarations: [
                PAGES,
                _player_player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_7__["PlayerAeComponent"],
                _team_team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_10__["TeamAeComponent"],
                _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_13__["UploadPhotoComponent"]
            ],
            entryComponents: [_player_player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_7__["PlayerAeComponent"], _team_team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_10__["TeamAeComponent"], _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_13__["UploadPhotoComponent"]],
            providers: [_player_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"], _team_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"]],
            exports: [PAGES]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/player/player-ae/player-ae.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/player/player-ae/player-ae.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ title }}</h1>\n<div mat-dialog-content>\n  <form [formGroup]=\"playerForm\" class=\"d-flex\">\n    <div class=\"d-flex w-100\">\n      <div class=\"m-2 w-50\">\n        <mat-form-field>\n          <input matInput placeholder=\"Name*\" formControlName=\"name\" />\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"Player Type\" formControlName=\"playerTypeId\">\n            <mat-option *ngFor=\"let item of playerTypes\" [value]=\"item.value\">\n              {{ item.text }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"Team\" formControlName=\"teamId\">\n            <mat-option *ngFor=\"let item of teamNames.options\" [value]=\"item.value\">\n              {{ item.text }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            matInput\n            placeholder=\"Point\"\n            formControlName=\"point\"\n            type=\"number\"\n          />\n        </mat-form-field>\n        <div><mat-slide-toggle formControlName=\"sold\">Sold</mat-slide-toggle></div>\n        <mat-slide-toggle formControlName=\"isNew\">New Player</mat-slide-toggle>\n        <mat-slide-toggle formControlName=\"isCaptain\">Captain</mat-slide-toggle>\n      </div>\n      <div class=\"m-2 w-50\">\n        <div\n          formGroupName=\"records\"\n          [ngClass]=\"{ 'd-none': playerForm.value.isNew }\"\n        >\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Match\"\n              formControlName=\"match\"\n              type=\"number\"\n            />\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Runs\"\n              formControlName=\"runs\"\n              type=\"number\"\n            />\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Wickets\"\n              formControlName=\"wickets\"\n              type=\"number\"\n            />\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Catches\"\n              formControlName=\"catches\"\n              type=\"number\"\n            />\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div mat-dialog-actions>\n  <button\n    mat-raised-button\n    color=\"primary\"\n    type=\"button\"\n    [disabled]=\"!playerForm.valid\"\n    (click)=\"onSubmit()\"\n  >\n    {{ buttonTitle }}\n  </button>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/player/player-ae/player-ae.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/player/player-ae/player-ae.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItYWUvcGxheWVyLWFlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/player/player-ae/player-ae.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/player/player-ae/player-ae.component.ts ***!
  \***************************************************************/
/*! exports provided: PlayerAeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAeComponent", function() { return PlayerAeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player.service */ "./src/app/pages/player/player.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _team_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../team/team.service */ "./src/app/pages/team/team.service.ts");





var PlayerAeComponent = /** @class */ (function () {
    function PlayerAeComponent(ps, dialogRef, data, ts) {
        this.ps = ps;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ts = ts;
    }
    PlayerAeComponent.prototype.ngOnInit = function () {
        this.teamNames = this.ts.getTeamNames();
        this.playerTypes = this.ps.getPlayerTypes();
        if (this.data.editData) {
            this.buttonTitle = 'Update';
            this.title = 'Edit';
            this.playerForm = this.ps.initForm(this.data.editData);
        }
        else {
            this.playerForm = this.ps.initForm({});
            this.buttonTitle = 'Add';
            this.title = 'Add New';
        }
    };
    PlayerAeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PlayerAeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, resData, resData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.playerForm.value;
                        if (data.isNew) {
                            data.records = null;
                        }
                        if (data.point > 0) {
                            data.sold = true;
                        }
                        if (!this.data.editData) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ps.update(this.data.editData._id, data)];
                    case 1:
                        resData = _a.sent();
                        resData && this.dialogRef.close(true);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.ps.insert(data)];
                    case 3:
                        resData = _a.sent();
                        resData && this.dialogRef.close(true);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlayerAeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-ae',
            template: __webpack_require__(/*! ./player-ae.component.html */ "./src/app/pages/player/player-ae/player-ae.component.html"),
            styles: [__webpack_require__(/*! ./player-ae.component.scss */ "./src/app/pages/player/player-ae/player-ae.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _team_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"]])
    ], PlayerAeComponent);
    return PlayerAeComponent;
}());



/***/ }),

/***/ "./src/app/pages/player/player-bulk/player-bulk.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/player/player-bulk/player-bulk.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"playerForms && playerForms.length; else generateFormView\">\r\n  <div class=\"clearfix\">\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      (click)=\"onSubmit()\"\r\n      class=\"float-right m-3\"\r\n    >\r\n      Add All\r\n    </button>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let playerForm of playerForms; let i = index\"\r\n    class=\"w-100 border\"\r\n  >\r\n    <form [formGroup]=\"playerForm\" class=\"d-flex\">\r\n      <div class=\"p-4 \">{{ i + 1 }}</div>\r\n      <div class=\"w-100 p-2\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Name*\" formControlName=\"name\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Player Type\" formControlName=\"playerTypeId\">\r\n            <mat-option *ngFor=\"let item of playerTypes\" [value]=\"item.value\">\r\n              {{ item.text }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-slide-toggle formControlName=\"isNew\">New Player</mat-slide-toggle>\r\n        <div\r\n          formGroupName=\"records\"\r\n          [ngClass]=\"{ 'd-none': playerForm.value.isNew }\"\r\n        >\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Match\"\r\n              formControlName=\"match\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Runs\"\r\n              formControlName=\"runs\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Wickets\"\r\n              formControlName=\"wickets\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Catches\"\r\n              formControlName=\"catches\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    class=\"float-right m-3\"\r\n  >\r\n    Add All\r\n  </button>\r\n</div>\r\n\r\n<ng-template #generateFormView>\r\n  <div>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        id=\"number-of-player\"\r\n        placeholder=\"Number Of Players\"\r\n        type=\"number\"\r\n        max=\"100\"\r\n        min=\"0\"\r\n      />\r\n    </mat-form-field>\r\n    <button mat-raised-button type=\"button\" (click)=\"generateForms()\">\r\n      Go..\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/player/player-bulk/player-bulk.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/player/player-bulk/player-bulk.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItYnVsay9wbGF5ZXItYnVsay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/player/player-bulk/player-bulk.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/player/player-bulk/player-bulk.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlayerBulkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerBulkComponent", function() { return PlayerBulkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player.service */ "./src/app/pages/player/player.service.ts");



var PlayerBulkComponent = /** @class */ (function () {
    function PlayerBulkComponent(ps) {
        this.ps = ps;
        this.playerTypes = ps.getPlayerTypes();
    }
    PlayerBulkComponent.prototype.ngOnInit = function () { };
    PlayerBulkComponent.prototype.generateForms = function () {
        var numberOfForm = Number.parseInt(document.getElementById('number-of-player')['value'], 10);
        if (!numberOfForm) {
            return;
        }
        var forms = [];
        for (var index = 0; index < numberOfForm; index++) {
            forms.push(this.ps.initForm({}));
        }
        this.playerForms = forms;
    };
    PlayerBulkComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataList, index, data, resData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataList = [];
                        for (index = 0, data = void 0; index < this.playerForms.length; index++) {
                            data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.playerForms[index].value);
                            if (data.isNew) {
                                data.records = null;
                            }
                            dataList.push(data);
                        }
                        console.log(dataList);
                        return [4 /*yield*/, this.ps.insertMany(dataList)];
                    case 1:
                        resData = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerBulkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-bulk',
            template: __webpack_require__(/*! ./player-bulk.component.html */ "./src/app/pages/player/player-bulk/player-bulk.component.html"),
            styles: [__webpack_require__(/*! ./player-bulk.component.scss */ "./src/app/pages/player/player-bulk/player-bulk.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], PlayerBulkComponent);
    return PlayerBulkComponent;
}());



/***/ }),

/***/ "./src/app/pages/player/player.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/player/player.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n  <mat-icon>add</mat-icon><span>Add</span>\n</button>\n<!--\n{{ dataList | json}} -->\n<ng-template #dataComing><mat-spinner></mat-spinner></ng-template>\n\n<div *ngIf=\"dataList; else dataComing\" class=\"m-2\">\n  <table mat-table [dataSource]=\"dataList\" class=\"mat-elevation-z8 p-4\">\n    <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Img Column -->\n    <ng-container matColumnDef=\"photo\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <img\n          (click)=\"uploadPhoto(element)\"\n          mat-card-image\n          class=\"palayer-table-img\"\n          [src]=\"element.photoUrl\"\n          alt=\"Team\"\n          onerror=\"if (this.src != '/static/team-default.jpg') this.src = '/static/team-default.jpg';\"\n        />\n      </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef>Name.</th>\n      <td\n        mat-cell\n        *matCellDef=\"let element\"\n        [ngClass]=\"{\n          'new-player': element.isNew,\n          'is-captain': element.isCaptain\n        }\"\n      >\n        <b class=\"m-3\">{{ element.name }}</b>\n      </td>\n    </ng-container>\n\n    <!-- type Column -->\n    <ng-container matColumnDef=\"playerType\">\n      <th mat-header-cell *matHeaderCellDef>Type.</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"p-2\">{{ playerTypesText[element.playerTypeId] }}</span>\n      </td>\n    </ng-container>\n\n    <!-- Records Column -->\n    <ng-container matColumnDef=\"records\">\n      <th mat-header-cell *matHeaderCellDef>Records.</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <div class=\"d-flex flex-wrap record-td\" *ngIf=\"element.records\">\n          <div class=\"w-50\">Match: {{ element.records.match }}</div>\n          <div class=\"w-50\">Catches: {{ element.records.catches }}</div>\n          <div class=\"w-50\">Runs: {{ element.records.runs }}</div>\n          <div class=\"w-50\">Wickets: {{ element.records.wickets }}</div>\n        </div>\n      </td>\n    </ng-container>\n\n    <!-- Point Column -->\n    <ng-container matColumnDef=\"point\">\n      <th mat-header-cell *matHeaderCellDef>Point.</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.point }}</td>\n    </ng-container>\n    <!-- team Column -->\n    <ng-container matColumnDef=\"team\">\n      <th mat-header-cell *matHeaderCellDef>Team.</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ teamNames[element.teamId] }}\n      </td>\n    </ng-container>\n\n    <!-- sold Column -->\n    <ng-container matColumnDef=\"sold\">\n      <th mat-header-cell *matHeaderCellDef>Sold.</th>\n      <td\n        mat-cell\n        *matCellDef=\"let element\"\n        class=\"px-2\"\n        [ngClass]=\"{ 'sold-td': element.sold }\"\n      ></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef>Edit</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon class=\"pointer p-1\" (click)=\"openEdit(element)\"\n          >edit</mat-icon\n        >\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef>Delete</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon class=\"pointer p-1\" (click)=\"deleteById(element._id)\"\n          >delete</mat-icon\n        >\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/player/player.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/player/player.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.palayer-table-img {\n  height: 75px;\n  width: 75px; }\n\n.record-td {\n  width: 200px; }\n\ntr:hover {\n  background-color: #F9FBE7; }\n\n.new-player {\n  background-color: #E1F5FE; }\n\n.is-captain {\n  background-color: #81D4FA; }\n\n.sold-td {\n  background-color: #b0bbc0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL0Q6XFxzcGFjZVxcZ2l0aHViXFxjcmljdGVhbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xccGxheWVyXFxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUdEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQW9DLEVBQ3JDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWxheWVyLXRhYmxlLWltZyB7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG5cblxuLnJlY29yZC10ZCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQkU3O1xufVxuXG4ubmV3LXBsYXllcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRjVGRTtcbn1cbi5pcy1jYXB0YWlue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFENEZBO1xufVxuXG4uc29sZC10ZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTg3LCAxOTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/player/player.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/player/player.component.ts ***!
  \**************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ "./src/app/pages/player/player.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-ae/player-ae.component */ "./src/app/pages/player/player-ae/player-ae.component.ts");
/* harmony import */ var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload-photo/upload-photo.component */ "./src/app/pages/upload-photo/upload-photo.component.ts");
/* harmony import */ var _team_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../team/team.service */ "./src/app/pages/team/team.service.ts");







var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(ps, ts, dialog) {
        this.ps = ps;
        this.ts = ts;
        this.dialog = dialog;
        this.displayedColumns = [
            'photo',
            'name',
            'playerType',
            'records',
            'point',
            'team',
            'sold',
            'edit',
            'delete'
        ];
        this.playerTypesText = ps.getPlayerTypeText();
        console.log('player');
        this.teamNames = this.ts.getTeamNames();
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.list();
    };
    PlayerComponent.prototype.list = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dataList = null;
                        _a = this;
                        return [4 /*yield*/, this.ps.list()];
                    case 1:
                        _a.dataList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.openEdit = function (playerData) {
        this.openDialog(playerData);
    };
    PlayerComponent.prototype.deleteById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ps.delete(id)];
                    case 1:
                        res = _a.sent();
                        res && this.list();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.openDialog = function (editData) {
        var _this = this;
        if (editData === void 0) { editData = null; }
        var dialogRef = this.dialog.open(_player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_4__["PlayerAeComponent"], {
            width: '500px',
            data: { editData: editData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            result === true && _this.list();
        });
    };
    PlayerComponent.prototype.uploadPhoto = function (_a) {
        var _this = this;
        var name = _a.name, _id = _a._id;
        var dialogRef = this.dialog.open(_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__["UploadPhotoComponent"], {
            width: '400px',
            data: { name: name, _id: _id, for: 'player' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            result === true && _this.list();
        });
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/pages/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/pages/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"],
            _team_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/pages/player/player.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/player/player.service.ts ***!
  \************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};
var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.insert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http
                                .post('/api/player', data, httpOptions)
                                .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayerService.prototype.update = function (id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http
                                .patch('/api/player/' + id, data, httpOptions)
                                .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayerService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.delete('/api/player/' + id).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayerService.prototype.list = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/player').toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlayerService.prototype.insertMany = function (dataList) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http
                                .post('/api/player-bulk', { players: dataList }, httpOptions)
                                .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayerService.prototype.getPlayerTypes = function () {
        return [
            { value: 1, text: 'All rounder' },
            { value: 2, text: 'Batsman' },
            { value: 3, text: 'Bowler' },
            { value: 4, text: 'Wicket Keeper' }
        ];
    };
    PlayerService.prototype.getPlayerTypeText = function () {
        return ['All rounder', 'Batsman', 'Bowler', 'Wicket Keeper'];
    };
    PlayerService.prototype.initForm = function (_a) {
        var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.playerTypeId, playerTypeId = _c === void 0 ? 1 : _c, _d = _a.teamId, teamId = _d === void 0 ? 0 : _d, _e = _a.isNew, isNew = _e === void 0 ? false : _e, _f = _a.point, point = _f === void 0 ? 0 : _f, _g = _a.sold, sold = _g === void 0 ? false : _g, _h = _a.isCaptain, isCaptain = _h === void 0 ? false : _h, _j = _a.isActive, isActive = _j === void 0 ? true : _j, _k = _a.records, records = _k === void 0 ? null : _k;
        var _l = records || {}, _m = _l.match, match = _m === void 0 ? 0 : _m, _o = _l.runs, runs = _o === void 0 ? 0 : _o, _p = _l.wickets, wickets = _p === void 0 ? 0 : _p, _q = _l.catches, catches = _q === void 0 ? 0 : _q;
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            playerTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](playerTypeId),
            teamId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](teamId),
            isNew: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](isNew),
            point: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](point),
            sold: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](sold),
            isCaptain: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](isCaptain),
            isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](isActive),
            records: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                match: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](match),
                runs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](runs),
                wickets: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](wickets),
                catches: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](catches)
            })
        });
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/pages/team/team-ae/team-ae.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/team/team-ae/team-ae.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  <form [formGroup]=\"teamForm\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Name*\" formControlName=\"name\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Total Points\"\r\n        formControlName=\"totalPoints\"\r\n        type=\"number\"\r\n      />\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    type=\"button\"\r\n    [disabled]=\"!teamForm.valid\"\r\n    (click)=\"onSubmit()\"\r\n  >\r\n    {{ buttonTitle }}\r\n  </button>\r\n  <button mat-button (click)=\"onNoClick()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/team/team-ae/team-ae.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/team/team-ae/team-ae.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vdGVhbS1hZS90ZWFtLWFlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/team/team-ae/team-ae.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/team/team-ae/team-ae.component.ts ***!
  \*********************************************************/
/*! exports provided: TeamAeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAeComponent", function() { return TeamAeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team.service */ "./src/app/pages/team/team.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var TeamAeComponent = /** @class */ (function () {
    function TeamAeComponent(ts, dialogRef, data) {
        this.ts = ts;
        this.dialogRef = dialogRef;
        this.data = data;
        if (data.editData) {
            this.buttonTitle = 'Update';
            this.title = 'Edit';
            var _a = data.editData, name_1 = _a.name, totalPoints = _a.totalPoints;
            this.initForm(name_1, totalPoints);
        }
        else {
            this.initForm();
            this.buttonTitle = 'Add';
            this.title = 'Add New';
        }
    }
    TeamAeComponent.prototype.ngOnInit = function () { };
    TeamAeComponent.prototype.initForm = function (name, totalPoints) {
        if (name === void 0) { name = ''; }
        if (totalPoints === void 0) { totalPoints = 15000; }
        this.teamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            totalPoints: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](totalPoints)
        });
    };
    TeamAeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TeamAeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.data.editData) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ts.update(this.data.editData._id, this.teamForm.value)];
                    case 1:
                        data = _a.sent();
                        data && this.dialogRef.close(true);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.ts.insert(this.teamForm.value)];
                    case 3:
                        data = _a.sent();
                        this.dialogRef.close(true);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TeamAeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-ae',
            template: __webpack_require__(/*! ./team-ae.component.html */ "./src/app/pages/team/team-ae/team-ae.component.html"),
            styles: [__webpack_require__(/*! ./team-ae.component.scss */ "./src/app/pages/team/team-ae/team-ae.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], TeamAeComponent);
    return TeamAeComponent;
}());



/***/ }),

/***/ "./src/app/pages/team/team-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/team/team-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: TeamResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamResolverService", function() { return TeamResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team.service */ "./src/app/pages/team/team.service.ts");



var TeamResolverService = /** @class */ (function () {
    function TeamResolverService(ts) {
        this.ts = ts;
    }
    TeamResolverService.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ts.intiTeamNames()];
                    case 1:
                        _a.sent();
                        resolve(true);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    TeamResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], TeamResolverService);
    return TeamResolverService;
}());



/***/ }),

/***/ "./src/app/pages/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n  <mat-icon>add</mat-icon><span>Add</span>\r\n</button>\r\n<!--\r\n{{ dataList | json}} -->\r\n<ng-template #dataComing><mat-spinner></mat-spinner></ng-template>\r\n\r\n<div *ngIf=\"dataList; else dataComing\" class=\"d-flex flex-wrap w-100\">\r\n  <div *ngFor=\"let element of dataList\" class=\"p-4 custom-card\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\">\r\n          {{ element.teamId }}\r\n        </div>\r\n        <mat-card-title>{{ element.name }}</mat-card-title>\r\n        <mat-card-subtitle>{{\r\n          element.totalPoints + ' Points'\r\n        }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img\r\n        mat-card-image\r\n        class=\"team-card-img\"\r\n        [src]=\"element.photoUrl\"\r\n        alt=\"Team\"\r\n        onerror=\"if (this.src != '/static/team-default.jpg') this.src = '/static/team-default.jpg';\"\r\n      />\r\n\r\n      <mat-card-content> <p></p> </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button (click)=\"uploadPhoto(element)\">Photo</button>\r\n        <button mat-button (click)=\"openEdit(element)\">Edit</button>\r\n        <button mat-button (click)=\"deleteById(element._id)\">Delete</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/team/team.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/team/team.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-card-img {\n  height: 200px; }\n\n.custom-card {\n  width: 33%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9EOlxcc3BhY2VcXGdpdGh1YlxcY3JpY3RlYW1cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHRlYW1cXHRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1jYXJkLWltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJkIHtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-ae/team-ae.component */ "./src/app/pages/team/team-ae/team-ae.component.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.service */ "./src/app/pages/team/team.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload-photo/upload-photo.component */ "./src/app/pages/upload-photo/upload-photo.component.ts");






var TeamComponent = /** @class */ (function () {
    function TeamComponent(ts, dialog) {
        this.ts = ts;
        this.dialog = dialog;
        this.displayedColumns = [
            'name',
            'price',
            'quantity',
            '_id',
            'edit',
            'delete'
        ];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.list();
    };
    TeamComponent.prototype.list = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dataList = null;
                        _a = this;
                        return [4 /*yield*/, this.ts.list()];
                    case 1:
                        _a.dataList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamComponent.prototype.openEdit = function (teamData) {
        this.openDialog(teamData);
    };
    TeamComponent.prototype.deleteById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ts.delete(id)];
                    case 1:
                        res = _a.sent();
                        res && this.list();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamComponent.prototype.openDialog = function (editData) {
        var _this = this;
        if (editData === void 0) { editData = null; }
        var dialogRef = this.dialog.open(_team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_2__["TeamAeComponent"], {
            width: '300px',
            data: { editData: editData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            result === true && _this.list();
        });
    };
    TeamComponent.prototype.uploadPhoto = function (_a) {
        var _this = this;
        var name = _a.name, _id = _a._id;
        var dialogRef = this.dialog.open(_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__["UploadPhotoComponent"], {
            width: '400px',
            data: { name: name, _id: _id, for: 'team' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            result === true && _this.list();
        });
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/pages/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/pages/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/pages/team/team.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/team/team.service.ts ***!
  \********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};
var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.teamNames = null;
    }
    TeamService.prototype.insert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http
                                .post('/api/team', data, httpOptions)
                                .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeamService.prototype.update = function (id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http
                                .patch('/api/team/' + id, data, httpOptions)
                                .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeamService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.delete('/api/team/' + id).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TeamService.prototype.list = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/team').toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TeamService.prototype.intiTeamNames = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resData, index, teamId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.teamNames) {
                            return [2 /*return*/, this.teamNames];
                        }
                        this.teamNames = {};
                        this.teamNames['options'] = [];
                        return [4 /*yield*/, this.list()];
                    case 1:
                        resData = _a.sent();
                        for (index = 0, teamId = void 0; index < resData.length; index++) {
                            teamId = parseInt(resData[index].teamId);
                            this.teamNames[teamId] = resData[index].name;
                            this.teamNames['options'].push({ vaule: teamId, text: resData[index].name });
                        }
                        return [2 /*return*/, this.teamNames];
                }
            });
        });
    };
    TeamService.prototype.getTeamNames = function () {
        return this.teamNames;
    };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/pages/upload-photo/upload-photo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/upload-photo/upload-photo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  <h6>{{ name }}</h6>\r\n  <input placeholder=\"photo\" type=\"file\" accept=\"image/*\" id=\"input-photo\" />\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"onSubmit()\">\r\n    Upload\r\n  </button>\r\n  <button mat-button (click)=\"onNoClick()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/upload-photo/upload-photo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/upload-photo/upload-photo.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwbG9hZC1waG90by91cGxvYWQtcGhvdG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/upload-photo/upload-photo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/upload-photo/upload-photo.component.ts ***!
  \**************************************************************/
/*! exports provided: UploadPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhotoComponent", function() { return UploadPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UploadPhotoComponent = /** @class */ (function () {
    function UploadPhotoComponent(dialogRef, data, http, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.snackBar = snackBar;
        this.title = 'Upload Photo';
        this.name = data.name;
    }
    UploadPhotoComponent.prototype.ngOnInit = function () { };
    UploadPhotoComponent.prototype.onSubmit = function () {
        var _this = this;
        var elemFile = document.getElementById('input-photo');
        var files = elemFile.files;
        if (!files && !files.length) {
            return;
        }
        var avatar = files[0];
        if (avatar.type.indexOf('image/') !== 0) {
            this.snackBar.open('Select valid file.');
            return;
        }
        if (avatar.size / (1024 * 1024) > 2) {
            this.snackBar.open('Image Size must be less than 2 MB.');
            return;
        }
        var fileName = this.data._id + '.' + avatar.name.split('.').pop();
        var fileNameMeta = this.data.for + '|s|' + fileName;
        var formData = new FormData();
        formData.append('avatar', avatar, fileNameMeta);
        formData.append('saveMeta', JSON.stringify({ fileName: fileName, id: this.data._id, entityName: this.data.for }));
        this.http.post('/api/upload', formData).subscribe(function (res) {
            if (res && res.done) {
                _this.snackBar.open('Upload successfully.');
                _this.dialogRef.close(true);
                return;
            }
            _this.snackBar.open('Upload Error.');
        });
    };
    UploadPhotoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UploadPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-photo',
            template: __webpack_require__(/*! ./upload-photo.component.html */ "./src/app/pages/upload-photo/upload-photo.component.html"),
            styles: [__webpack_require__(/*! ./upload-photo.component.scss */ "./src/app/pages/upload-photo/upload-photo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UploadPhotoComponent);
    return UploadPhotoComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\space\github\cricteam\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map