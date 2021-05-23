import { Component } from '@angular/core';
import { MobilesdataService } from './mobilesdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingAndNavigation';

  constructor(public navObj:MobilesdataService) {}
}
