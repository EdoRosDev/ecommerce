import { Component, Inject, Input, inject } from '@angular/core';
import { AddressFormComponent } from './address-form/address-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CompletePurchaseComponent } from './complete-purchase/complete-purchase/complete-purchase.component';
import { Address } from '../../../module/address/address';


@Component({
  selector: 'checkout-modal',
  standalone: true,
  imports: [
    AddressFormComponent,
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

  step: number
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
    this.step = 1
    this.totalPrice = data.totalPrice
  }

  nextStep(event: any){
    this.addressChosen = event
    this.totalPrice = 199
    this.step = 2
  }

}
