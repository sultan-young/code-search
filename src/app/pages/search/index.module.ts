import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './index.component';
import { SearchRoutingModule } from './router/router.module';

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
