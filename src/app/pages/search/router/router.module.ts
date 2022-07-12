import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from '../components/route-A/route-A.component';
import { RouteBComponent } from '../components/route-B/route-B.component';
import { SearchComponent } from '../index.component';

const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    children: [
      {
        path: 'A',
        component: RouteAComponent,
      },
      {
        path: 'B',
        component: RouteBComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
