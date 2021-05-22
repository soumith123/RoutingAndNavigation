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

  createNewTelevision(bikeObj):Observable<any>
  {
    return this.hc.post("http://localhost:3000/television",bikeObj)
  }

  updateTelevision(modifiedtelevisionObj):Observable<any>
  {
    return this.hc.put("http://localhost:3000/television/"+modifiedtelevisionObj.id,modifiedtelevisionObj)
  }

  deleteTelevision(id):Observable<any>
  {
    return this.hc.delete("http://localhost:3000/television/"+id)
  }
  
}
