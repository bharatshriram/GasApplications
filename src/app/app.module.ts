import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
//import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {RouterModule,Routes} from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { LoginComponentComponent } from './Login/login-component/login-component.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './service/login.service';
import { CommonServiceService } from './service/common-service.service';
import {DemoMaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material';
import { MenuComponentComponent } from './Menu/menu-component/menu-component.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { DashBoardComponentComponent } from './Dashboard/dash-board-component/dash-board-component.component';
import { FooterComponentComponent } from './Footer/footer-component/footer-component.component';
import { Demo001Component } from './Demo001/demo001/demo001.component';
import { Demo002Component } from './Demo001/demo002/demo002.component';
//import 

const appRoutes: Routes =[
  
  //{path:'home', component:HomeComponent,
 // children: [{path:'list', component:ListEmployeesComponent},
 // { path: 'create', component:  CreateEmployeeComponent},
 // { path: 'logout', component:  LogoutComponent}
//]},
  //{path:'home/create', component:CreateEmployeeComponent},
  
  {path:'home', component:HomeComponentComponent,
  children: [
    { path: 'dashboard', component: DashBoardComponentComponent },
    { path: 'community', component:  HomeComponentComponent}
  ]
  },
  {path:'login', component:LoginComponentComponent},

  {path:'dashboard', component:DashBoardComponentComponent},

  //{path:'home', component:HomeComponent},
  {path:'', redirectTo: '/login' ,pathMatch:'full'},
 

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MenuComponentComponent,
    HomeComponentComponent,
    DashBoardComponentComponent,
    FooterComponentComponent,
    Demo001Component,
    Demo002Component
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    
    DemoMaterialModule,
    MatNativeDateModule,
   


    BrowserModule,
    FormsModule,  
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    
    
    ReactiveFormsModule,
   
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
