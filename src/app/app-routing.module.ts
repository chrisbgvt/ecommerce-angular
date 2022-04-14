import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  {
    path: "", 
    component: HomepageComponent
  },
  {
    path: "catalog", 
    component: CatalogComponent
  },
  {
    path: "product/:id", 
    component: ShowProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cart", 
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "register", 
    component: RegisterComponent
  },
  {
    path: "create",
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit/:id", 
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile", 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**", 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
