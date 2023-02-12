import { Component } from '@angular/core';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
name!:string;
age!:number;
childdata!:string;
display(messsage:string){
this.childdata=messsage;
}
}
