import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapHomeComponent } from './map/map-home/map-home.component';

const routes: Routes = [
  { path: 'map', component:MapHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
