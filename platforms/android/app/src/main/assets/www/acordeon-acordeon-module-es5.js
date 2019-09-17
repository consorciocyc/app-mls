(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acordeon-acordeon-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/acordeon/acordeon.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acordeon/acordeon.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n        </ion-buttons>\n        <ion-title text-center class=\"center\">Servicio</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class=\"accordion-list\" no-padding>\n        <section class=\"acc-section\" (click)=\"setStep('expanded1')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/pngocean.com-id-wflsf.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Servicio</p>\n                <p class=\"subtitle\">Información general de la orden</p>\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded1')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded1')}\">\n            <div [hidden]=\"div_hidden\">\n                <mat-form-field class=\"example-full-width\" style=\"margin-top: 5px;\">\n                    <input matInput placeholder=\"Servicio Número\" [(ngModel)]=\"number_service\" readonly>\n                </mat-form-field>\n\n\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Prioridad</ion-label>\n                    <ion-select [(ngModel)]=\"priority\">\n                        <ion-select-option [value]=1>Alta</ion-select-option>\n                        <ion-select-option [value]=2>Media</ion-select-option>\n                        <ion-select-option [value]=3>Baja</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Sede</ion-label>\n                    <ion-select>\n                        <ion-select-option value=\"1\">Alta</ion-select-option>\n                        <ion-select-option value=\"2\">Media</ion-select-option>\n                        <ion-select-option value=\"3\">Baja</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Programación</ion-label>\n                    <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"programming\"></ion-datetime>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Franja de Atención</ion-label>\n                    <ion-select [(ngModel)]=\"Attention\">\n                        <ion-select-option [value]=1>Manaña</ion-select-option>\n                        <ion-select-option [value]=2>Tarde</ion-select-option>\n\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Tipos de Gas</ion-label>\n                    <ion-select>\n                        <ion-select-option value=\"1\">Natural</ion-select-option>\n                        <ion-select-option value=\"2\">GLP</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Tipos de Servicio</ion-label>\n                    <ion-select [(ngModel)]=\"type_service\">\n                        <ion-select-option [value]=1>Residencial</ion-select-option>\n                        <ion-select-option [value]=2>Comercial</ion-select-option>\n                        <ion-select-option [value]=3>Industrial</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"example-full-width\">Tipo de Red</ion-label>\n                    <ion-select [(ngModel)]=\"type_network\">\n                        <ion-select-option [value]=1>Nueva</ion-select-option>\n                        <ion-select-option [value]=2>Existente</ion-select-option>\n                        <ion-select-option [value]=3>Puesta en Servicio</ion-select-option>\n                        <ion-select-option [value]=4>Linea Matrix Existente</ion-select-option>\n                        <ion-select-option [value]=5>Linea Matrix Nueva</ion-select-option>\n                        <ion-select-option [value]=6>Reforma</ion-select-option>\n                        <ion-select-option [value]=7>No Usuario</ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n\n\n\n            </div>\n\n            <ion-list>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{number_service}}</h2>\n                        </ion-text>\n                        <p>Servicio Número</p>\n                    </ion-label>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{name_priority}}</h2>\n                        </ion-text>\n                        <p>Prioridad</p>\n                    </ion-label>\n                    <ion-icon class=\"big\" src=\"assets/iconos/148882.svg\" item-end></ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{contract_name}}</h2>\n                        </ion-text>\n                        <p>Sede</p>\n                    </ion-label>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{programming}}</h2>\n                        </ion-text>\n                        <p>Programación</p>\n                    </ion-label>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{name_gas}}</h2>\n                        </ion-text>\n                        <p>Tipo de Gas</p>\n                    </ion-label>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{name_type}}</h2>\n                        </ion-text>\n                        <p>Tipo de Servicio</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{name_network}}</h2>\n                        </ion-text>\n                        <p>Tipo de Red</p>\n                    </ion-label>\n                </ion-item>\n\n            </ion-list>\n        </section>\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded2')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_add_location_black_48dp.png\" alt=\"\">\n\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Ubicación</p>\n                <p class=\"subtitle\">Información general de la Ubicación</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded2')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded2')}\">\n            <ion-list>\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{address}}</h2>\n                        </ion-text>\n                        <p>Dirección</p>\n                    </ion-label>\n                    <ion-icon class=\"big\" src=\"assets/iconos/854878.svg\" item-end (click)=\"send_address()\"></ion-icon>\n\n                </ion-item>\n            </ion-list>\n        </section>\n        <section class=\"acc-section\" (click)=\"setStep('expanded3')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_person_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\">\n                <p class=\"title\">Cliente</p>\n                <p class=\"subtitle\">Información del Cliente</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded3')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded3')}\">\n            <ion-list>\n\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{client}}</h2>\n                        </ion-text>\n                        <p>Nombre del Cliente</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{identifacation}}</h2>\n                        </ion-text>\n                        <p>Identificación del Cliente</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{phone}}</h2>\n                        </ion-text>\n                        <p>Teléfono de Contacto</p>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n\n\n        </section>\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded4')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_build_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\" (click)=\"presentModal()\">\n                <p class=\"title\">Material</p>\n                <p class=\"subtitle\">Información del Material</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded4')}}\" color=\"medium\" (click)=\"presentModal()\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded4')}\">\n\n            <!-- Sliding item with text options on both sides -->\n            <ion-item-sliding>\n                <ion-item-options side=\"start\">\n                    <ion-item-option (click)=\"edit_material()\">\n                        <ion-icon src=\"assets/iconos/61456.svg\"></ion-icon>\n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"share(item)\">\n                        <ion-icon src=\"assets/iconos/64022.svg\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n\n                <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{name_material}}</h2>\n                        </ion-text>\n                        <p>{{name_state_material}}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-sliding>\n\n\n\n        </section>\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded5')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/1043ea6260755f02bafd6d2fa98072ec-icono-de-casco-de-construccion.png\" alt=\"\">\n            </div>\n            <div class=\"info\" (click)=\"ModalBuilder()\">\n                <p class=\"title\">Constructor</p>\n                <p class=\"subtitle\">Información del Constructor</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded5')}}\" color=\"medium\" (click)=\"ModalBuilder()\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded5')}\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\">\n                    <ion-item-option (click)=\"edit_builder()\">\n                        <ion-icon src=\"assets/iconos/61456.svg\"></ion-icon>\n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"share(item)\">\n                        <ion-icon src=\"assets/iconos/64022.svg\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n\n                <ion-item lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-text>\n                            <h2>{{name_builder}}</h2>\n                        </ion-text>\n                        <p>{{state_builder}}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-sliding>\n\n        </section>\n\n\n        <section class=\"acc-section\" (click)=\"setStep('expanded6')\">\n            <div class=\"img\">\n                <img src=\"../../assets/img/twotone_insert_photo_black_48dp.png\" alt=\"\">\n            </div>\n            <div class=\"info\" (click)=\"ModalImage()\">\n                <p class=\"title\">Fotografias</p>\n                <p class=\"subtitle\">Fotografias del servicio</p>\n\n            </div>\n            <div class=\"icon\">\n                <ion-icon name=\"{{getIconName('expanded6')}}\" color=\"medium\"></ion-icon>\n            </div>\n\n        </section>\n        <section class=\"acc-content\" [ngClass]=\"{'expandable':getNameValid('expanded6')}\">\n            <ion-item detail *ngFor=\"let photos_service of photos_services; let i = i; index\"\n                (click)=\"photos_add(photos_service)\">\n                <ion-label>\n                    {{photos_service.name_photo}}\n                </ion-label>\n            </ion-item>\n        </section>\n\n\n\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/acordeon/acordeon.module.ts":
/*!*********************************************!*\
  !*** ./src/app/acordeon/acordeon.module.ts ***!
  \*********************************************/
/*! exports provided: AcordeonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordeonPageModule", function() { return AcordeonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acordeon_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acordeon.page */ "./src/app/acordeon/acordeon.page.ts");








