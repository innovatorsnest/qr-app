(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subcategory-subcategory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcategory/subcategory.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcategory/subcategory.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <app-header [title]=\"'Sub Category'\"></app-header>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide class=\"slide\">\n      <span class=\"banner\">\n      </span>\n      <img src=\"../../assets/images/homes/home.jpg\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row>\n    <ng-container *ngIf=\"subCategories?.length > 0; else noData\">\n      <ion-col class=\"4\" size=\"4\" *ngFor=\"let subcategory of subCategories\">\n        <ion-card class=\"card\" (click)=\"goToProduct(subcategory)\">\n          <span class=\"card-banner\">\n            {{\n            subcategory.name\n          }}\n          </span>\n          <img class=\"card-image\" *ngIf=\"subcategory.images.length > 0; else dummyImage\"\n            src=\"{{subcategory.images[0]}}\">\n          <ng-template #dummyImage>\n            <img class=\"card-image\" src=\"../../assets/images/homes/dish.jpg\">\n          </ng-template>\n        </ion-card>\n      </ion-col>\n    </ng-container>\n    <ng-template #noData>\n      <ion-list style=\"    text-align: center;\n    width: 100%;    margin-top: 50px;\n    margin-bottom: 50px;\">\n        <span>No Subcategy</span>\n      </ion-list>\n    </ng-template>\n\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/subcategory/subcategory-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/subcategory/subcategory-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SubcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageRoutingModule", function() { return SubcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/subcategory/subcategory.page.ts");




const routes = [
    {
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoryPage"]
    }
];
let SubcategoryPageRoutingModule = class SubcategoryPageRoutingModule {
};
SubcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubcategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/subcategory/subcategory.module.ts":
/*!***************************************************!*\
  !*** ./src/app/subcategory/subcategory.module.ts ***!
  \***************************************************/
/*! exports provided: SubcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPageModule", function() { return SubcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/header/header.module */ "./src/app/shared/header/header.module.ts");
/* harmony import */ var _services_observable_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/observable.services */ "./src/app/services/observable.services.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcategory-routing.module */ "./src/app/subcategory/subcategory-routing.module.ts");
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subcategory.page */ "./src/app/subcategory/subcategory.page.ts");










let SubcategoryPageModule = class SubcategoryPageModule {
};
SubcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_8__["SubcategoryPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _shared_header_header_module__WEBPACK_IMPORTED_MODULE_1__["HeaderPageModule"]
        ],
        declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_9__["SubcategoryPage"]],
        providers: [_services_observable_services__WEBPACK_IMPORTED_MODULE_2__["ObservablesService"]]
    })
], SubcategoryPageModule);



/***/ }),

/***/ "./src/app/subcategory/subcategory.page.scss":
/*!***************************************************!*\
  !*** ./src/app/subcategory/subcategory.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide {\n  width: 550px !important;\n}\n\n.cart {\n  font-size: 22px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.card {\n  height: 150px;\n}\n\n.card-image {\n  height: 100%;\n  width: 100%;\n}\n\n.card-banner {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  background-color: #3f37376b;\n  color: #fff;\n  bottom: 0px;\n  text-transform: capitalize;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY2F0ZWdvcnkvc3ViY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUlFO0VBQ0Usa0JBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9zdWJjYXRlZ29yeS9zdWJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUge1xuICAgIHdpZHRoOiA1NTBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FydCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAuY2FyZC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAuY2FyZC1iYW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmMzczNzZiO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/subcategory/subcategory.page.ts":
/*!*************************************************!*\
  !*** ./src/app/subcategory/subcategory.page.ts ***!
  \*************************************************/
/*! exports provided: SubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function() { return SubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");





let SubcategoryPage = class SubcategoryPage {
    constructor(router, route, dataService, helperService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.helperService = helperService;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.route.params.subscribe((params) => {
            console.log('params', params);
            this.getSubCategories(params.id);
        });
    }
    ngOnInit() {
    }
    getSubCategories(categoryId) {
        this.helperService.presentLoader('Fetching Subcategories');
        this.dataService.getAllSubCategoriesOfCategory(categoryId)
            .subscribe((response) => {
            console.log('response while getting the subcategories', response);
            this.subCategories = response["data"]["subCategories"];
        }, error => {
            console.log('error while getting the subcategories', error);
        });
    }
    goToProduct(subCategory) {
        this.router.navigate([`products/${subCategory.id}`]);
    }
};
SubcategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }
];
SubcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subcategory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subcategory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcategory/subcategory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/subcategory/subcategory.page.scss")).default]
    })
], SubcategoryPage);



/***/ })

}]);
//# sourceMappingURL=subcategory-subcategory-module-es2015.js.map