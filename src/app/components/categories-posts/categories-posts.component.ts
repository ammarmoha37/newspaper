import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-categories-posts',
  templateUrl: './categories-posts.component.html',
  styleUrl: './categories-posts.component.css'
})
export class CategoriesPostsComponent implements OnInit {

  recentArticles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getTopHeadlines().subscribe((data: any) => {
      console.log(data);
      this.recentArticles = data.articles;
    });
  }
}
