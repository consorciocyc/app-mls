import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';

import { AcordeonPage } from './acordeon.page';
import { MaterialsPageModule } from '../materials/materials.module';
const routes: Routes = [
  {
    path: '',
    component: AcordeonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    IonicModule,
    MaterialsPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcordeonPage]
})
export class AcordeonPageModule { }
