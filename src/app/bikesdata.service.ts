import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bikes } from './models/bikes.model';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class BikesdataService {

  // importing HttpClient

  constructor(private hc:HttpClient) {}



                                  // All crud operations

  
  // getting the bikes data from the database to this method..get method
  getbikesData():Observable<Bikes[]>
  {
    return this.hc.get<Bikes[]>("http://localhost:3000/bikes")
  }

  
  //  a method for creating new bike for admin only...post method
  createNewBike(bikeObj):Observable<any>{
    return this.hc.post("http://localhost:3000/bikes",bikeObj)
  }


  // method for updating bikes for admin...put method
  // It also modifies the updated data in db.json
  updateBike(modifiedBikeObj):Observable<any>
  {
    return this.hc.put("http://localhost:3000/bikes/"+modifiedBikeObj.id,modifiedBikeObj)
  }


  // delete method for deleting bikes for admin...delete method
  deleteBike(id):Observable<any>
  {
    return this.hc.delete("http://localhost:3000/bikes/"+id)
  }

}
