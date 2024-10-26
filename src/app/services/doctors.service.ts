import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Doctor } from '../schedule-register/doctor';
import { Schedullings } from '../schedule-register/schedulings';


// const baseUrl = "http://sentinela.sosystemsolucoes.com.br/api";


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
companyId: any;

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  listDoctors(token: any, companyId: any): Observable<any> {
    console.log(token);
    console.log(companyId);
    this.companyId = companyId

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${environment.api}/companies/${companyId}/doctors`, {headers : reqHeader});
  }

  toSchedule() {
    const token = sessionStorage.getItem('token');

    if (!token) {
      console.error('Token não encontrado.');
      return;
    }

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    console.log(this.companyId, 'Company');

    return this.http.get<Schedullings>(`${environment.api}/companies/${this.companyId}/schedulings`, {
      headers: reqHeader,
    });
  }

  getDoctors(token: any, companyId: any, doctorId: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${environment.api}/companies/${companyId}/doctors/${doctorId}`, {headers : reqHeader});
  }


 // deletePatient(token: any, companyId: any, patientId: any): Observable<any> {

  //  var reqHeader = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    'Authorization':"Bearer " + token
  // });
  //  return this.http.delete(`${baseUrl}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  //}

  searchDoctor(token: any, companyId: any, search: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${environment.api}/companies/${companyId}/doctors?search=${search}`, {headers : reqHeader});

  }

  //createPatients(token: any, companyId: any, objectPatient: any): Observable<any> {
   // var reqHeader = new HttpHeaders({
   //   'Content-Type': 'application/json',
   //   'Authorization':"Bearer " + token
   //});
   // return this.http.post<Patient>(`${baseUrl}/companies/${companyId}/patients`, objectPatient, {headers : reqHeader});
  //
  //}

 // updatePatient(token: any, companyId: any, patientId: any, objectPatient: any): Observable<any> {
  //  var reqHeader = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    'Authorization':"Bearer " + token
  // });
 //   return this.http.patch<Doctor>(`${baseUrl}/companies/${companyId}/patients/${doctorId}`, objectPatient, {headers : reqHeader});
 // }

 doctorCompanies(token: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':"Bearer " + token
 });
  return this.http.get(`${environment.api}/companies/me/doctor?search={{search?}}`, {headers : reqHeader});
}
}
