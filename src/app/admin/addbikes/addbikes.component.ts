import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikesdataService } from 'src/app/bikesdata.service';
import { Bikes } from 'src/app/models/bikes.model';

@Component({
  selector: 'app-addbikes',
  templateUrl: './addbikes.component.html',
  styleUrls: ['./addbikes.component.css']
})
export class AddbikesComponent implements OnInit {

  constructor(private bikeObj:BikesdataService, private router:Router) { }

  ngOnInit(): void {
  }

  bikeModel=new Bikes('','','');

  onSubmitNewBike(){
    
      this.bikeObj.createNewBike(this.bikeModel).subscribe(
        res=>
        {
          this.router.navigateByUrl("products/bikes")
          
        },
        err=>
        {
          console.log('Error is', err)
        }
      )
  }

}