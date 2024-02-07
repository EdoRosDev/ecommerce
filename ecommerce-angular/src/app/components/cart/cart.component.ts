import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../module/services/cart.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, MatDivider, MatButton],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: CartService

  constructor(cartService: CartService){
    this.cart = cartService
    console.log(this.cart.cartItems)
  }

  goToCheckOut(){
    console.log("function works")
  }

}
