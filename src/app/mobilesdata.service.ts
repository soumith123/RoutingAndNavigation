import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Mobiles } from './models/mobiles.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesdataService {

  // importing HttpClient

  constructor(private hc:HttpClient) {}



                                    // All crud operations


  // getting the mobiles data from the database to this method
  getMobilesData():Observable<Mobiles[]>
  {
    return this.hc.get<Mobiles[]>("http://localhost:3000/mobiles")
  }


  //  a method for creating new mobiles for admin only...post method
  createNewMobile(mobileObj):Observable<any>{
    return this.hc.post("http://localhost:3000/mobiles",mobileObj)
  }


  // method for updating mobiles for admin...put method
  // It also modifies the updated data in db.json
  updateMobile(modifiedMobileOj):Observable<any>{
    return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileOj.id,modifiedMobileOj)
  }

  
  //  delete method for deleting mobiles for admin...delete method
  deleteMobile(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:3000/mobiles/"+id)
  }




  
  
  //  Method for login and logout...if user already logged in it shows logout..after clicking
  // logout it shows login

  // It was accessed in app.component.ts
  userLoginStatus():boolean
  {
    if(localStorage.getItem("username")==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  // It removes the logged user from local storage...so admin needs to login again to access data
  userLogout()
  {
    localStorage.clear();
  }
}
