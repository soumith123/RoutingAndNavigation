import { Component, OnInit } from '@angular/core';
import { MobilesdataService } from '../mobilesdata.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  // for search pipe
  searchTerm:string;

  mobilesData:Product[]=[];

  // injecting mobile service to get data
  constructor(private mobObj:MobilesdataService) { }

  ngOnInit(): void 
  {
    // subscrbing to method in mobile servie to get data
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
