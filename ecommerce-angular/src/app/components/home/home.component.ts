import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../data/Men/men_jeans';
import { menShirt } from '../../data/Men/men_shirt';
import { menHat } from '../../data/Men/man_hat';
import { womenJeans } from '../../data/Women/women_jeans';
import { womenShirt } from '../../data/Women/women_shirt';
import { womenHat } from '../../data/Women/women_hat';
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
