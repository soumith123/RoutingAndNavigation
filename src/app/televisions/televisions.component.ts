import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.model';
import { TelevisionsdataService } from '../televisionsdata.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  searchTerm:string;

  TelevisionsData:Product[]=[];

  //injecting telsevision data serice..
  constructor(private mobObj:TelevisionsdataService) { }

  ngOnInit(): void 
  {

    // subscribing to the method in serice file(contains link of databse) to access details from databse
    this.mobObj.getTelevisionsData().subscribe(
      Televisions=>
      {
        this.TelevisionsData=Televisions;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }

}
