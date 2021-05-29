import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // injecting router to admin after logged in
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref)
  {
    let userLoginObj=ref.value;

    // giving rules to login
    
    if(userLoginObj.username!='admin')
    {
      alert('Invalid Username')
    }
    else if(userLoginObj.password!='123-12')
    {
      alert('Invalid Password')
    }
    else
    {
      // saving username in local storage
      localStorage.setItem("username","admin")

     // navigate to admin after entering details in login page
      this.router.navigateByUrl('/admin')
    }
  }

}


