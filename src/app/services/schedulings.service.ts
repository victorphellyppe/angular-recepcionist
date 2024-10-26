import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedullings } from '../schedule-register/schedulings';

@Injectable({
  providedIn: 'root',
})
export class SchedulingsService {
  constructor(private httpClient: HttpClient) {}

  // GET /companies/4/schedulings
  // const token = sessionStorage.getItem("token");

  toSchedule(idCompany: number) {
    const token = sessionStorage.getItem('token');

    if (!token) {
      console.error('Token não encontrado.');
      return; // Tratar o caso em que o token está ausente
    }

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Uso de template string para evitar concatenação manual
    });

    return this.httpClient.get<Schedullings>(`api/companies/${idCompany}/schedulings`, {
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
  postSchedulings(schedulings:Schedullings) {
    const token = sessionStorage.getItem('token');
    const user_id = sessionStorage.getItem('user_id');

    if (!token) {
      console.error("Token não encontrado.");
      return;
    }
    var schedulingData = {
      "user_id": schedulings.user_id,
      "room_id": schedulings.room_id,
      "company_doctor_id": schedulings.company_doctor_id,
      "happen_at": schedulings.happen_at
    };

    return this.httpClient.post('http://sentinela.sosystemsolucoes.com.br/api/companies/4/schedulings',
      schedulingData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      }
    ).subscribe({
      next: (response) => {
        console.log('Agendamento realizado com sucesso:', response);
      },
      error: (error) => {
        console.error('Erro ao realizar agendamento:', error);
      }
    });

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
