import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  topArticles: Article[] = [];
  politicsArticles: Article[] = [];
  businessArticles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getTopHeadlines().subscribe((data: any) => {
      this.topArticles = data.articles;
    });

    this.articleService.getCategories('politics').subscribe((data: any) => {
      this.politicsArticles = data.articles;
    });

    this.articleService.getCategories('business').subscribe((data: any) => {
      this.businessArticles = data.articles;
    });
  }
}
