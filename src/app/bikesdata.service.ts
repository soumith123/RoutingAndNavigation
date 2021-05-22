import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bikes } from './models/bikes.model';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class BikesdataService {

  constructor(private hc:HttpClient) {}

  getbikesData():Observable<Bikes[]>
  {
    return this.hc.get<Bikes[]>("http://localhost:3000/bikes")
  }

  createNewBike(bikeObj):Observable<any>{
    return this.hc.post("http://localhost:3000/bikes",bikeObj)
  }

  updateBike(modifiedBikeObj):Observable<any>
  {
    return this.hc.put("http://localhost:3000/bikes/"+modifiedBikeObj.id,modifiedBikeObj)
  }

  deleteBike(id):Observable<any>
  {
    return this.hc.delete("http://localhost:3000/bikes/"+id)
  }

}
