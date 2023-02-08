import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any;
  
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,]],
      password:['',[Validators.required,]]
    })
  }
 

}
