import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntractionService {

  
  public message=new Subject<string>();
  logindetail$=this.message.asObservable();
  constructor() { }
  sendDetils(name:string){
    console.log("-"+name);
    this.message.next(name);
  }
}
