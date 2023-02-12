import { Component, OnInit } from '@angular/core';
import { IntractionService } from '../intraction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
email! :string;
private _interactionService=new IntractionService();
constructor() {
  
}
ngOnInit() {
  this._interactionService.logindetail$.subscribe(
    details=>{
     console.log("so");
     this.email=details;
    }
 );
}
}
 