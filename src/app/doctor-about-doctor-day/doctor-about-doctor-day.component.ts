import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchedulingsService } from '../services/schedulings.service';

@Component({
  selector: 'app-doctor-about-doctor-day',
  templateUrl: './doctor-about-doctor-day.component.html',
  styleUrls: ['./doctor-about-doctor-day.component.css']
})
export class DoctorAboutDoctorDayComponent implements OnInit {
  user_id = sessionStorage.getItem('user_id');
  hours: string[] = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
  ];
  selectedTime: string | null = null;
  selectedName: string | null = null;
  names: string[] = [];
  day!: number;
  month!: number;
  year!: number;
  doctorId!: number;
  constructor(private route: ActivatedRoute, private shedullingsSvc: SchedulingsService) {}

  ngOnInit(): void {
    console.log('==================== Configurar o agendar');
    this.route.params.subscribe((params) => {
      this.day = +params['day'];   // Converte o parâmetro 'day' para número
      this.month = +params['month'];
      this.year = +params['year'];
      this.doctorId = +params['doctorId'];
    });
    console.log(this.day, this.month, this.year, 'doctorId', this.doctorId);

  }

  schedule(name: string, time: string): void {
    this.selectedName = name;
    this.selectedTime = time;
    console.log(this.selectedName)
  }



  cancelSchedule(): void {
    this.selectedTime = null;
    this.selectedName = null;
  }


  // fazer metodo para agendamento

  confirmQuery(type: string, hora: any): void {
    // Verifica se selectedName e selectedTime estão definidos
    if (!this.selectedName || !this.selectedTime) {
      console.error('Nome do paciente ou horário não estão definidos.');
      return;
    }

    alert(`VICTOR Agendado: ${this.selectedName} para ${this.selectedTime} como ${type}`);

    // Recupera o user_id e verifica se ele existe
    const user_id_str = sessionStorage.getItem('user_id');
    if (!user_id_str) {
      console.error('User ID não encontrado no sessionStorage');
      return;
    }

    const user_id = Number(user_id_str);
    if (isNaN(user_id)) {
      console.error('User ID inválido');
      return;
    }

    // Verifica se shedullingsSvc e doctorId estão definidos
    if (!this.shedullingsSvc) {
      console.error('Serviço de agendamento não está definido.');
      return;
    }

    if (!this.doctorId) {
      console.error('ID do médico não está definido.');
      return;
    }

    // Formata a data para o agendamento
    const dayMonthYearSeconds = `${this.year}-${this.month}-${this.day} ${hora}:00`;
    console.log('Data formatada:', dayMonthYearSeconds);

    // Envia a requisição de agendamento
    this.shedullingsSvc.postSchedulings(user_id, this.doctorId, dayMonthYearSeconds)
      .subscribe({
        next: (response) => {
          console.log('Agendamento realizado com sucesso:', response);
        },
        error: (err) => {
          console.error('Erro ao agendar:', err);
        }
      });

    // Reseta os valores
    this.selectedTime = null;
    this.selectedName = null;
    this.names = [];
  }



}
