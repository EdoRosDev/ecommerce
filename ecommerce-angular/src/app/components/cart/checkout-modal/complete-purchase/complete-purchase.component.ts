import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'complete-purchase',
  standalone: true,
  imports: [MatIcon, MatDivider, MatButton, MatDialogClose, CommonModule],
  templateUrl: './complete-purchase.component.html',
  styleUrl: './complete-purchase.component.scss'
})
export class CompletePurchaseComponent implements OnInit {
  @Output() confirmAll = new EventEmitter<string>();
  @Input() totalPrice: number = 0;
  
  ngOnInit() : void{

  }

  confirm(){
    this.confirmAll.emit("success")
  }
  
  cancel(){
    this.confirmAll.emit("cancel")
  }

}
