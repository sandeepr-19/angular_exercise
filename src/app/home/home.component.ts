import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
email:any;
constructor(private route: ActivatedRoute) {
}
ngOnInit() {
  this.email = this.route.snapshot.paramMap.get('email');
}
}
