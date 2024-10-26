import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-doctor-day',
  templateUrl: './about-doctor-day.component.html',
  styleUrls: ['./about-doctor-day.component.css'],
})
export class AboutDoctorDayComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {
    console.log('Configurar o agendar');
  }

  schedule(hours: string): void {
    this.selectedTime = hours; // Armazena o horário selecionado e exibe o modal
  }
  confirmQuery(typeQuery: string): void {
    console.log(`Agendado para ${this.selectedTime} como ${typeQuery}.`);
    alert(`Consulta agendada para ${this.selectedTime} como ${typeQuery}.`);

    // Limpa o horário selecionado para fechar o modal
    this.selectedTime = null;
  }

  cancelSchedule(): void {
    this.selectedTime = null; // Fecha o modal
  }
}
