import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioPageModule' },  { path: 'acordeon', loadChildren: './acordeon/acordeon.module#AcordeonPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
