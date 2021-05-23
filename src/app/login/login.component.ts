import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref)
  {
    let userLoginObj=ref.value;
    
    if(userLoginObj.username!='admin')
    {
      alert('Invalid Username')
    }
    else if(userLoginObj.password!='12345')
    {
      alert('Invalid Password')
    }
    else
    {
      // save username in local storage
      localStorage.setItem("username","admin")

      //navigate to admin after entering details in login page
      this.router.navigateByUrl('/admin')
    }
  }

}
