import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // data for working with pipes
  a="soumith";
  b="SOUMITH";
  c=12345;
  d=0.12;
  e=new Date();

  f=5;
  

}
