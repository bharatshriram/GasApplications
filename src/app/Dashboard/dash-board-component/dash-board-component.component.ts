  import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
  import { Router } from '@angular/router';
  import { NgModule } from '@angular/core';
  import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
  import { HttpClient } from '@angular/common/http';
  import { HttpHeaders } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { DashboardResponse } from '../../Responsevo/dashboard.model';
  import { LoginService } from '../../service/login.service';
  import {MenuComponentComponent} from '../../Menu/menu-component/menu-component.component';
import { DataPass } from '../../Model/dataPass';
import { Message } from '../../Model/models';

  // export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  // }

  // const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  @Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.css']
  })
  export class DashBoardComponentComponent implements OnInit {
    
    message: DataPass = null;

    mess:String="Bharat";

    show(msg: DataPass) {
      debugger;
      //this.mess = msg;
  
      console.log("MESSSS==>"+msg);
    }
  

    
debugger;
 

  dashboard:any;

  //@ViewChild(MenuComponentComponent) child;
  public messagess:String;
  
  
  public dashboardArray = [];

  response: DashboardResponse = new DashboardResponse();
 
  constructor(private router :Router,private _LoginService:LoginService){}
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   dataSource : any;
  ngOnInit() {

  debugger;
  
  this._LoginService.dashboardFetch().subscribe(
  data=>{
  debugger;
  this.dashboard=data

  this.dataSource = data["dashboard"]; 

  //console.log("Success-->"+JSON.stringify(this.dashboard));
  },error=>{
    debugger
    console.log(error)
  } 
  )
    debugger;
   
    
    console.log("Menu====Message=>"+ this.mess);
  
    console.log("Data==>"+JSON.stringify(this.dataSource));

    debugger;
    console.log("------------>"+this.dashboard);
  


  // ngAfterViewInit(): void {
  //   console.log("Child-->"+this.alert.show(this.messagess));
  //                           }
  }  }
