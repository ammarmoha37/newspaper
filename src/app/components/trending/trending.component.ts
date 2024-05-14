import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent implements OnInit {

  articles: Article[];
  @Input() sectionTitle: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    if (this.sectionTitle === 'Trending') {
      this.articleService.getTrending('trending').subscribe((data: any) => {
        this.articles = data.articles;
        console.log('Trending Articles:', this.articles);
      });
    }

    if (this.sectionTitle === 'Popular Posts'){
      this.articleService.getTrending('popularity').subscribe((data: any) => {
        this.articles = data.articles;
        console.log('Popular Articles:', this.articles);
      });
    }
  }

}
