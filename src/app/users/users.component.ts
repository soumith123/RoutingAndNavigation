import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // injecting the service to component class
  constructor(private usObj:UserDataService, private router: Router) {}
  // storing the data inside object
  userObj:Users[]=[];

  // method to initialize the object
  ngOnInit(): void
  {
    this.usObj.getUser().subscribe(
      userData=>
      {
        this.userObj=userData;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }
  
  // giving the name and id to the url
  onSelectId(id)
  {
    this.router.navigateByUrl('users/'+id)
  }

}
