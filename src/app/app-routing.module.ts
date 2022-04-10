import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
    component: ShowProductComponent
  },
  {
    path: "cart", 
    component: CartComponent
  },
  {
    path: "login", 
    component: LoginComponent
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
