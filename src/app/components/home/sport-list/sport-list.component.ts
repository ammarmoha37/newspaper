import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent implements OnInit{
  sportArticles: Article[] = [];
  selectedArticle: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getCategories('sport').subscribe((data: any) => {
      this.sportArticles = data.articles;
      this.selectedArticle = this.sportArticles.length > 0 ? this.sportArticles[0] : null;
      console.log('Selected Article from sport-list on initializing:', this.selectedArticle);
    });
  }

  onArticleSelected(article: Article) {
    this.selectedArticle = article;
    console.log('Selected Article from sport-list in OnArticleSelected:', this.selectedArticle);
  }
}
