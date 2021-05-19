import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userObj:Users;

  //injecting usersdata service object
  constructor(private ar:ActivatedRoute, private fs:UserDataService) { }

  ngOnInit(): void 
  {
    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of post with current id
    this.fs.getUserById(id).subscribe(
      obj=>
      {
        //assigning users
        this.userObj=obj;
      },
      err=>
      {
        console.log("error is", err);
      }
    )
  }

}
