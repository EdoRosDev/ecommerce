import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../module/product/product';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  
  ngOnInit(): void {
    console.log(this.product)
  }

  
}
