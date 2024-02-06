import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "**", redirectTo: "home", pathMatch: "full"}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideAnimations(), importProvidersFrom(MatNativeDateModule)]
};
