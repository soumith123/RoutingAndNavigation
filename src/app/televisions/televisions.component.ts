import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.model';
import { TelevisionsdataService } from '../televisionsdata.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  TelevisionsData:Product[]=[];

  constructor(private mobObj:TelevisionsdataService) { }

  ngOnInit(): void {
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
