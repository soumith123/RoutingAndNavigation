import { Component, OnInit } from '@angular/core';
import { MobilesdataService } from '../mobilesdata.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  searchTerm:string;

  mobilesData:Product[]=[];

  constructor(private mobObj:MobilesdataService) { }

  ngOnInit(): void {
    this.mobObj.getMobilesData().subscribe(
      mobileData=>
      {
        this.mobilesData=mobileData;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }

}
