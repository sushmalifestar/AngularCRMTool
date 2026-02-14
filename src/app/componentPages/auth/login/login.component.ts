import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { noSpaceValidator } from '../../../validators/no-space-validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm : any;

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      username:['', [Validators.required,noSpaceValidator]],
      password:['', [Validators.required,Validators.minLength(6)]]
    })
  }

  login() {
    console.log(this.loginForm.get('username')?.errors);
  }

}
