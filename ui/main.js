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
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");









var resolve = {
    teamData: _pages_team_team_resolver_service__WEBPACK_IMPORTED_MODULE_7__["TeamResolverService"]
};
var admin = [
    {
        path: 'player',
        component: _pages_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]
    },
    { path: 'team', component: _pages_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'playerBulk', component: _pages_player_player_bulk_player_bulk_component__WEBPACK_IMPORTED_MODULE_6__["PlayerBulkComponent"] },
    { path: '', component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"] }
];
var routes = [
    { path: 'admin', resolve: resolve, children: admin },
    { path: '', pathMatch: 'full', redirectTo: '/admin' },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\"><router-outlet></router-outlet></div>\n  </div>\n</div>\n"

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

/***/ "./src/app/pages/admin-home/admin-home.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-home/admin-home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fliud\">\n  <div class=\"row wrapper\">\n    <div class=\"col-12\">\n      <div class=\"d-flex align-items-start flex-column h-100\">\n        <div class=\"p-2\">\n          <div *ngIf=\"teamList; else dataComing\" class=\"d-flex w-100\">\n            <div *ngFor=\"let teamData of teamList\" class=\"p-1 flex-fill\">\n              <app-team-card\n                [element]=\"teamData\"\n                [teamPoints]=\"teamPoints\"\n                [currentTeamId]=\"currentTeamId\"\n              ></app-team-card>\n              <button\n                mat-fab\n                color=\"primary\"\n                class=\"m-1\"\n                (click)=\"addPoint(teamData.teamId, 10)\"\n              >\n                10\n              </button>\n              <button\n                mat-fab\n                color=\"primary\"\n                class=\"m-1\"\n                (click)=\"addPoint(teamData.teamId, 20)\"\n              >\n                20\n              </button>\n              <button\n                mat-fab\n                color=\"primary\"\n                class=\"m-1\"\n                (click)=\"addPoint(teamData.teamId, 50)\"\n              >\n                50\n              </button>\n              <button\n                mat-fab\n                color=\"accent\"\n                class=\"m-1\"\n                (click)=\"addPoint(teamData.teamId, 100)\"\n              >\n                100\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"mb-auto p-2 w-100\">\n          <div class=\"d-flex\" *ngIf=\"currentPlayer; else dataComing\">\n            <form [formGroup]=\"playerForm\" class=\"d-flex w-100\">\n              <div class=\"\" style=\"width: 250px;\">\n                <app-player-card [element]=\"currentPlayer\"></app-player-card>\n              </div>\n              <div class=\"flex-fill\">\n                <div class=\"d-flex justify-content-center\">\n                  <div class=\"current-point m-4\">\n                    <input matInput formControlName=\"point\" type=\"number\" />\n                  </div>\n                  <div class=\"current-team m-4\">\n                    <div class=\"d-flex\">\n                      <div style=\"width: 200px;\" class=\"mt-4\">\n                        <mat-select placeholder=\"Team\" formControlName=\"teamId\">\n                          <mat-option\n                            *ngFor=\"let item of teamNames.options\"\n                            [value]=\"item.id\"\n                          >\n                            {{ item.text }}\n                          </mat-option>\n                        </mat-select>\n                      </div>\n                      <button\n                        mat-raised-button\n                        color=\"primary\"\n                        class=\"ml-4 mt-4\"\n                        style=\"font-size: 25px;\"\n                        (click)=\"onSubmit()\"\n                      >\n                        Lock The Deal\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #dataComing><mat-spinner></mat-spinner></ng-template>\n"

/***/ }),

