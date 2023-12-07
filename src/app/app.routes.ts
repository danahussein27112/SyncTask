import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list/product-list.component';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';
import { RegComponent } from './reg/reg.component';
import { AuthGuard } from './guard/auth.guard';
import { AddProductComponent } from './components/product/add-product/add-product/add-product.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'reg', component: RegComponent },
  { path: 'add', component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
