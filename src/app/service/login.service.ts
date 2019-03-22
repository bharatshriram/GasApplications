import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



//import {Observable} from 'rxjs/Rx';
//import { Http, Response, RequestOptions } from '@angular/http';

//import {map} from 'rxjs/operators';

import 'rxjs/add/operator/map';

import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { LoginResponse } from '../Responsevo/loginresponse';
import { Login } from '../Model/login';
import { DashboardResponse } from '../Responsevo/dashboard.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {


  
 private res:any;

  private userUrl = 'http://localhost:8080/user-portal/users';

  private BGLUrl = 'http://122.175.46.120:8086/WaterService/login';

  //private userUrl = '/api';


  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }



  public LoginValidate(login):Observable<LoginResponse> {

    debugger
   return this.http.post<Login>(this.BGLUrl,
    login,httpOptions)
  }


  
  public dashboardFetch(){
    debugger;
    return this.http.get('http://122.175.46.120:8086/BGLWalkByAMR_Gas/dashboard/SuperAdmin/0');
  }


  public apiUrl:string="http://localhost:62517/API/:id";
     public DownloadUrl:string="http://localhost:62517/";
    //public apiUrl:string="http:/213.210.193.147/ACIGPanelAPI/API/";
    //public header:HttpHeaders();

   public  httpOptions ={headers:new HttpHeaders({'Content-Type': 'application/json'})};
     constructor(private http:HttpClient)
     {

     }
    

     login(Login) {
      // return this.http.post<any>('/api/authenticate', { username: username, password: password })
      //     .map(user => {
      //         // login successful if there's a jwt token in the response
      //         if (user && user.token) {
      //             // store user details and jwt token in local storage to keep user logged in between page refreshes
      //             localStorage.setItem('currentUser', JSON.stringify(user));
      //         }

      //         return user;
      //     });
  }

}