/***/ "./src/app/pages/admin-home/admin-home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-home/admin-home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: calc(80vh); }\n\n.current-point, .current-point input {\n  font-size: 150px;\n  color: #1565c0;\n  width: 400px; }\n\n.current-team {\n  font-size: 18px;\n  color: #1565c0;\n  width: 400px; }\n\n.current-point .mat-form-field-label-wrapper {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4taG9tZS9EOlxcc3BhY2VcXGdpdGh1YlxcY3JpY3RlYW1cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGFkbWluLWhvbWVcXGFkbWluLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGFBQVksRUFDYjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGFBQVksRUFDYjs7QUFFRDtFQUNFLHlCQUF3QixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBoZWlnaHQ6IGNhbGMoODB2aCk7XHJcbn1cclxuLmN1cnJlbnQtcG9pbnQsIC5jdXJyZW50LXBvaW50IGlucHV0IHtcclxuICBmb250LXNpemU6IDE1MHB4O1xyXG4gIGNvbG9yOiAjMTU2NWMwO1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmN1cnJlbnQtdGVhbSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMTU2NWMwO1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmN1cnJlbnQtcG9pbnQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin-home/admin-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../team/team.service */ "./src/app/pages/team/team.service.ts");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/player.service */ "./src/app/pages/player/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(ps, ts, router) {
        this.ps = ps;
        this.ts = ts;
        this.router = router;
        this.teamList = null;
        this.teamPoints = null;
        this.currentTeamId = 0;
        this.playerId = '5c19d0a99438fe71e0fe3306';
        this.nextPlayer();
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        this.teamNames = this.ts.getTeamNames();
        this.playerTypes = this.ps.getPlayerTypes();
        this.getTeamList();
        this.initForm();
    };
    AdminHomeComponent.prototype.getTeamList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.teamList = null;
                        _a = this;
                        return [4 /*yield*/, this.ps.getPointForTeam()];
                    case 1:
                        _a.teamPoints = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.ts.list()];
                    case 2:
                        _b.teamList = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminHomeComponent.prototype.initForm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.ps.getPlayerById(this.playerId)];
                    case 1:
                        _a.currentPlayer = _b.sent();
                        this.playerForm = this.ps.initForm(this.currentPlayer);
                        this.playerForm.valueChanges.subscribe(function () {
                            var teamId = _this.playerForm.controls['teamId'].value;
                            if (teamId) {
                                _this.currentTeamId = teamId;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminHomeComponent.prototype.addPoint = function (teamId, point) {
        var currentPoint = this.playerForm.value.point;
        this.playerForm.patchValue({
            point: currentPoint + point,
            teamId: teamId
        });
    };
    AdminHomeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, resData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.playerForm.value;
                        if (data.isNew) {
                            data.records = null;
                        }
                        data.sold = true;
                        return [4 /*yield*/, this.ps.update(this.currentPlayer._id, data)];
                    case 1:
                        resData = _a.sent();
                        resData && resData.updated && this.playerIds.shift();
                        this.nextPlayer();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminHomeComponent.prototype.nextPlayer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.playerIds.length) {
                    this.router.navigateByUrl('/admin');
                }
                this.playerId = this.playerIds[0];
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminHomeComponent.prototype, "playerIds", void 0);
    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/pages/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.scss */ "./src/app/pages/admin-home/admin-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"],
            _team_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-navigation/admin-navigation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-navigation/admin-navigation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-3\">\n    <nav mat-tab-nav-bar>\n      <a\n        mat-tab-link\n        *ngFor=\"let item of links\"\n        [routerLink]=\"item.link\"\n        routerLinkActive\n        #rla=\"routerLinkActive\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        [active]=\"rla.isActive\"\n      >\n        {{ item.text }}\n      </a>\n    </nav>\n  </div>"

/***/ }),

