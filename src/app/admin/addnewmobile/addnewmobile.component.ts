import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesdataService } from 'src/app/mobilesdata.service';
import { Mobiles } from 'src/app/models/mobiles.model';

@Component({
  selector: 'app-addnewmobile',
  templateUrl: './addnewmobile.component.html',
  styleUrls: ['./addnewmobile.component.css']
})
export class AddnewmobileComponent implements OnInit {

  //  accessing data from mobiles data service....and injecting route
  constructor(private mobObj:MobilesdataService, private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobiles('','','');

  onSubmitNewMobile()
  {
    // subscribing method to mobiles service to save entered data into televsion product
    // and saving it also in db.json    
      this.mobObj.createNewMobile(this.mobileModel).subscribe(
        res=>
        {
          // navigating to mobiles after saving 
          this.router.navigateByUrl("products/mobiles")
          
        },
        err=>
        {
          console.log('Error is', err)
        }
      )
  }

}
