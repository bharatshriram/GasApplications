import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { DashboardResponse } from '../Responsevo/dashboard.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {

  private res:any;

  private BGLUrlDashboard = 'http://122.175.46.120:8086/BGLWalkByAMR_Gas/dashboard/SuperAdmin/0';
  constructor(private http:HttpClient)
     {

     }


  //   debugger;
  // public dashboardFetch() : Observable<DashboardResponse>{
  //   debugger;
  //   return this.http.get<DashboardResponse>('http://122.175.46.120:8086/BGLWalkByAMR_Gas/dashboard/SuperAdmin/0',httpOptions);
  // }

     
    

     
}
