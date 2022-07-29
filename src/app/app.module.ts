import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteStrategyService } from './routeStrategyService ';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: RouteStrategyService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
