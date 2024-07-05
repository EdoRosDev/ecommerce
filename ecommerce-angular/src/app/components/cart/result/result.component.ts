import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, MatDialogContent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Input() text!: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.text = data.text
  }

  ngOnInit(){
  }
}
