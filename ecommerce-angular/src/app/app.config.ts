import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "product-detail/:id", component: ProductDetailComponent},
  {path: "cart", component: CartComponent},
  {path: "**", redirectTo: "home", pathMatch: "full"},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideAnimations(), provideAnimations(), importProvidersFrom(MatNativeDateModule), provideHttpClient()]
};
