import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IntractionService } from '../intraction.service';
import { passwordValidation } from '../shared/cross-validator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any;
  // email1!:string;
  private interactionService=new IntractionService();
  constructor(private fb:FormBuilder,private router: Router){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]]
    },{validator:passwordValidation})
  }
  sendDetails(message:string){
    console.log(message);
    this.interactionService.sendDetils(message);
    // this.router.navigate([`./home`]);
  }
}
