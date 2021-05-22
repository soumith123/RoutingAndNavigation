import { Component, OnInit } from '@angular/core';
import { Televisions } from 'src/app/models/televisions.model';
import { TelevisionsdataService } from 'src/app/televisionsdata.service';

@Component({
  selector: 'app-viewtelevisions',
  templateUrl: './viewtelevisions.component.html',
  styleUrls: ['./viewtelevisions.component.css']
})
export class ViewtelevisionsComponent implements OnInit {

  constructor(private telObj:TelevisionsdataService) { }

  televisions:Televisions[]=[];

  ngOnInit(): void 
  {
    this.telObj.getTelevisionsData().subscribe(
      res=>
      {
        this.televisions=res;
      },
      err=>
      {
        console.log("error in accessing televisions is", err)
      }

    )
  }

  editTelevisionIndex;
  editTelevisionObj=new Televisions('','','');
  editTelevisionStatus:boolean=false;

  editTelevision(televisionObj,ind)
  {
    this.editTelevisionIndex=ind;
    this.editTelevisionObj=televisionObj;
    this.editTelevisionStatus=true;
  }

  saveTelevision(modifiedTelevisionObj)
  {
    this.editTelevisionStatus=false;
    modifiedTelevisionObj.id=this.editTelevisionObj["id"]
    modifiedTelevisionObj.productImage=this.editTelevisionObj["productImage"]
    this.telObj.updateTelevision(modifiedTelevisionObj).subscribe(
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

  deleteTelevision(televisionObj)
  {
    this.telObj.deleteTelevision(televisionObj.id).subscribe(
      res=>
      {
        alert("Television deleted")
      },
      err=>
      {
        console.log("error in deleting Television is", err)
      }
    )
  }


}
