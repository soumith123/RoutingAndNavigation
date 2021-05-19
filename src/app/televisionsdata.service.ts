import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionsdataService {

  constructor(private hc:HttpClient) {}

  getTelevisionsData():Observable<Product[]>
  {
    return this.hc.get<Product[]>("http://localhost:3000/television")
  }
}
