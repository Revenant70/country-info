import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapModule } from './map/map.module';
import { MapHomeComponent } from './map/map-home/map-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MapHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
