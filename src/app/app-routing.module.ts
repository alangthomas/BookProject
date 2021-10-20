import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import{  UpdateBookComponent } from './components/update-book/update-book.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BooksComponent } from './components/books/books.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'add-books', component:AddBooksComponent},
  {path:'home', component:HomeComponent},
  {path:'add-category', component: AddCategoryComponent},
  {path:'add-subcategory', component:AddSubcategoryComponent},
  {path: 'cart/:userId', component:CartComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path: 'view-book/:Id', component: ViewBookComponent},
  {path: 'view-book/:Id/updatebook', component: UpdateBookComponent},
  {path: 'categories', component:CategoriesComponent},
  {path : 'books/:categoryId', component:BooksComponent},
  {path: 'wishlist/:userId', component:WishlistComponent},
  {path: 'sidebar/:userId', component:SidebarComponent},
  {path: 'profile/:userId', component:ProfileComponent},
  {path: 'address/getByUserId/:userId', component:AddressComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, //always at the last line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
