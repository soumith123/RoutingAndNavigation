import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Mobiles } from './models/mobiles.model';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesdataService {

  constructor(private hc:HttpClient) {}

  getMobilesData():Observable<Mobiles[]>
  {
    return this.hc.get<Mobiles[]>("http://localhost:3000/mobiles")
  }

  createNewMobiles(mobObj):Observable<any>
  {
    return this.hc.post("http://localhost:3000/mobiles",mobObj)
  }
}