var routes = [
    {
        path: '',
        component: _acordeon_page__WEBPACK_IMPORTED_MODULE_7__["AcordeonPage"]
    }
];
var AcordeonPageModule = /** @class */ (function () {
    function AcordeonPageModule() {
    }
    AcordeonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_acordeon_page__WEBPACK_IMPORTED_MODULE_7__["AcordeonPage"]]
        })
    ], AcordeonPageModule);
    return AcordeonPageModule;
}());



/***/ }),

/***/ "./src/app/acordeon/acordeon.page.scss":
/*!*********************************************!*\
  !*** ./src/app/acordeon/acordeon.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acc-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: thin solid #c1c1c1;\n  background: #eaeaea;\n  padding: 0.7em;\n}\n.acc-section:first-child {\n  border-top: none;\n}\n.acc-section:last-child {\n  border-bottom: thin solid #e5e5e5;\n}\n.acc-section .img {\n  width: 35px;\n  margin-right: 0.5em;\n}\n.acc-section .img img {\n  width: 100%;\n}\n.acc-section .info {\n  width: calc(100% - 60px);\n}\n.acc-section .info > * {\n  margin: 0;\n}\n.acc-section .info .title {\n  font-size: 1em;\n  color: #323133;\n}\n.acc-section .info .subtitle {\n  font-size: 0.9em;\n  color: #8a888a;\n}\n.acc-section .info .text {\n  font-size: 0.8em;\n  color: #f3b236;\n}\n.acc-section .icon {\n  width: 20px;\n}\n.acc-content {\n  height: 0;\n  overflow: hidden;\n  padding: 0 0.5em;\n  -webkit-transition: max-height 0.4s ease-in-out;\n  transition: max-height 0.4s ease-in-out;\n}\n.acc-content.expandable {\n  -webkit-transition: max-height 0.4s ease-in-out;\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n@-webkit-keyframes delay-overflow {\n  from {\n    overflow: auto;\n  }\n}\n@keyframes delay-overflow {\n  from {\n    overflow: auto;\n  }\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n  font-size: 15px;\n  color: #8a888a;\n}\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n.acc-content {\n  padding: 0em !important;\n}\nion-icon.big {\n  width: 52px !important;\n  height: 52px !important;\n}\nion-icon.big1 {\n  width: 38px !important;\n  height: 38px !important;\n  margin-right: 10px !important;\n}\nion-icon.big2 {\n  width: 52px !important;\n  height: 52px !important;\n  margin-right: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvYXBwLW1scy9zcmMvYXBwL2Fjb3JkZW9uL2Fjb3JkZW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNvcmRlb24vYWNvcmRlb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGlDQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0FDRE47QURLRTtFQUNFLHdCQUFBO0FDSEo7QURLSTtFQUNFLFNBQUE7QUNITjtBRE1JO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDTE47QURRSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ05OO0FEVUU7RUFDRSxXQUFBO0FDUko7QURZQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtBQ1RGO0FEV0U7RUFDRSwrQ0FBQTtFQUFBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVEo7QURhQTtFQUNFO0lBQ0UsY0FBQTtFQ1ZGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsY0FBQTtFQ1ZGO0FBQ0Y7QURZQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZGO0FEY0E7RUFFRywyQkFBQTtFQUNBLDhCQUFBO0FDWkg7QURlQTtFQUNFLHVCQUFBO0FDWkY7QURnQkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDYko7QURlRTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ2JOO0FEZUk7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNiTiIsImZpbGUiOiJzcmMvYXBwL2Fjb3JkZW9uL2Fjb3JkZW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2Mtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IHRoaW4gc29saWQgI2MxYzFjMTtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgcGFkZGluZzogLjdlbTtcblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlNWU1ZTU7XG4gIH1cblxuICAmIC5pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcblxuICAgICYgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICYgLmluZm8ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcblxuICAgICYgPiAqIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGNvbG9yOiAjMzIzMTMzO1xuICAgIH1cblxuICAgICYgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgIGNvbG9yOiAjOGE4ODhhO1xuICAgIH1cblxuICAgICYgLnRleHQge1xuICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgY29sb3I6ICNmM2IyMzY7XG4gICAgfVxuICB9XG5cbiAgJiAuaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbn1cblxuLmFjYy1jb250ZW50IHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIC41ZW07XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcblxuICAmLmV4cGFuZGFibGUge1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRlbGF5LW92ZXJmbG93IHtcbiAgZnJvbSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOGE4ODhhO1xuICAvL21hcmdpbi1ib3R0b206IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgXG4gICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICBwYWRkaW5nLWJvdHRvbTogMHB4IWltcG9ydGFudDtcbiAgXG59XG4uYWNjLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwZW0haW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gICYuYmlnIHtcbiAgICB3aWR0aDogNTJweCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MnB4IWltcG9ydGFudDtcbiAgfVxuICAmLmJpZzEge1xuICAgICAgd2lkdGg6IDM4cHghaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAzOHB4IWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYuYmlnMiB7XG4gICAgICB3aWR0aDogNTJweCFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDUycHghaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcbiAgIH1cbn0iLCIuYWNjLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiB0aGluIHNvbGlkICNjMWMxYzE7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIHBhZGRpbmc6IDAuN2VtO1xufVxuLmFjYy1zZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5hY2Mtc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjZTVlNWU1O1xufVxuLmFjYy1zZWN0aW9uIC5pbWcge1xuICB3aWR0aDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbi5hY2Mtc2VjdGlvbiAuaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjYy1zZWN0aW9uIC5pbmZvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuLmFjYy1zZWN0aW9uIC5pbmZvID4gKiB7XG4gIG1hcmdpbjogMDtcbn1cbi5hY2Mtc2VjdGlvbiAuaW5mbyAudGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMzMjMxMzM7XG59XG4uYWNjLXNlY3Rpb24gLmluZm8gLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICM4YTg4OGE7XG59XG4uYWNjLXNlY3Rpb24gLmluZm8gLnRleHQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2YzYjIzNjtcbn1cbi5hY2Mtc2VjdGlvbiAuaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uYWNjLWNvbnRlbnQge1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbn1cbi5hY2MtY29udGVudC5leHBhbmRhYmxlIHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBrZXlmcmFtZXMgZGVsYXktb3ZlcmZsb3cge1xuICBmcm9tIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4YTg4OGE7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY2MtY29udGVudCB7XG4gIHBhZGRpbmc6IDBlbSAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbi5iaWcge1xuICB3aWR0aDogNTJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbn1cbmlvbi1pY29uLmJpZzEge1xuICB3aWR0aDogMzhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taWNvbi5iaWcyIHtcbiAgd2lkdGg6IDUycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/acordeon/acordeon.page.ts":
/*!*******************************************!*\
  !*** ./src/app/acordeon/acordeon.page.ts ***!
  \*******************************************/
