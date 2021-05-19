import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesdataService {

  constructor(private hc:HttpClient) {}

  getMobilesData():Observable<Product[]>
  {
    return this.hc.get<Product[]>("http://localhost:3000/mobiles")
  }
}
