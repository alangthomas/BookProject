import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'add-books', component:AddBooksComponent},
  {path:'home', component:HomeComponent},
  {path:'add-category', component: AddCategoryComponent},
  {path:'add-subcategory', component:AddSubcategoryComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
