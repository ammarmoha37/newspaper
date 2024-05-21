import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/articles.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article: Article;
  @Input() selectedArticle: Article;
  @Output() articleSelected = new EventEmitter<Article>();

  onSelected() {
      this.articleSelected.emit(this.article);
  }

  isSelected(): boolean {
    return this.article === this.selectedArticle;
  }
}
