import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Mobiles } from './models/mobiles.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesdataService {

  constructor(private hc:HttpClient) {}

  getMobilesData():Observable<Mobiles[]>
  {
    return this.hc.get<Mobiles[]>("http://localhost:3000/mobiles")
  }

  createNewMobile(mobileObj):Observable<any>{
    return this.hc.post("http://localhost:3000/mobiles",mobileObj)
  }

  //update mobile
  updateMobile(modifiedMobileOj):Observable<any>{
    return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileOj.id,modifiedMobileOj)
  }

  deleteMobile(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:3000/mobiles/"+id)
  }

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

  userLogout()
  {
    localStorage.clear();
  }
}
