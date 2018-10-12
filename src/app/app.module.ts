import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import {TeachonlineComponent} from './teachonline/teachonline.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes:Routes=[
 {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'teachonline',component:TeachonlineComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    CartComponent,
    TeachonlineComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
