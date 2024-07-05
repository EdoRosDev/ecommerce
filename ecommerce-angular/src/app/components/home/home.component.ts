import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans, menShirt, menHat, womenJeans, womenShirt, womenHat } from '../../../data';
import { ItemService } from '../../services/item/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private itemService: ItemService){
    this.itemService.productsChange.subscribe(data => {
      this.products = data
    })
  }

  ngOnInit(){
  }

  ngOnDestroy(){
    // this.itemService.productsChange.unsubscribe()
  }
}
