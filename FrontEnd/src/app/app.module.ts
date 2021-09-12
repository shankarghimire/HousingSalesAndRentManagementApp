import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppPropertyComponent } from './property/property-card/app-property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthenticationService } from './services/authentication.service';

const appRoutes:Routes=[
  {path:'',component: PropertyListComponent},
  {path:'rent-property',component: PropertyListComponent},
  {path:'add-property',component: AddPropertyComponent},
  {path:'property-detail/:id',component: PropertyDetailComponent},
  {path:'user/login',component: UserLoginComponent},
  {path:'user/register',component: UserRegisterComponent},
  {path:'**',component: PropertyListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AppPropertyComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthenticationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
