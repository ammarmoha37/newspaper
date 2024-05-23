import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '@components/categories/categories.component';
import { ContactComponent } from '@components/contact/contact.component';
import { HomeComponent } from '@components/home/home.component';
import { SearchComponent } from '@components/search/search.component';
import { SeeAllComponent } from '@components/see-all/see-all.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' ,component: HomeComponent},
  {path: 'categories' ,component: CategoriesComponent},
  {path: 'categories/politics' ,component: CategoriesComponent},
  {path: 'categories/business' ,component: CategoriesComponent},
  {path: 'categories/health' ,component: CategoriesComponent},
  {path: 'categories/science' ,component: CategoriesComponent},
  {path: 'categories/sport' ,component: CategoriesComponent},
  {path: 'contact' ,component: ContactComponent},
  {path: 'see-all' ,component: SeeAllComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
