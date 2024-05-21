import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  sportArticles: Article[];
  politicsArticles: Article[];
  scienceArticles: Article[];
  articles: Article[];
  currentRoute: string;
  category: string;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.updateCurrentRoute();

    this.articleService.getCategories('sport').subscribe((data: any) => {
      this.sportArticles = data.articles;
    });

    this.articleService.getCategories('politics').subscribe((data: any) => {
      this.politicsArticles = data.articles;
    });

    this.articleService.getCategories('science').subscribe((data: any) => {
      this.scienceArticles = data.articles;
    });
  }


  private updateCurrentRoute() {
    const url = this.router.url;
    this.currentRoute = url;

    if (url.includes('/categories/politics')) {
      this.category = 'politics';
    } else if (url.includes('/categories/business')) {
      this.category = 'business';
    } else if (url.includes('/categories/health')) {
      this.category = 'health';
    } else if (url.includes('/categories/science')) {
      this.category = 'science';
    } else if (url.includes('/categories/sport')) {
      this.category = 'sport';
    }

    this.fetchArticles(this.category);

  }

  fetchArticles(category: string): void {
    this.articleService.getCategories(category).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }

  isRouteActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
