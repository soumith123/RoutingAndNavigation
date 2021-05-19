import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.css']
})
export class MobiledetailsComponent
{

  @Input() productObj:Product;  

}
