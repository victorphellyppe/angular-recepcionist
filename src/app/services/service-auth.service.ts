import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { company } from '../company-list/company';



@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  constructor(private http: HttpClient,
    private router: Router
  ) { }


  login(loginUser:any): Observable<any> {

    console.log(loginUser);

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   return this.http.post(`${environment.api}/auth/login`, loginUser, { headers: reqHeader });
  }

  logOut(token: any): Observable<any>  {
    var reqHeader = new HttpHeaders({
      'Authorization':"Bearer " + token
   });
   return this.http.delete(`${environment.api}/auth/logout`, {headers : reqHeader});
  }


  listCompanies(token: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<company>(`${environment.api}/companies/`, {headers : reqHeader});
  }

  doctorCompanies(token: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get(`${environment.api}/companies/me/doctor?search={{search?}}`, {headers : reqHeader});
  }

  receptionistCompanies(token: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get(`${environment.api}/companies/me/receptionist?search={{search?}}`, {headers : reqHeader});
  }


}