/***/ "./src/app/pages/admin-navigation/admin-navigation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-navigation/admin-navigation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLW5hdmlnYXRpb24vYWRtaW4tbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin-navigation/admin-navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-navigation/admin-navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavigationComponent", function() { return AdminNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminNavigationComponent = /** @class */ (function () {
    function AdminNavigationComponent() {
        this.links = [
            { link: '/admin', text: 'Home' },
            { link: '/admin/player', text: 'Player' },
            { link: '/admin/team', text: 'Team' },
            { link: '/admin/playerBulk', text: 'Add Players' }
        ];
    }
    AdminNavigationComponent.prototype.ngOnInit = function () {
    };
    AdminNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-navigation',
            template: __webpack_require__(/*! ./admin-navigation.component.html */ "./src/app/pages/admin-navigation/admin-navigation.component.html"),
            styles: [__webpack_require__(/*! ./admin-navigation.component.scss */ "./src/app/pages/admin-navigation/admin-navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminNavigationComponent);
    return AdminNavigationComponent;
}());



/***/ }),

/***/ "./src/app/pages/auction/auction.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/auction/auction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auction works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/auction/auction.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/auction/auction.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1Y3Rpb24vYXVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auction/auction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auction/auction.component.ts ***!
  \****************************************************/
/*! exports provided: AuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionComponent", function() { return AuctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuctionComponent = /** @class */ (function () {
    function AuctionComponent() {
    }
    AuctionComponent.prototype.ngOnInit = function () {
    };
    AuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auction',
            template: __webpack_require__(/*! ./auction.component.html */ "./src/app/pages/auction/auction.component.html"),
            styles: [__webpack_require__(/*! ./auction.component.scss */ "./src/app/pages/auction/auction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuctionComponent);
    return AuctionComponent;
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
/* harmony import */ var _auction_auction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auction/auction.component */ "./src/app/pages/auction/auction.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/pages/admin-home/admin-home.component.ts");
/* harmony import */ var _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team-card/team-card.component */ "./src/app/pages/team-card/team-card.component.ts");
/* harmony import */ var _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-navigation/admin-navigation.component */ "./src/app/pages/admin-navigation/admin-navigation.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./player-card/player-card.component */ "./src/app/pages/player-card/player-card.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./start/start.component */ "./src/app/pages/start/start.component.ts");





















var PAGES = [
    _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"],
    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
    _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
    _player_player_bulk_player_bulk_component__WEBPACK_IMPORTED_MODULE_12__["PlayerBulkComponent"],
    _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_15__["AdminHomeComponent"],
    _start_start_component__WEBPACK_IMPORTED_MODULE_20__["StartComponent"]
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_in_use_material_in_use_module__WEBPACK_IMPORTED_MODULE_4__["MaterialInUseModule"]
            ],
            declarations: [
                PAGES,
                _player_player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_7__["PlayerAeComponent"],
                _team_team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_10__["TeamAeComponent"],
                _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_13__["UploadPhotoComponent"],
                _auction_auction_component__WEBPACK_IMPORTED_MODULE_14__["AuctionComponent"],
                _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_16__["TeamCardComponent"],
                _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_17__["AdminNavigationComponent"],
                _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_19__["PlayerCardComponent"]
            ],
            entryComponents: [_player_player_ae_player_ae_component__WEBPACK_IMPORTED_MODULE_7__["PlayerAeComponent"], _team_team_ae_team_ae_component__WEBPACK_IMPORTED_MODULE_10__["TeamAeComponent"], _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_13__["UploadPhotoComponent"]],
            providers: [_player_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"], _team_team_service__WEBPACK_IMPORTED_MODULE_11__["TeamService"]],
            exports: [PAGES]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/player-card/player-card.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/player-card/player-card.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title\n      ><h2>{{ element.name }}</h2></mat-card-title\n    >\n  </mat-card-header>\n  <img\n    mat-card-image\n    class=\"team-card-img\"\n    [src]=\"element.photoUrl\"\n    alt=\"Team\"\n    onerror=\"if (this.src != '/static/default-player.jpg') this.src = '/static/default-player.jpg';\"\n  />\n\n  <mat-card-content>\n    <h4>{{ types[element.playerTypeId] }}</h4>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/player-card/player-card.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/player-card/player-card.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jYXJkL3BsYXllci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/player-card/player-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/player-card/player-card.component.ts ***!
  \************************************************************/
/*! exports provided: PlayerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCardComponent", function() { return PlayerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player.service */ "./src/app/pages/player/player.service.ts");



var PlayerCardComponent = /** @class */ (function () {
    function PlayerCardComponent(ps) {
        this.ps = ps;
    }
    PlayerCardComponent.prototype.ngOnInit = function () {
        this.types = this.ps.getPlayerTypeText();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerCardComponent.prototype, "element", void 0);
    PlayerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-card',
            template: __webpack_require__(/*! ./player-card.component.html */ "./src/app/pages/player-card/player-card.component.html"),
            styles: [__webpack_require__(/*! ./player-card.component.scss */ "./src/app/pages/player-card/player-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], PlayerCardComponent);
    return PlayerCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/player/player-ae/player-ae.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/player/player-ae/player-ae.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ title }}</h1>\r\n<div mat-dialog-content>\r\n  <form [formGroup]=\"playerForm\" class=\"d-flex\">\r\n    <div class=\"d-flex w-100\">\r\n      <div class=\"m-2 w-50\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Name*\" formControlName=\"name\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Player Type\" formControlName=\"playerTypeId\">\r\n            <mat-option *ngFor=\"let item of playerTypes\" [value]=\"item.value\">\r\n              {{ item.text }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Team\" formControlName=\"teamId\">\r\n            <mat-option\r\n              *ngFor=\"let item of teamNames.options\"\r\n              [value]=\"item.id\"\r\n            >\r\n              {{ item.text }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            placeholder=\"Point\"\r\n            formControlName=\"point\"\r\n            type=\"number\"\r\n          />\r\n        </mat-form-field>\r\n        <div>\r\n          <mat-slide-toggle formControlName=\"sold\">Sold</mat-slide-toggle>\r\n        </div>\r\n        <mat-slide-toggle formControlName=\"isNew\">New Player</mat-slide-toggle>\r\n        <mat-slide-toggle formControlName=\"isCaptain\">Captain</mat-slide-toggle>\r\n      </div>\r\n      <div class=\"m-2 w-50\">\r\n        <div\r\n          formGroupName=\"records\"\r\n          [ngClass]=\"{ 'd-none': playerForm.value.isNew }\"\r\n        >\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Match\"\r\n              formControlName=\"match\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Runs\"\r\n              formControlName=\"runs\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Wickets\"\r\n              formControlName=\"wickets\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Catches\"\r\n              formControlName=\"catches\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    type=\"button\"\r\n    [disabled]=\"!playerForm.valid\"\r\n    (click)=\"onSubmit()\"\r\n  >\r\n    {{ buttonTitle }}\r\n  </button>\r\n  <button mat-button (click)=\"onNoClick()\">Close</button>\r\n</div>\r\n"

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

module.exports = "<app-admin-navigation class=\"d-block\"></app-admin-navigation>\r\n<div *ngIf=\"playerForms && playerForms.length; else generateFormView\">\r\n  <div class=\"clearfix\">\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      (click)=\"onSubmit()\"\r\n      class=\"float-right m-3\"\r\n    >\r\n      Add All\r\n    </button>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let playerForm of playerForms; let i = index\"\r\n    class=\"w-100 border\"\r\n  >\r\n    <form [formGroup]=\"playerForm\" class=\"d-flex\">\r\n      <div class=\"p-4 \">{{ i + 1 }}</div>\r\n      <div class=\"w-100 p-2\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Name*\" formControlName=\"name\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Player Type\" formControlName=\"playerTypeId\">\r\n            <mat-option *ngFor=\"let item of playerTypes\" [value]=\"item.value\">\r\n              {{ item.text }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-slide-toggle formControlName=\"isNew\">New Player</mat-slide-toggle>\r\n        <div\r\n          formGroupName=\"records\"\r\n          [ngClass]=\"{ 'd-none': playerForm.value.isNew }\"\r\n        >\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Match\"\r\n              formControlName=\"match\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Runs\"\r\n              formControlName=\"runs\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Wickets\"\r\n              formControlName=\"wickets\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Catches\"\r\n              formControlName=\"catches\"\r\n              type=\"number\"\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    class=\"float-right m-3\"\r\n  >\r\n    Add All\r\n  </button>\r\n</div>\r\n\r\n<ng-template #generateFormView>\r\n  <div>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        id=\"number-of-player\"\r\n        placeholder=\"Number Of Players\"\r\n        type=\"number\"\r\n        max=\"100\"\r\n        min=\"0\"\r\n      />\r\n    </mat-form-field>\r\n    <button mat-raised-button type=\"button\" (click)=\"generateForms()\">\r\n      Go..\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PlayerBulkComponent = /** @class */ (function () {
    function PlayerBulkComponent(ps, router) {
        this.ps = ps;
        this.router = router;
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
                        if (resData.inserted) {
                            this.router.navigateByUrl('/admin/player');
                        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<app-admin-navigation class=\"d-block\"></app-admin-navigation>\r\n<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n  <mat-icon>add</mat-icon><span>Add</span>\r\n</button>\r\n<!--\r\n{{ dataList | json}} -->\r\n<ng-template #dataComing><mat-spinner></mat-spinner></ng-template>\r\n\r\n<div *ngIf=\"dataList; else dataComing\" class=\"m-2\">\r\n  <table mat-table [dataSource]=\"dataList\" class=\"mat-elevation-z8 p-4\">\r\n    <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Img Column -->\r\n    <ng-container matColumnDef=\"photo\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <img\r\n          (click)=\"uploadPhoto(element)\"\r\n          mat-card-image\r\n          class=\"palayer-table-img\"\r\n          [src]=\"element.photoUrl\"\r\n          alt=\"Team\"\r\n          onerror=\"if (this.src != '/static/default-player.jpg') this.src = '/static/default-player.jpg';\"\r\n        />\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef>Name.</th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\"\r\n        [ngClass]=\"{\r\n          'new-player': element.isNew,\r\n          'is-captain': element.isCaptain\r\n        }\"\r\n      >\r\n        <b class=\"m-3\">{{ element.name }}</b>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- type Column -->\r\n    <ng-container matColumnDef=\"playerType\">\r\n      <th mat-header-cell *matHeaderCellDef>Type.</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <span class=\"p-2\">{{ playerTypesText[element.playerTypeId] }}</span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Records Column -->\r\n    <ng-container matColumnDef=\"records\">\r\n      <th mat-header-cell *matHeaderCellDef>Records.</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <div class=\"d-flex flex-wrap record-td\" *ngIf=\"element.records\">\r\n          <div class=\"w-50\">Match: {{ element.records.match }}</div>\r\n          <div class=\"w-50\">Catches: {{ element.records.catches }}</div>\r\n          <div class=\"w-50\">Runs: {{ element.records.runs }}</div>\r\n          <div class=\"w-50\">Wickets: {{ element.records.wickets }}</div>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Point Column -->\r\n    <ng-container matColumnDef=\"point\">\r\n      <th mat-header-cell *matHeaderCellDef>Point.</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.point }}</td>\r\n    </ng-container>\r\n    <!-- team Column -->\r\n    <ng-container matColumnDef=\"team\">\r\n      <th mat-header-cell *matHeaderCellDef>Team.</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ teamNames[element.teamId] }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- sold Column -->\r\n    <ng-container matColumnDef=\"sold\">\r\n      <th mat-header-cell *matHeaderCellDef>Sold.</th>\r\n      <td\r\n        mat-cell\r\n        *matCellDef=\"let element\"\r\n        class=\"px-2\"\r\n        [ngClass]=\"{ 'sold-td': element.sold }\"\r\n      ></td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edit\">\r\n      <th mat-header-cell *matHeaderCellDef>Edit</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <mat-icon class=\"pointer p-1\" (click)=\"openEdit(element)\"\r\n          >edit</mat-icon\r\n        >\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <th mat-header-cell *matHeaderCellDef>Delete</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <mat-icon class=\"pointer p-1\" (click)=\"deleteById(element._id)\"\r\n          >delete</mat-icon\r\n        >\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n</div>\r\n"

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
        console.log('player');
        this.playerTypesText = ps.getPlayerTypeText();
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
    PlayerService.prototype.getByType = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/player-by-type/' + id).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlayerService.prototype.getPlayerById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/player/' + id).toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PlayerService.prototype.getPointForTeam = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/player').toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sumUpPoint(data)];
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
        var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.playerTypeId, playerTypeId = _c === void 0 ? 1 : _c, _d = _a.teamId, teamId = _d === void 0 ? 0 : _d, _e = _a.isNew, isNew = _e === void 0 ? true : _e, _f = _a.point, point = _f === void 0 ? 0 : _f, _g = _a.sold, sold = _g === void 0 ? false : _g, _h = _a.isCaptain, isCaptain = _h === void 0 ? false : _h, _j = _a.isActive, isActive = _j === void 0 ? true : _j, _k = _a.records, records = _k === void 0 ? null : _k;
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
    PlayerService.prototype.sumUpPoint = function (data) {
        var teamPoints = {};
        var teamId = 0;
        var point = 0;
        data.forEach(function (_a) {
            var teamId = _a.teamId, point = _a.point;
            if (teamId && point) {
                if (teamPoints[teamId]) {
                    teamPoints[teamId] += point;
                }
                else {
                    teamPoints[teamId] = point;
                }
            }
        });
        return teamPoints;
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

/***/ "./src/app/pages/start/start.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/start/start.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-navigation class=\"d-block\"></app-admin-navigation>\n<div *ngIf=\"playerIds; else selectData\">\n  <app-admin-home [playerIds]=\"playerIds\"> </app-admin-home>\n</div>\n<ng-template #selectData\n  ><mat-form-field>\n    <mat-select\n      placeholder=\"Player Type\"\n      (selectionChange)=\"loadPlayers($event)\"\n    >\n      <mat-option [value]=\"0\"> {{ 'Select' }} </mat-option>\n      <mat-option *ngFor=\"let item of playerTypes\" [value]=\"item.value\">\n        {{ item.text }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/start/start.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/start/start.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/start/start.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player.service */ "./src/app/pages/player/player.service.ts");



var StartComponent = /** @class */ (function () {
    function StartComponent(ps) {
        this.ps = ps;
        this.playerIds = null;
        this.playerTypes = this.ps.getPlayerTypes();
    }
    StartComponent.prototype.ngOnInit = function () { };
    StartComponent.prototype.loadPlayers = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ps.getByType(event.source.value)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/pages/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/pages/start/start.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/pages/team-card/team-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/team-card/team-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card\n  class=\"example-card\"\n  [ngClass]=\"{ 'current-team': element.teamId === currentTeamId }\"\n>\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\">{{ element.teamId }}</div>\n    <mat-card-title>{{ element.name }}</mat-card-title>\n  </mat-card-header>\n  <img\n    mat-card-image\n    class=\"team-card-img\"\n    [src]=\"element.photoUrl\"\n    alt=\"Team\"\n    onerror=\"if (this.src != '/static/team-default.jpg') this.src = '/static/team-default.jpg';\"\n  />\n  <mat-card-content>\n    <div class=\"w-100 text-center\"><b>Points</b></div>\n    <div class=\"d-flex flex-wrap all-point\">\n      <div class=\"w-50 pr-2 total-point\">{{ element.totalPoints }}</div>\n      <div class=\"w-50\"><b>Total</b></div>\n      <div class=\"w-50 pr-2 used-point\">\n        {{ teamPoints[element.teamId] || 0 }}\n      </div>\n      <div class=\"w-50\"><b>Used</b></div>\n      <div class=\"w-50 pr-2 rem-point\">\n        {{ element.totalPoints - (teamPoints[element.teamId] || 0) }}\n      </div>\n      <div class=\"w-50\"><b>Remaining</b></div>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/team-card/team-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/team-card/team-card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all-point {\n  font-size: 20px;\n  color: #01579b; }\n\n.total-point,\n.used-point,\n.rem-point {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: right; }\n\n.total-point {\n  color: #e65100; }\n\n.used-point {\n  color: #d32f2f; }\n\n.rem-point {\n  color: #2e7d32; }\n\n.current-team {\n  background-color: yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS1jYXJkL0Q6XFxzcGFjZVxcZ2l0aHViXFxjcmljdGVhbVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcdGVhbS1jYXJkXFx0ZWFtLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLGVBQWMsRUFDZjs7QUFDRDs7O0VBR0UsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UseUJBQXdCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS1jYXJkL3RlYW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGwtcG9pbnQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzAxNTc5YjtcclxufVxyXG4udG90YWwtcG9pbnQsXHJcbi51c2VkLXBvaW50LFxyXG4ucmVtLXBvaW50IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRvdGFsLXBvaW50IHtcclxuICBjb2xvcjogI2U2NTEwMDtcclxufVxyXG5cclxuLnVzZWQtcG9pbnQge1xyXG4gIGNvbG9yOiAjZDMyZjJmO1xyXG59XHJcbi5yZW0tcG9pbnQge1xyXG4gIGNvbG9yOiAjMmU3ZDMyO1xyXG59XHJcblxyXG4uY3VycmVudC10ZWFtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/team-card/team-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/team-card/team-card.component.ts ***!
  \********************************************************/
/*! exports provided: TeamCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCardComponent", function() { return TeamCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamCardComponent = /** @class */ (function () {
    function TeamCardComponent() {
    }
    TeamCardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamCardComponent.prototype, "element", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamCardComponent.prototype, "teamPoints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamCardComponent.prototype, "currentTeamId", void 0);
    TeamCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-card',
            template: __webpack_require__(/*! ./team-card.component.html */ "./src/app/pages/team-card/team-card.component.html"),
            styles: [__webpack_require__(/*! ./team-card.component.scss */ "./src/app/pages/team-card/team-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamCardComponent);
    return TeamCardComponent;
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
                        console.log('data resolved');
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

module.exports = "<app-admin-navigation class=\"d-block\"></app-admin-navigation>\r\n<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n  <mat-icon>add</mat-icon><span>Add</span>\r\n</button>\r\n<!--\r\n{{ dataList | json}} -->\r\n<ng-template #dataComing><mat-spinner></mat-spinner></ng-template>\r\n\r\n<div *ngIf=\"dataList; else dataComing\" class=\"d-flex flex-wrap w-100\">\r\n  <div *ngFor=\"let element of dataList\" class=\"p-4 custom-card\">\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\">\r\n          {{ element.teamId }}\r\n        </div>\r\n        <mat-card-title>{{ element.name }}</mat-card-title>\r\n        <mat-card-subtitle>{{\r\n          element.totalPoints + ' Points'\r\n        }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img\r\n        mat-card-image\r\n        class=\"team-card-img\"\r\n        [src]=\"element.photoUrl\"\r\n        alt=\"Team\"\r\n        onerror=\"if (this.src != '/static/team-default.jpg') this.src = '/static/team-default.jpg';\"\r\n      />\r\n\r\n      <mat-card-content> <p></p> </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button (click)=\"uploadPhoto(element)\">Photo</button>\r\n        <button mat-button (click)=\"openEdit(element)\">Edit</button>\r\n        <button mat-button (click)=\"deleteById(element._id)\">Delete</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

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
                            teamId = resData[index].teamId;
                            this.teamNames[teamId] = resData[index].name;
                            this.teamNames['options'].push({
                                id: teamId,
                                text: resData[index].name
                            });
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