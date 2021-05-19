import { Component, OnInit } from '@angular/core';
import { BikesdataService } from '../bikesdata.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikesData:Product[]=[];

  constructor(private bikesObj:BikesdataService) { }

  ngOnInit(): void {
    this.bikesObj.getbikesData().subscribe(
      bikes=>
      {
        this.bikesData=bikes;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }

}
