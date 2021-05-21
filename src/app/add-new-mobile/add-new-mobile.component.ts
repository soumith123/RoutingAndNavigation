import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesdataService } from '../mobilesdata.service';
import { Mobiles } from '../models/mobiles.model';

@Component({
  selector: 'app-add-new-mobile',
  templateUrl: './add-new-mobile.component.html',
  styleUrls: ['./add-new-mobile.component.css']
})
export class AddNewMobileComponent implements OnInit {

  constructor(private dsObj:MobilesdataService, private router:Router) { }

  ngOnInit(): void
   {
   }

   mobileModel=new Mobiles('','','','','','','','','');

   onSubmitNewMobile()
   {
     this.dsObj.createNewMobiles(this.mobileModel).subscribe(
       res=>
       {
        this.router.navigateByUrl("products/mobiles")
       },
       err=>
       {
         console.log("error in reading mobiles is", err)
       }
     )
   }


  }
