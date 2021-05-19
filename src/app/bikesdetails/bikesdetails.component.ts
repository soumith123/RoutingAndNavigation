import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-bikesdetails',
  templateUrl: './bikesdetails.component.html',
  styleUrls: ['./bikesdetails.component.css']
})
export class BikesdetailsComponent
{
  @Input() productObj:Product;
  
}
