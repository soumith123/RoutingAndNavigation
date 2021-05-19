import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private hc:HttpClient) {}

  getUserById(id):Observable<Users>
  {
    return this.hc.get<Users>("http://localhost:3000/users/"+id)
  }

  
  getUser():Observable<Users[]>
  {
    return this.hc.get<Users[]>("http://localhost:3000/users")
  }
}
