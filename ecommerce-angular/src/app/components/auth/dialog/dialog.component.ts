import { Component } from '@angular/core';
import { LoginComponent } from '../formLogin/login.component';
import { CommonModule } from '@angular/common';
import { MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'dialog',
  standalone: true,
  imports: [LoginComponent, SignupComponent, CommonModule, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogLoginComponent {
  flow: string
  resultData: string = ''

  constructor(){
    this.flow = 'login'
    console.log("prova", this.flow == 'login')
  }

  changeFlow(event: {flow: string, data?: string}){
    this.flow = event.flow
    if(event.data) this.resultData = event.data
  }


}
