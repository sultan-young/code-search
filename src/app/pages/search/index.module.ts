import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './index.component';
import { SearchRoutingModule } from './router/router.module';
import { RouteReuseStrategy } from '@angular/router';
import { RouteStrategyService } from './router/RouteStrategyService ';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
  ],
  declarations: [
    SearchComponent
  ],
})
export class SearchModule { }
