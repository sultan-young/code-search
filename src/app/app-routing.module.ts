import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule),
  },
  {
    path: 'search',
    loadChildren: () => import("./pages/search/index.module").then(m => m.SearchModule)
  },
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
