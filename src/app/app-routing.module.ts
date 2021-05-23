import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FakedataComponent } from './fakedata/fakedata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:'mobiles', component:MobilesComponent},
    {path:'bikes', component:BikesComponent},
    {path:'televisions', component:TelevisionsComponent},
    {path:'', redirectTo:'mobiles', pathMatch:'full'},
  ]},
  {path:'users', component:UsersComponent},
  {path:'users/:id', component:UserDetailsComponent},  
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminGuard]},
  {path:'**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
