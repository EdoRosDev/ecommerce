import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Address } from '../../../../module/address/address';

@Component({
  selector: 'complete-purchase',
  standalone: true,
  imports: [MatIcon, MatDivider, MatButton, MatDialogClose, CommonModule],
  templateUrl: './complete-purchase.component.html',
  styleUrl: './complete-purchase.component.scss'
})
export class CompletePurchaseComponent implements OnInit {
  @Output() confirmAll = new EventEmitter<boolean>();
  @Input() totalPrice: number = 0;
  @Input() addressChosen: Address = {
    city: '',
    firstName: '',
    lastName: '',
    mobile: '',
    state: '',
    streetAddress: '',
    zipCode: ''
  }
  
  itemsOfAddress : any
  
  ngOnInit() : void{
    this.itemsOfAddress = Object.values(this.addressChosen)
  }

  confirm(){
    this.confirmAll.emit(true)
  }
  
  cancel(){
    this.confirmAll.emit(false)
  }

}
