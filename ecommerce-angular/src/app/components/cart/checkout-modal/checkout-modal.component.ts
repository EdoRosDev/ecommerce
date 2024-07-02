import { Component, Inject, Input, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Address } from '../../../module/address/address';
import { CompletePurchaseComponent } from './complete-purchase/complete-purchase.component';


@Component({
  selector: 'checkout-modal',
  standalone: true,
  imports: [
    CompletePurchaseComponent, 
    MatDialogActions, 
    CommonModule, 
    MatButton, 
    MatButtonModule, 
    MatDialogContent,
    MatDialogClose
  ],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.scss'
})
export class CheckoutModalComponent {

  addressChosen: Address = {
    city: '',
    firstName: '',
    lastName: '',
    mobile: '',
    state: '',
    streetAddress: '',
    zipCode: ''
  }
  @Input() totalPrice: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.totalPrice = data.totalPrice
  }

  nextStep(event: any){
    this.addressChosen = event
  }

}
