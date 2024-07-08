import { Component, Input, OnInit } from '@angular/core';
// import { Product } from '../../module/product/product';
import { RouterModule } from '@angular/router';
import { ItemDTO } from '../dto/itemDTO';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: ItemDTO;


  
}
