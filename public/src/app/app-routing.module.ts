import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';


const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'products', component: ProductListComponent},
  {path:'products/new', component: NewProductComponent},
  {path:'products/edit/:id', component: EditProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
