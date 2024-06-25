//we should first of all import the "Input" decorator
//we should secondly   import the "OnInit"

import { Component , Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //then we must call it here as did below
  @Input() ParentUserName:any

  name:any
  ngOnInit() {
    this.name = this.ParentUserName
  }

}
