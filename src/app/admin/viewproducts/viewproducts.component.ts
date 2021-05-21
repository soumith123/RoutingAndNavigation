import { Component, OnInit } from '@angular/core';
import { MobilesdataService } from 'src/app/mobilesdata.service';
import { Mobiles } from 'src/app/models/mobiles.model';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobiles[]=[];

  constructor(private mobObj:MobilesdataService) { }

  ngOnInit(): void 
  {
    this.mobObj.getMobilesData().subscribe(
      res=>
      {
        this.mobiles=res;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }

}
