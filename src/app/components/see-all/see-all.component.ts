import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrl: './see-all.component.css'
})
export class SeeAllComponent {

  articles: Article[];
  sectionTitle: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sectionTitle = params['sectionTitle'];

      if (this.sectionTitle === 'Trending') {
        this.articleService.getTrending('trending').subscribe((data: any) => {
          this.articles = data.articles;
          console.log('Trending Articles:', this.articles);
        });
      }

      if (this.sectionTitle === 'Popular Posts') {
        this.articleService.getTrending('popularity').subscribe((data: any) => {
          this.articles = data.articles;
          console.log('Popular Articles:', this.articles);
        });
      }
    });
  }
}
