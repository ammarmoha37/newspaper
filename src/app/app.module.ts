import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SliderComponent } from '@components/home/slider/slider.component';
import { SubscribeComponent } from '@components/subscribe/subscribe.component';
import { FooterComponent } from '@components/footer/footer.component';
import { CategoriesPostsComponent } from '@components/categories-posts/categories-posts.component';
import { TrendingComponent } from '@components/trending/trending.component';
import { CategoriesComponent } from '@components/categories/categories.component';
import { ContactComponent } from '@components/contact/contact.component';
import { SportListComponent } from '@components/home/sport-list/sport-list.component';
import { SelectedArticleComponent } from '@components/home/sport-list/selected-article/selected-article.component';
import { ArticleItemComponent } from './components/home/sport-list/article-item/article-item.component';
import { SeeAllComponent } from './components/see-all/see-all.component';

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
    CategoriesComponent,
    ContactComponent,
    SportListComponent,
    SelectedArticleComponent,
    ArticleItemComponent,
    SeeAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
