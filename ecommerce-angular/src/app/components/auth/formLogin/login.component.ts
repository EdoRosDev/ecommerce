import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../../services/auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, MatButton, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Input() flow: string = '';
  @Output() onFlowChange = new EventEmitter<{flow: string, data?: string}>();  

  constructor(private authService: AuthService){
    
  }

  login(loginForm: NgForm){
    this.authService.login(loginForm.value, (isLoginSuccess: boolean) => {
      if(isLoginSuccess){
        this.onFlowChange.emit({flow: 'result', data: "You logged successfully"})
      } else {
        this.onFlowChange.emit({flow: 'result', data: "Your login process encountered some error, try again please"})
      }
    })
  }

  signUp(){
    this.onFlowChange.emit({flow: 'signup'})
  }

}
