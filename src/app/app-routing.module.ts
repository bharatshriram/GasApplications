import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponentComponent } from './Menu/menu-component/menu-component.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { DashBoardComponentComponent } from './Dashboard/dash-board-component/dash-board-component.component';
import { LoginComponentComponent } from './Login/login-component/login-component.component';

const routes: Routes = [


  //{path:'home', component:HomeComponent,
 // children: [{path:'list', component:ListEmployeesComponent},
 // { path: 'create', component:  CreateEmployeeComponent},
 // { path: 'logout', component:  LogoutComponent}
//]},
  //{path:'home/create', component:CreateEmployeeComponent},
  
  {path:'home', component:HomeComponentComponent
  },
  {path:'login', component:LoginComponentComponent},

  {path:'dashboard', component:DashBoardComponentComponent},

  //{path:'home', component:HomeComponent},
  {path:'', redirectTo: '/login' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
