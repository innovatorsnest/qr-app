(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbar\">\n    <ion-title>Order Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n  <ion-content fullscreen=\"true\">\n\n    <ion-list *ngFor=\"let order of orders\">\n      <ion-card>\n        <ion-item>\n          <ion-row>\n            <ion-col size=\"6\">\n             {{order.item.name}} \n            </ion-col>\n            <ion-col size=\"3\">\n             x{{order.count}}\n            </ion-col>\n            <ion-col size=\"3\">\n             {{order.item.currency}}{{order.item.price}}\n            </ion-col>\n          </ion-row>\n\n\n      </ion-item>         \n      </ion-card>\n \n    </ion-list>\n\n    <section class=\"order\" *ngIf=\"orderSummary.items.length > 0; else noOrders\">\n      <h1 class=\"order__title no-margin\">Order summary</h1>\n      <svg id=\"svg-summary\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n      <path d=\"M7,8V6H5V19H19V6H17V8H7M9,4A3,3 0 0,1 12,1A3,3 0 0,1 15,4H19A2,2 0 0,1 21,6V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6A2,2 0 0,1 5,4H9M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3Z\"></path>\n    </svg>\n      <section class=\"order__sub-sections order__subtotal clearfix \">\n        <h2 class=\"order__subtitles no-margin\">Subtotal</h2>\n        <table id=\"values\" class=\"order__subtotal__table\">\n          <tbody>\n            <tr>\n              <td class=\"first-row\">Product (<a href=\"#\">{{orderSummary.items.length}} item</a>)</td>\n              <td class=\"first-row\" align=\"right\">{{orderSummary.currency}}{{orderSummary.amount}}</td>\n            </tr>\n\n          </tbody>\n        \n        </table>\n      </section>\n    </section>\n    <ng-template #noOrders>\n        <section class=\"order\">\n          No Orders\n        </section>\n    </ng-template>\n\n    <ion-button class=\"order-place-button\" expand=\"block\" (click)=\"placeOrder()\">Place Order</ion-button>\n  \n  </ion-content>";
      /***/
    },

    /***/
    "./src/app/orders/orders-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/orders/orders-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/orders/orders.page.ts");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/orders/orders.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/orders/orders.module.ts ***!
      \*****************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_observable_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/observable.services */
      "./src/app/services/observable.services.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/orders/orders.page.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_7__["OrdersPage"]],
        providers: [_services_observable_services__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "./src/app/orders/orders.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/orders/orders.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Work+Sans\");\n.slide {\n  width: 550px !important;\n}\n.cart {\n  font-size: 22px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.card {\n  height: 150px;\n}\n.card-image {\n  height: 100%;\n  width: 100%;\n}\n.card-banner {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  background-color: #3f37376b;\n  color: #fff;\n  bottom: 0px;\n  text-transform: capitalize;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\nion-toolbar {\n  --background: #1a173a;\n  --ion-color-base: #fff;\n}\nion-row {\n  width: 100%;\n}\n.order-place-button {\n  --background: #6b66a2;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n.no-margin {\n  margin: 0;\n}\na {\n  color: inherit;\n}\n.clearfix,\n.clearfix:before {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n.order {\n  background-color: #f4f4f4;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 14px;\n  padding: 15px;\n}\n.order .order__title {\n  float: left;\n  margin-bottom: 20px;\n}\n.order #svg-summary {\n  float: right;\n}\n.order .order__subtitles {\n  margin-bottom: 10px;\n  line-height: 1em;\n}\n.order__sub-sections {\n  margin-bottom: 20px;\n  margin-top: 20px;\n  width: 100%;\n}\n.order__subtotal__table {\n  border-spacing: 0;\n  width: 320px;\n}\n.order__subtotal__table tbody {\n  background-color: #fff;\n  border: 1px solid #000;\n}\n.order__subtotal__table tbody tr:first-child td {\n  border-top: 1px solid #000;\n}\n.order__subtotal__table tbody tr td {\n  padding: 5px;\n}\n.order__subtotal__table tbody .values--discounts {\n  color: #6fa450;\n  font-weight: bold;\n}\n.order__subtotal__table tfoot tr:first-child td {\n  border-top: 1px solid #000;\n  padding: 5px 0;\n}\n.order__subtotal__table tfoot .values--total-text,\n.order__subtotal__table tfoot .values--total-price {\n  font-size: 1.857rem;\n  font-weight: bolder;\n  white-space: pre;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RVLGdFQUFBO0FBaERWO0VBQ0ksdUJBQUE7QUFFSjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtBQUVKO0FBQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUdKO0FBQUU7RUFDRSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUdKO0FBQUU7RUFDRSxXQUFBO0FBR0o7QUFBRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUdKO0FBZ0JBO0VBQWEsU0FBQTtBQVpiO0FBY0E7RUFBSSxjQUFBO0FBVko7QUFhQTs7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFWRjtBQWFBO0VBQ0UseUJBdEJXO0VBdUJYLG9DQUFBO0VBQ0EsZUFsQmU7RUFtQmYsYUFBQTtBQVZGO0FBaUJFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkU7RUFDRSxZQUFBO0FBaEJKO0FBbUJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW9CRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbEJKO0FBdUJJO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0FBdEJOO0FBd0JNO0VBQ0Usc0JBMURBO0VBMkRBLHNCQUFBO0FBdEJSO0FBd0JVO0VBQ0UsMEJBQUE7QUF0Qlo7QUEwQlU7RUFDRSxZQUFBO0FBeEJaO0FBMkJRO0VBQ0UsY0ExRUY7RUEyRUUsaUJBQUE7QUF6QlY7QUE4QlU7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUE1Qlo7QUErQlE7O0VBRUUsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBN0JWIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUge1xuICAgIHdpZHRoOiA1NTBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FydCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAuY2FyZC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuY2FyZC1iYW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmMzczNzZiO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWExNzNhO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmY7XG4gIH1cblxuICBpb24tcm93ICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAub3JkZXItcGxhY2UtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICM2YjY2YTI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gc3VtbWFyeSBcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2FucycpO1xuXG4vLyBjb2xvcnNcbiRibGFjazogIzAwMDtcbiRncmVlbjogIzZmYTQ1MDtcbiRsaWdodC1ncmV5OiAjZjRmNGY0O1xuJGdyZXk6ICNjY2M7XG4kd2hpdGU6ICNmZmY7XG4keWVsbG93OiAjZmQwO1xuXG4vLyB0eXBvZ3JhcGh5XG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XG5cbi8vIHJlc2V0XG4ubm8tbWFyZ2luIHsgbWFyZ2luOiAwOyB9XG5cbmEgeyBjb2xvcjogaW5oZXJpdDsgfVxuXG4vLyBGSVhcbi5jbGVhcmZpeCxcbi5jbGVhcmZpeDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ub3JkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgcGFkZGluZzogMTVweDtcbiAgXG4gICoge1xuICAgIC8vIG91dGxpbmU6IDFweCBkb3R0ZWQgb3JhbmdlcmVkO1xuICB9XG4gIFxuICAvLyBIRUFEXG4gIC5vcmRlcl9fdGl0bGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gICNzdmctc3VtbWFyeSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAub3JkZXJfX3N1YnRpdGxlcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIFxuICAmX19zdWItc2VjdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgJl9fc3VidG90YWwge1xuICAgIC8vIG91dGxpbmU6IDFweCBkb3R0ZWQgb3JhbmdlcmVkO1xuICAgICZfX3RhYmxlIHtcbiAgICAgIC8vIG91dGxpbmU6IDFweCBkb3R0ZWQgb3JhbmdlcmVkO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICB3aWR0aDogMzIwcHg7XG4gICAgICBcbiAgICAgIHRib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ciB7XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudmFsdWVzLS1kaXNjb3VudHMge1xuICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRmb290IHtcbiAgICAgICAgdHI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnZhbHVlcy0tdG90YWwtdGV4dCxcbiAgICAgICAgLnZhbHVlcy0tdG90YWwtcHJpY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44NTdyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2FkZHJlc3Mge1xuICAgIFxuICB9XG4gIFxuLy8gICAmX19zdWItc2VjdGlvbnMge1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICB3aWR0aDogMTAwJTtcbiAgICBcbi8vICAgICB0YWJsZSB7XG4vLyAgICAgICBib3JkZXItc3BhY2luZzogMDtcbi8vICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgIFxuLy8gICAgICAgdGJvZHkge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4vLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibGFjaztcbi8vICAgICAgICAgdHI6Zmlyc3QtY2hpbGQge1xuLy8gICAgICAgICAgIHRkIHtcbi8vICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmxhY2s7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRyIHtcbi8vICAgICAgICAgICB0ZCB7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5kaXNjb3VudC10ZXh0IHtcbi8vICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xuLy8gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICB0Zm9vdCB7XG4vLyAgICAgICAgIHRyOmZpcnN0LWNoaWxkIHtcbi8vICAgICAgICAgICB0ZCB7XG4vLyAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJsYWNrO1xuLy8gICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC52YWx1ZXMtLXRvdGFsLXRleHQsXG4vLyAgICAgICAgICAgLnZhbHVlcy0tdG90YWwtcHJpY2Uge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxLjg1N3JlbTtcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4vLyAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICAub3JkZXItLWFkZHJlc3Mge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleTtcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGdyZXk7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4vLyAgIH1cbi8vICAgLm9yZGVyLS1zbXMge1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgXG4vLyAgICAgLnNtcy0taW5mbyxcbi8vICAgICAuc21zLS1zdmcge1xuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbi8vICAgICB9XG4vLyAgICAgLnNtcy0tc3ZnIHtcbi8vICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbi8vICAgICAgIHN2ZyB7XG4vLyAgICAgICAgIGZpbGw6ICRncmVlbjtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgYnV0dG9uIHtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XG4vLyAgICAgICBib3JkZXI6IDBweCBub25lO1xuLy8gICAgICAgY2xlYXI6IGJvdGg7XG4vLyAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIH1cbi8vICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/orders/orders.page.ts":
    /*!***************************************!*\
      !*** ./src/app/orders/orders.page.ts ***!
      \***************************************/

    /*! exports provided: OrdersPage */

    /***/
    function srcAppOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _services_observable_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/observable.services */
      "./src/app/services/observable.services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(route, observableService, dataService, helperService, router) {
          _classCallCheck(this, OrdersPage);

          this.route = route;
          this.observableService = observableService;
          this.dataService = dataService;
          this.helperService = helperService;
          this.router = router;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orders = JSON.parse(localStorage.getItem('orders'));
            console.log('orders', this.orders);
            console.log(this.orders);
            var payload = {
              items: [],
              currency: '$',
              amount: 0
            };
            this.orders.forEach(function (order, index) {
              payload.items.push(order.item);
              payload.amount = order.count * order.item.price;
            });
            this.orderSummary = payload;
            console.log('payload', payload);
          }
        }, {
          key: "placeOrder",
          value: function placeOrder() {
            this.customOrderPlaced(); // console.log('order summary', this.orderSummary);
            // this.dataService.createOrder(this.orderSummary).subscribe((response) => {
            //   this.helperService.presentToast('Order Places Successfully');
            //   localStorage.setItem('orders',JSON.stringify([]));
            //   this.router.navigate(['home']);
            // }, error => {
            //   this.helperService.presentToast('Error while Placing Order');
            // })
          }
        }, {
          key: "customOrderPlaced",
          value: function customOrderPlaced() {
            this.helperService.presentToast('Order Places Successfully');
            localStorage.setItem('orders', JSON.stringify([]));
            this.router.navigate(['home']);
          }
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_observable_services__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders.page.scss */
        "./src/app/orders/orders.page.scss"))["default"]]
      })], OrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=orders-orders-module-es5.js.map