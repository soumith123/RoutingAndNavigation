import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionsdataService {

  // importing HttpClient

  constructor(private hc:HttpClient) {}


                            // All crud operations


  // getting the televisions data from the database to this method
  getTelevisionsData():Observable<Product[]>
  {
    return this.hc.get<Product[]>("http://localhost:3000/television")
  }


  //  a method for creating new televisions for admin only...post method
  createNewTelevision(televisionObj):Observable<any>
  {
    return this.hc.post("http://localhost:3000/television",televisionObj)
  }


  // method for updating televisions for admin...put method
  // It also modifies the updated data in db.json
  updateTelevision(modifiedtelevisionObj):Observable<any>
  {
    return this.hc.put("http://localhost:3000/television/"+modifiedtelevisionObj.id,modifiedtelevisionObj)
  }


  // delete method for deleting televisions for admin...delete method
  deleteTelevision(id):Observable<any>
  {
    return this.hc.delete("http://localhost:3000/television/"+id)
  }
  
  
}
