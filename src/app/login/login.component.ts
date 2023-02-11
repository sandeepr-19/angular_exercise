import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidation } from '../shared/cross-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:any;
 
  constructor(private fb:FormBuilder){

    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]]
    },{validator:passwordValidation})
  }
  public minlength(input:String):boolean {
    return this.loginForm.get(input).errors?.minlength &&
        this.loginForm.get(input).value.length > 0
  }
  public maxlength(input:String):boolean {
    return this.loginForm.get(input).value.length > 15
  }
  public required(input:String):boolean {
    return this.loginForm.get(input).errors?.required &&
    this.loginForm.get(input).touched
  }
  public pattern(input:String):boolean {
    return this.loginForm.get(input).errors?.pattern
  }

}
