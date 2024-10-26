import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('==================== Configurar o agendar');
    this.route.params.subscribe((params) => {
      this.day = +params['day'];   // Converte o parâmetro 'day' para número
      this.month = +params['month'];
      this.year = +params['year'];
    });
    console.log(this.day, this.month, this.year, 'data');

  }

  schedule(name: string, time: string): void {
    this.selectedName = name;
    this.selectedTime = time;



    console.log(this.selectedName, this.selectedTime);

  }

  confirmQuery(type: string): void {
    alert(`Agendado: ${this.selectedName} para ${this.selectedTime} como ${type}`);
    this.selectedTime = null;
    this.selectedName = null;
    this.names = []
  }

  cancelSchedule(): void {
    this.selectedTime = null;
    this.selectedName = null;
  }


  // fazer metodo para agendamento
}
