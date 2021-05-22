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

  constructor(private mobObj:MobilesdataService, private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobiles('','','');

  onSubmitNewMobile(){
    
      this.mobObj.createNewMobile(this.mobileModel).subscribe(
        res=>
        {
          this.router.navigateByUrl("products/mobiles")
          
        },
        err=>
        {
          console.log('Error is', err)
        }
      )
  }

}
