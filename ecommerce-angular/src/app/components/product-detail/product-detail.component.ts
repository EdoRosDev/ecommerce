import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../module/product/product';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../module/services/product.service';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [MatRadioModule, CommonModule, MatButtonModule,FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productService: ProductService;

  product!: Product;

  @Input('id')
  set productId(productId: number) {
    this.product = this.productService.getProductById(productId);
  }
  selectedSize: string = ''

  constructor(productService: ProductService){
    this.productService = productService
  }

  addToCart(){

  }

}
