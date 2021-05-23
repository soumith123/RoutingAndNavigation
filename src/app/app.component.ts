import { Component } from '@angular/core';
import { MobilesdataService } from './mobilesdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingAndNavigation';


  // Accessing methods from mobile data service for login and logout operation
  //If user already logged in it shows logout...after clicking logout it shows login
  // injecting 
  constructor(public navObj:MobilesdataService) {}


}
