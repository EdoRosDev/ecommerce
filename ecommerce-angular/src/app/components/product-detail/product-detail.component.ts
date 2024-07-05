import { Component, Input } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
// import { CartService } from '../../services/cart/cart.service';
import { ItemService } from '../../services/item/item.service';
import { ItemDTO } from '../../dto/itemDTO';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../module/product/product';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [MatRadioModule, MatDivider, CommonModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!: Product;
  item!: ItemDTO;

  @Input('id')
  set itemId(productId: number) {
    this.itemService.getProductById(productId).subscribe(data => { 
      this.item = data
    });
  }
  selectedSize: string = ''
  selectedColor: string = ''

  constructor(private itemService: ItemService, private cartService: CartService
  ){

  }

  addToCart(){
    this.product = {...this.item, size:this.selectedSize, color: this.selectedColor }
    if(this.selectedSize && this.selectedColor)
       this.cartService.addToCart(this.product, this.selectedSize, this.selectedColor)
  }

}
