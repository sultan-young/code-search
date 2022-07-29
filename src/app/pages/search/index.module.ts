import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './index.component';
import { SearchRoutingModule } from './router/router.module';
import { RouteReuseStrategy } from '@angular/router';
import { RouteStrategyService } from '../../routeStrategyService ';
import { SearchInputComponent } from 'src/app/common/components/search-input/search-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SearchComponent,
    SearchInputComponent,
  ],
})
export class SearchModule { }
