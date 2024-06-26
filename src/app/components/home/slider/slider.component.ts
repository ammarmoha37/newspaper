import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/articles.model';
import { ArticleService } from 'src/app/services/article.service';


declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{

  @ViewChild('sliderInner') sliderInner: ElementRef;

  @Input() articles: Article[] = [];

  ngOnInit(): void {
  }


  goToPrev(): void {
    const currentSlide = document.querySelector<HTMLInputElement>('input[name="slider"]:checked');
    const prevSlide = currentSlide?.previousElementSibling || document.querySelector<HTMLInputElement>('input[name="slider"]:last-of-type');
    currentSlide?.removeAttribute('checked');
    prevSlide?.setAttribute('checked', 'true');

    if (!prevSlide) {
      const lastSlide = document.querySelector<HTMLInputElement>('input[name="slider"]:last-of-type');
      lastSlide?.setAttribute('checked', 'true');
    }
  }

  goToNext(): void {
    const currentSlide = document.querySelector<HTMLInputElement>('input[name="slider"]:checked');
    const nextSlide = currentSlide?.nextElementSibling || document.querySelector<HTMLInputElement>('input[name="slider"]:first-of-type');
    currentSlide?.removeAttribute('checked');
    nextSlide?.setAttribute('checked', 'true');

    if (!nextSlide) {
    const firstSlide = document.querySelector<HTMLInputElement>('input[name="slider"]:first-of-type');
    firstSlide?.setAttribute('checked', 'true');
  }
  }

}
