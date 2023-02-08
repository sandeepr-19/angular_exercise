import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidation } from '../shared/cross-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any;
  // email:string;
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]]
    },{validator:passwordValidation})
  }
 

}
