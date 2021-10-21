import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShowCategoriesComponent } from './components/show-categories/show-categories.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BooksComponent } from './components/books/books.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { SearchCategoriesComponent } from './components/search-categories/search-categories.component';
import { ViewAllOrdersComponent } from './components/view-all-orders/view-all-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    AddBooksComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
    WishlistComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    ShowCategoriesComponent,
    ViewBookComponent,
    UpdateBookComponent,
    CategoriesComponent,
    BooksComponent,
    SidebarComponent,
    ProfileComponent,
    AddressComponent,
    OrderComponent,
    FooterComponent,
    ViewOrdersComponent,

    SearchBooksComponent,
    SearchCategoriesComponent,
    ViewAllOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
