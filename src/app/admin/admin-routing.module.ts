import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbikesComponent } from './addbikes/addbikes.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';
import { AddtelevisionsComponent } from './addtelevisions/addtelevisions.component';
import { AdminComponent } from './admin.component';
import { ViewbikesComponent } from './viewbikes/viewbikes.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ViewtelevisionsComponent } from './viewtelevisions/viewtelevisions.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:'viewmobiles', component:ViewproductsComponent},
  {path:'addnewmobile', component:AddnewmobileComponent},
  {path:'viewbikes', component:ViewbikesComponent},
  {path:'addnewbike', component:AddbikesComponent},
  {path:'viewtelevisions', component:ViewtelevisionsComponent},
  {path:'addnewtelevision', component:AddtelevisionsComponent},

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
