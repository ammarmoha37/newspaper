import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
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
}
