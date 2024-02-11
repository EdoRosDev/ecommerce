import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormModule } from '@coreui/angular';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'address-form',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, FormModule, ReactiveFormsModule, MatButton, CommonModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  addresses: any
  @Output() deliverConfirm = new EventEmitter<string>();

  newAddressForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    streetAddress: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    zipCode: ["", Validators.required],
    mobile: ["", Validators.required],
  })

  constructor(private formBuilder: FormBuilder){


  }

  handleSubmit(){
    this.deliverConfirm.emit(this.newAddressForm.value);
  }

}
