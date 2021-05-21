import { Component, OnInit } from '@angular/core';
import { MobilesdataService } from '../mobilesdata.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.css']
})
export class ViewMobilesComponent implements OnInit {

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
