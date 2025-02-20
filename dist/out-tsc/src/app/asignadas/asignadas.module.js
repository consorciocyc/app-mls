import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AsignadasPage } from './asignadas.page';
const routes = [
    {
        path: '',
        component: AsignadasPage
    }
];
let AsignadasPageModule = class AsignadasPageModule {
};
AsignadasPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AsignadasPage]
    })
], AsignadasPageModule);
export { AsignadasPageModule };
//# sourceMappingURL=asignadas.module.js.map