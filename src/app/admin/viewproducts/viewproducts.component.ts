import { Component, OnInit } from '@angular/core';
import { MobilesdataService } from 'src/app/mobilesdata.service';
import { Mobiles } from 'src/app/models/mobiles.model';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  editMobileIndex;
  editMobileObj=new Mobiles('','','')
  editMobileStatus:boolean=false;

  mobiles:Mobiles[]=[];

  constructor(private mobObj:MobilesdataService) { }

  ngOnInit(): void 
  {
    this.mobObj.getMobilesData().subscribe(
      res=>
      {
        this.mobiles=res;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }


  editMobile(mobileObj,ind)
  {
    this.editMobileObj=mobileObj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;

  }

  saveMobile(modifiedMobileObj)
  {
    this.editMobileStatus=false;

    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];
   
    this.mobObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }


  //delete mobile
  deleteMobile(mobileObj){
    console.log("mobile to delete",mobileObj.id)
    this.mobObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        console.log("res is ",res);
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }
}

