import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles.model';

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrl: './selected-article.component.css'
})
export class SelectedArticleComponent {
  @Input() selectedArticle: Article;

}
