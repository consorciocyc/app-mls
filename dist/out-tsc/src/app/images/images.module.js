import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ImagesPage } from './images.page';
const routes = [
    {
        path: '',
        component: ImagesPage
    }
];
let ImagesPageModule = class ImagesPageModule {
};
ImagesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ImagesPage]
    })
], ImagesPageModule);
export { ImagesPageModule };
//# sourceMappingURL=images.module.js.map