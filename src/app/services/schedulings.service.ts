import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Schedullings } from '../schedule-register/schedulings';

@Injectable({
  providedIn: 'root',
})
export class SchedulingsService {
  constructor(private httpClient: HttpClient) {}

  // GET /companies/4/schedulings
  // const token = sessionStorage.getItem("token");

  toSchedule(idCompany: number): Observable<Schedullings> {
    const token = sessionStorage.getItem('token');

    if (!token) {
      console.error('Token não encontrado.');
      return throwError(() => new Error('Token não encontrado.')); // Retorna um erro como um Observable
    }

    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.httpClient.get<Schedullings>(`${environment.api}/companies/${idCompany}/schedulings`, {
      headers: reqHeader,
    });
  }

  // POST /api/companies/4/schedulings
  // {
  // 	"user_id": 3,
  // 	"room_id": 31,
  // 	"company_doctor_id": 61,
  // 	"happen_at": "2022-08-10 13:00:00"
  // }
  // token
  postSchedulings(user_id: number, company_doctor_id: number, happen_at: any): Observable<any> {
    const token = sessionStorage.getItem('token');

    if (!token) {
      console.error("Token não encontrado.");
      return throwError(() => new Error('Token não encontrado.'));
    }

    const schedulingData = {
      "user_id": user_id,
      "company_doctor_id": company_doctor_id,
      "happen_at": happen_at
    };

    return this.httpClient.post('http://sentinela.sosystemsolucoes.com.br/api/companies/4/schedulings',
      schedulingData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      }
    );
  }


  // GET /companies/4/schedulings/1
// token
getSchedullings(){
  const token = sessionStorage.getItem('token');
    if (!token) {
      console.error("Token não encontrado.");
      return;
    }

}


//patch /companies/4/schedulings/3

updateSchedullings() {
  const token = sessionStorage.getItem('token');
    if (!token) {
      console.error("Token não encontrado.");
      return;
    }
}
// {
// 	"user_id": null,
// 	"room_id": null,
// 	"company_doctor_id": null,
// 	"happen_at": null,
// 	"is_closed": null
// }
// token






//delete /companies/4/rooms/3
// token



}