/*! exports provided: AcordeonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordeonPage", function() { return AcordeonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _Services_login_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/login-service.service */ "./src/app/Services/login-service.service.ts");
/* harmony import */ var _materials_materials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../materials/materials.page */ "./src/app/materials/materials.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _builder_builder_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../builder/builder.page */ "./src/app/builder/builder.page.ts");
/* harmony import */ var _images_images_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/images.page */ "./src/app/images/images.page.ts");










var AcordeonPage = /** @class */ (function () {
    function AcordeonPage(route, router, launchNavigator, geolocation, loginServiceService, modalController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.loginServiceService = loginServiceService;
        this.modalController = modalController;
        this.step = { sectionName: null };
        this.div_hidden = true;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras;
                console.log(_this.data);
                _this.name_priority = _this.data.name_priority;
                _this.programming = _this.data.date_programming;
                _this.Attention = _this.data.Attention;
                _this.name_gas = _this.data.name_gas;
                _this.name_type = _this.data.name_type;
                _this.name_network = _this.data.name_network;
                _this.contract_name = _this.data.contract_name;
                _this.client = _this.data.client;
                _this.identifacation = _this.data.identifacation;
                _this.phone = _this.data.phone;
                //                 this.gas_type = this.data.
                _this.type_service = _this.data.type_service_idtype_service;
                _this.type_network = _this.data.type_network_idtype_network;
                _this.address = _this.data.address;
                _this.number_service = _this.data.idodi;
            }
        });
        this.coords();
    }
    AcordeonPage.prototype.ngOnInit = function () {
    };
    AcordeonPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.idmaterials == undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _materials_materials_page__WEBPACK_IMPORTED_MODULE_6__["MaterialsPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                console.log(detail.data.data);
                                _this.name_material = detail.data.data.name_materials;
                                _this.name_state_material = detail.data.data.name_state;
                                _this.idmaterials = detail.data.data.idmaterials;
                                console.log(_this.idmaterials);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AcordeonPage.prototype.edit_material = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _materials_materials_page__WEBPACK_IMPORTED_MODULE_6__["MaterialsPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                _this.name_material = detail.data.data.name_materials;
                                _this.name_state_material = detail.data.data.name_state;
                                _this.idmaterials = detail.data.data.idmaterials;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcordeonPage.prototype.ModalBuilder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.idbuilder == undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _builder_builder_page__WEBPACK_IMPORTED_MODULE_8__["BuilderPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                _this.idbuilder = detail.data.data.idbuilder;
                                _this.name_builder = detail.data.data.name_builder;
                                _this.state_builder = detail.data.data.name_state;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AcordeonPage.prototype.ModalImage = function (photos_service) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _images_images_page__WEBPACK_IMPORTED_MODULE_9__["ImagesPage"],
                            componentProps: {
                                'number_service': this.number_service,
                                'type_network': this.type_network,
                                'data': this.data,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            // if (detail !== null) {
                            //     this.idbuilder = detail.data.data.idbuilder
                            //     this.name_builder = detail.data.data.name_builder
                            //     this.state_builder = detail.data.data.name_state
                            // }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcordeonPage.prototype.edit_builder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _builder_builder_page__WEBPACK_IMPORTED_MODULE_8__["BuilderPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                _this.idbuilder = detail.data.data.idbuilder;
                                _this.name_builder = detail.data.data.name_builder;
                                _this.state_builder = detail.data.data.name_state;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcordeonPage.prototype.getNameValid = function (sectionName) {
        return this.step.sectionName === sectionName;
    };
    AcordeonPage.prototype.setStep = function (sectionName) {
        this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;
    };
    AcordeonPage.prototype.getIconName = function (sectionName) {
        return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
    };
    AcordeonPage.prototype.back = function () {
        this.router.navigateByUrl('menu/menu/asignadas');
    };
    AcordeonPage.prototype.coords = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.addrees_ini = resp.coords.latitude + "," + resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    AcordeonPage.prototype.send_address = function () {
        var options = {
            start: this.addrees_ini,
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(this.address, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    AcordeonPage.prototype.photo_service = function () {
        var _this = this;
        var params = {
            type_network: this.type_network
        };
        this.loginServiceService.photos_service(params).subscribe(function (result) {
            _this.photos_services = result.response;
        }, function (error) {
        });
    };
    AcordeonPage.prototype.photos_add = function (photos_service) {
        var navigationExtras = {
            queryParams: {
                photos_service: photos_service,
                data: this.data
            }
        };
        this.router.navigate(['menu/menu/fotografias'], navigationExtras);
    };
    AcordeonPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__["LaunchNavigator"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _Services_login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
    ]; };
    AcordeonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acordeon',
            template: __webpack_require__(/*! raw-loader!./acordeon.page.html */ "./node_modules/raw-loader/index.js!./src/app/acordeon/acordeon.page.html"),
            styles: [__webpack_require__(/*! ./acordeon.page.scss */ "./src/app/acordeon/acordeon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__["LaunchNavigator"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _Services_login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], AcordeonPage);
    return AcordeonPage;
}());



/***/ })

}]);
//# sourceMappingURL=acordeon-acordeon-module-es5.js.map