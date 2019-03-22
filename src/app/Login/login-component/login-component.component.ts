import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
//import {AccountService} from'./services/account.service';
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Login } from '../../Model/login';
import { LoginResponse } from '../../Responsevo/loginresponse';
import { LoginService } from '../../service/login.service';
//import {Login} from '..Model\Login';
//import {LoginService} from '../Login/login.service';
//import { LoginResponse } from '../responsemodels/loginresponse';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  //FirstName: string;
  //lastName: string;
  login: Login = new Login();
  response: LoginResponse = new LoginResponse();
 
  returnUrl:any;
  empForm:any;
  roleId:any;

  constructor(private router :Router,private _loginService:LoginService){}
  ngOnInit() {
  }

  loginCheck():void {

    //This is *debugger* is breakpoint in angular to debug code..
debugger
console.log(this.login)
//Subscibe consists two parameter 1---result( success data) and 2---error (error block error comming frm services)
this._loginService.LoginValidate(this.login).subscribe(

  result=>{
    debugger
    //THIS IS A SUCCESS BLOCK
    //AUTHENTICATION DONE 
    // communityId: "3"
    // message: "Successfully Logged In"
    // result: "Success"
    // roleId: "2"
    this.response=result;



    if(this.response.result=="Success")
      {
       // alert(result);
        this.roleId=this.response.roleId;
        sessionStorage.setItem("roleId",this.roleId);
        console.log(this.response.roleId);
        this.router.navigate(['/home']);    
      }
      else
      {

          alert(this.response.result);
      }


    console.log(result);
    

  //  this.router.navigate(['./home']);
    console.log('True', result);
  },error=>{
    debugger
    console.log(error)
  }
)
// //     console.log("inside of Onsubmit Function");
// //    if(this.login.userName=="Admin" && this.login.password=="Admin"){
// //      alert("Login Successfull");
// //      this._loginService.LoginValidate(this.login)
// //      .subscribe( login => { console.log(login.userName)
     
// //    //  alert("User created successfully.");
// //  });
// //      this.router.navigate(['./home']);
    
// //     }
}

}
