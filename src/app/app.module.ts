import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { FakedataComponent } from './fakedata/fakedata.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { MobiledetailsComponent } from './mobiledetails/mobiledetails.component';
import { BikesdetailsComponent } from './bikesdetails/bikesdetails.component';
import { TelevisionsdetailsComponent } from './televisionsdetails/televisionsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    ProductsComponent,
    FakedataComponent,
    FooterComponent,
    PagenotfoundComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    MobiledetailsComponent,
    BikesdetailsComponent,
    TelevisionsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
