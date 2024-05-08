import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SliderComponent } from '@components/home/slider/slider.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesPostsComponent } from './components/categories-posts/categories-posts.component';
import { TrendingComponent } from './components/trending/trending.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SliderComponent,
    SubscribeComponent,
    FooterComponent,
    CategoriesPostsComponent,
    TrendingComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
