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

  constructor(private telObj:TelevisionsdataService, private router:Router ) { }

  ngOnInit(): void {
  }

  televisionModel=new Televisions('','','');

  onSubmitNewTelevision(){
    
      this.telObj.createNewTelevision(this.televisionModel).subscribe(
        res=>
        {
          this.router.navigateByUrl("products/televisions")
          
        },
        err=>
        {
          console.log('Error is', err)
        }
      )
  }

}
