import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-televisionsdetails',
  templateUrl: './televisionsdetails.component.html',
  styleUrls: ['./televisionsdetails.component.css']
})
export class TelevisionsdetailsComponent
{

  @Input() productObj:Product; 

}
