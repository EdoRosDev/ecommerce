import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans, menShirt, menHat, womenJeans, womenShirt, womenHat } from '../../../data';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  menJeans:any
  womenJeans: any
  menShirt: any
  womenShirt: any
  menHat: any
  womenHat: any

  ngOnInit(){
    this.menJeans = menJeans
    this.menShirt = menShirt
    this.menHat = menHat
    this.womenJeans = womenJeans
    this.womenShirt = womenShirt
    this.womenHat = womenHat
  }
}
