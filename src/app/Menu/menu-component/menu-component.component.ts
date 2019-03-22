import { Component, OnInit, ViewChild } from '@angular/core';
import { DashBoardComponentComponent } from '../../Dashboard/dash-board-component/dash-board-component.component';
import { DataPass } from '../../Model/dataPass';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent{

  @ViewChild(DashBoardComponentComponent) alertt: DashBoardComponentComponent;

  public links:String;
  public msg:String;
  

  navBar: any[] =[ {
    'label' : 'Home',
    'click' : 'home'
  }, {
    'label' : 'Community Set Up',
    'subNav' : [ {
      'label' : 'Community',
      'sref' : 'community',
      'click' : 'table',
    }, {
      'label' : 'Block',
      'sref' : 'block',
      'click' : 'table',
    }, {
      'label' : 'Customer',
      'sref' : 'customer',
      'click' : 'table',
    }, {
      'label' : 'Add Meter',
      'sref' : 'addmeter',
      'click' : 'table',
    }, {
      'label' : 'Assign Meter',
      'sref' : 'assignmeter',
      'click' : 'table',
    } ],
    'click' : 'table'
  }, {
    'label' : 'Dashboard',
    'sref' : 'dashboard',
    'click' : 'table'
  }, {
    'label' : 'Accounts',
    'subNav' : [ {
      'label' : 'Top Up',
      'sref' : 'topup',
      'click' : 'form',
    }, {
      'label' : 'Status',
      'sref' : 'status',
      'click' : 'table',
    }, {
      'label' : 'Fixed Charges',
      'sref' : 'fixedcharges',
      'click' : 'table',
    }, {
      'label' : 'Configuration',
      'sref' : 'configuration',
      'click' : 'table',
    } ],
    'click' : 'table'
  }, {
    'label' : 'Reports',
    'subNav' : [ {
      'label' : 'User Consumption Reports',
      'sref' : 'userconsumptionreports',
      'click' : 'form',
    }, {
      'label' : 'TopUp Summary',
      'sref' : 'topupsummary',
      'click' : 'form',
    },{
      'label' : 'Valve Reports',
      'sref' : 'valvereports',
      'click' : 'table',
    }, {
      'label' : 'Alarms',
      'sref' : 'alarm',
      'click' : 'table',
    } ]
  }, {
    'label' : 'Management Settings',
    'subNav' : [ {
      'label' : 'Tariff',
      'sref' : 'tariff',
      'click' : 'table',
    }, {
      'label' : 'User Management',
      'sref' : 'user',
      'click' : 'table',
    }, {
      'label' : 'Alert',
      'sref' : 'alert',
      'click' : 'table',
    }, {
      'label' : 'Holiday',
      'sref' : 'holiday',
      'click' : 'table',
    } ],
    'click' : 'table'
  }, {
    'label' : 'Logout',
    'click' : 'logout'
  } ]

  stateTransition(link):void{
    debugger;
  console.log("Link--->"+JSON.stringify(link));
  this.links=link;
  debugger;
  var msg: DataPass =link;
  //this.msg=this.links;
  debugger;
  console.log(msg.click);
  this.alertt.show(msg);
  console.log(this.alertt.mess);
   // this.alertt.show(msg);
    debugger;
  }

  debugger;
   public name = this.links;

  constructor() { } 
  
  public roleIds= sessionStorage.getItem("roleId");

}
