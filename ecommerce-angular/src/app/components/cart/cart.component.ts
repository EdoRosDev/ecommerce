import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../module/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, MatDivider, MatButton, CheckoutModalComponent,
  MatDialogTitle,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: CartService
  modalService: NgbModal

  constructor(cartService: CartService, ngbModal: NgbModal, public dialog: MatDialog){
    this.cart = cartService
    this.modalService = ngbModal
  }

  goToCheckOut() {
    // const modalIstance = this.modalService.open(CheckoutModalComponent, {
    //   backdrop: true, 
    //   // fullscreen: 'xxl',
    //   // centered: true,
    //   // size: 'lg' 
    // });
    // modalIstance.componentInstance.items = {
    //   checkOut: () => {
    //     this.checkOut();
    //     modalIstance.close();
    //   }
    // }

    const dialogRef = this.dialog.open(CheckoutModalComponent, {
      hasBackdrop: true,
      autoFocus: true,
      data:{
        totalPrice: this.cart.getTotalPrice(),
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.checkOut()
    });
  }

  checkOut(){
    console.log("Payment successfully made!")
  }

}
