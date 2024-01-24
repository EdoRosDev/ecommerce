import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../data/Men/men_jeans';
@Component({
  selector: 'home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  menJeans:any

  ngOnInit(){
    this.menJeans = menJeans
  }
}
