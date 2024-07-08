import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../services/cart/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import {
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ResultComponent } from './result/result.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, MatDivider, MatButton, ResultComponent,
   CheckoutModalComponent, MatDialogTitle, MatDialogContent, MatDialogClose
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  modalService: NgbModal
  cart: CartService
  result: string = '';
  constructor(private cartService: CartService, public authService: AuthService, ngbModal: NgbModal, public dialog: MatDialog){
    this.cart = cartService
    this.modalService = ngbModal
  }

  goToCheckOut() {
    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      hasBackdrop: true,
      autoFocus: true,
      data:{
        totalPrice: this.cartService.getTotalPrice(),
        onClosing: ((data: any) => {this.result = data})
      },
      
    });

    dialogRef.afterClosed().subscribe(() => {
      this.checkOut()
    });
  }

  getTotalPrice(){
   return this.cart.getTotalPrice()
  }

  checkOut(){
    if(this.result == "cancel") return;
      this.dialog.open(ResultComponent, {
      hasBackdrop: true,
      autoFocus: true,
      data:{
        text: this.result == "success" ? "Payment successfully made!" : "Something went wrong, try again"
      },
    });
  }

}
