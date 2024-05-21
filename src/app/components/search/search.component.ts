import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  articles: Article[];
  query: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      if (this.query) {
        this.searchArticles(this.query);
      }
    });
  }

  searchArticles(query: string): void {
    this.articleService.searchArticles(query).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
}
