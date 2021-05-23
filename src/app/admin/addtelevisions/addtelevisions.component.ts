import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Televisions } from 'src/app/models/televisions.model';
import { TelevisionsdataService } from 'src/app/televisionsdata.service';

@Component({
  selector: 'app-addtelevisions',
  templateUrl: './addtelevisions.component.html',
  styleUrls: ['./addtelevisions.component.css']
})
export class AddtelevisionsComponent implements OnInit {

  //  accessing data from television data service....and injecting route
  constructor(private telObj:TelevisionsdataService, private router:Router ) { }

  ngOnInit(): void {
  }

  televisionModel=new Televisions('','','');

  onSubmitNewTelevision()
  {
    // subscribing method to television service to save entered data into televsion product
    // and saving it also in db.json
      this.telObj.createNewTelevision(this.televisionModel).subscribe(
        res=>
        {

          // navigating to televisions after saving 
          this.router.navigateByUrl("products/televisions")
          
        },
        err=>
        {
          console.log('Error is', err)
        }
      )
  }

}
