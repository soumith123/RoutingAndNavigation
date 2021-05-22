import { Component, OnInit } from '@angular/core';
import { BikesdataService } from 'src/app/bikesdata.service';
import { Bikes } from 'src/app/models/bikes.model';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-viewbikes',
  templateUrl: './viewbikes.component.html',
  styleUrls: ['./viewbikes.component.css']
})
export class ViewbikesComponent implements OnInit {

  constructor(private bikeObj:BikesdataService) { }

  bikes:Bikes[]=[];

  ngOnInit(): void 
  {
    this.bikeObj.getbikesData().subscribe(
      res=>
      {
        this.bikes=res;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }

  editBikeIndex;
  editBikeObj=new Bikes('','','');
  editBikeStatus:boolean=false;

  editBike(bikeObj,ind)
  {
    this.editBikeIndex=ind;
    this.editBikeObj=bikeObj;
    this.editBikeStatus=true;
  }

  saveBike(modifiedBikeObj)
  {
    this.editBikeStatus=false;
    modifiedBikeObj.id=this.editBikeObj["id"]
    modifiedBikeObj.productImage=this.editBikeObj["productImage"]
    this.bikeObj.updateBike(modifiedBikeObj).subscribe(
      res=>
      {
        console.log(res)
      },
      err=>
      {
        console.log("error in update", err)
      }
    )
  }

  deleteBike(bikeObj)
  {
    this.bikeObj.deleteBike(bikeObj.id).subscribe(
      res=>
      {
        alert("mobile deleted")
      },
      err=>
      {
        console.log("error in deleting mobile is", err)
      }
    )
  }



  

}
