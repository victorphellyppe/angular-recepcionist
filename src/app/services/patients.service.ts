import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Patient } from '../receptionist-panel/Patient';


// const baseUrl = "http://sentinela.sosystemsolucoes.com.br/api";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  listPatients(token: any, companyId: number): Observable<any> {
    console.log(token, 'token');
    console.log(companyId, 'companyId');

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${environment.api}/companies/${companyId}/patients`, {headers : reqHeader});
  }



  getPatients(token: any, companyId: any, patientId: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${environment.api}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  }


  deletePatient(token: any, companyId: any, patientId: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.delete(`${environment.api}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  }

  searchPatients(token: any, companyId: any, search: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${environment.api}/companies/${companyId}/patients?search=${search}`, {headers : reqHeader});

  }

  createPatients(token: any, companyId: any, objectPatient: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.post<Patient>(`${environment.api}/companies/${companyId}/patients`, objectPatient, {headers : reqHeader});

  }

  updatePatient(token: any, companyId: any, patientId: any, objectPatient: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.patch<Patient>(`${environment.api}/companies/${companyId}/patients/${patientId}`, objectPatient, {headers : reqHeader});
  }


}
