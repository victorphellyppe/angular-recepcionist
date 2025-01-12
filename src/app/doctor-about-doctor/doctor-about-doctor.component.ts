import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];

@Component({
  selector: 'app-doctor-about-doctor',
  templateUrl: './doctor-about-doctor.component.html',
  styleUrls: ['./doctor-about-doctor.component.css']
})
export class DoctorAboutDoctorComponent implements OnInit {
  daysQuantity: any;
  counter: any = {};
  weekDay: any;
  month: any;
  monthName: any;
  year: any;
  doctorId!: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorId = Number(this.route.snapshot.paramMap.get('doctorId'));
    this.calcDays();
    this.setCounterLength();

  }

  checkToday(actualDay:number, actualMonth:number, actualYear:number) : boolean {
    var checkDay = new Date().getDate();
    var checkMonth = new Date().getMonth() + 1;
    var checkYear = new Date().getFullYear();

    if(checkDay == actualDay && checkMonth == actualMonth && checkYear == actualYear){
    return true;
    }
    return false;
  }

  calcDays(): void {
    var actualDate = new Date();
    this.month = actualDate.getMonth() + 1;
    this.year = actualDate.getFullYear();
    this.monthName = month[this.month - 1];
    this.daysQuantity = new Date(this.year, this.month, 0).getDate();
  }

  setCounterLength(): void {
    this.counter = new Array(this.daysQuantity);
    for (var i = 1; i <= this.daysQuantity; i++) {
      this.counter[i - 1] = i;
    }
  }

  getWeekDay(day: number): any {
    var date = new Date(this.month + " " + day + ", " + this.year);
    return weekday[date.getDay()];
  }

  nextMonth(): void {
    this.month++;
    if(this.month == 13) {
      this.month = 1;
      this.year++;
    }
    this.monthName = month[this.month - 1];
    this.daysQuantity = new Date(this.year, this.month, 0).getDate();
    this.setCounterLength();
  }

  backMonth(): void {
    this.month--;
    if(this.month == 0) {
      this.month = 12;
      this.year--;
    }
    this.monthName = month[this.month - 1];
    this.daysQuantity = new Date(this.year, this.month, 0).getDate();
    this.setCounterLength();
  }



}
