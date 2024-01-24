import { AfterContentInit, Component } from '@angular/core';
import { homeCarouselData } from '../../../data/mainCarousel';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { OnInit } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// BrowserAnimationsModule or provideAnimations

@Component({
  selector: 'main-carousel',
  standalone: true,
  imports: [RouterLink, CommonModule, CarouselModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent implements OnInit {

  carouselData: {image: string, path:string}[];
  currentSlide: number;
  interval: number = 1000

  slides: {id: number, src: string, path: string}[] = []

  constructor(){
    this.carouselData = homeCarouselData
    this.currentSlide = 0;
    for (let i = 0; i < homeCarouselData.length; i++) {
      this.slides.push({id: i, src: homeCarouselData[i].image, path: homeCarouselData[i].path})
    }
  }

  ngOnInit(){

    this.carouselData = homeCarouselData
    this.currentSlide = 0;
    this.autoPlay();
  }
  
  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  autoPlay(){
    setInterval(() => {
      this.nextSlide();
    }, 2000)
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length
  }
}
