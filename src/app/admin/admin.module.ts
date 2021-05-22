import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewbikesComponent } from './viewbikes/viewbikes.component';
import { AddbikesComponent } from './addbikes/addbikes.component';
import { ViewtelevisionsComponent } from './viewtelevisions/viewtelevisions.component';
import { AddtelevisionsComponent } from './addtelevisions/addtelevisions.component'


@NgModule({
  declarations: [
    AdminComponent,
    ViewproductsComponent,
    AddnewmobileComponent,
    ViewbikesComponent,
    AddbikesComponent,
    ViewtelevisionsComponent,
    AddtelevisionsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
