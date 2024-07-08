import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'signup',
  standalone: true,
  imports: [CommonModule, MatButton, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  @Input() flow: string = '';
  @Output() onFlowChange = new EventEmitter<{flow: string, data?: string}>();  

  constructor(private authService: AuthService){
    
  }


  register(signUpForm: NgForm){
    const res = this.authService.register(signUpForm.value)
    res.subscribe((registrationSuccess) => {
      console.log(registrationSuccess)
      if(registrationSuccess){
        this.success()
      } else {
        this.error()
      }
    })
  }

  success(){
    this.onFlowChange.emit({flow: 'result', data: "Your account is been registered. Now you can login!"})
  }

  error(){
    this.onFlowChange.emit({flow: 'result', data: "Your registration didn't go well, please try again."})
  }

}
