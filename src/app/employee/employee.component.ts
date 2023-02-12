import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input()
  name!: string;
  @Input()
  age!: number;
  input1!:string;
  input2!:string;
  @Output() send=new EventEmitter();
  constructor(){} 
  sendParent(){
    this.send.emit("i am "+ this.input1+" and i am "+this.input2+" years old");
  }
}
