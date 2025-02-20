import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app-material.module";
import { IonicModule } from '@ionic/angular';

import { NewAcountPage } from './new-acount.page';

const routes: Routes = [
  {
    path: '',
    component: NewAcountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewAcountPage]
})
export class NewAcountPageModule { }
