import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctors.service';
import { Doctor } from './doctor';

@Component({
  selector: 'app-schedule-register',
  templateUrl: './schedule-register.component.html',
  styleUrls: ['./schedule-register.component.css']
})
export class ScheduleRegisterComponent implements OnInit {

  filterDoctor: string = '';

  listDoctors: Doctor[];

  doctor: any;

  pag : number = 1;
  counter : number = 10;

  constructor( private doctorService: DoctorService, private  route: Router ) {
    this.listDoctors = [];
  }


  ngOnInit(): void {
    this.listDoctor();
    console.log(this.listDoctor())
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

  }

  listDoctor(): void {
    const token = sessionStorage.getItem("token");
    const companyId = sessionStorage.getItem("companyId");

    // Verifica se o token e o companyId estão disponíveis
    if (!token || !companyId) {
      console.error("Token ou Company ID não encontrados no sessionStorage.");
      return; // Retorna se não houver informações necessárias
    }

    this.doctorService.listDoctors(token, companyId)
      .subscribe({
        next: (data: any[]) => {
          if (data && data.length > 0) {
            this.listDoctors = data; // Atribui os dados retornados à variável
          } else {
            console.warn("Nenhum médico encontrado.");
            this.listDoctors = []; // Inicializa como um array vazio se não houver dados
          }
        },
        error: (error: any) => {
          console.error("Erro ao listar médicos:", error); // Melhorar a mensagem de erro
        }
      });
  }


  selectDoctor(doctorId: any): void {
    sessionStorage.setItem("doctorId", doctorId);
    this.route.navigateByUrl('/about-doctor');

  }

  searchDoctors(search: any): void {
    this.doctorService.searchDoctor(sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"), search)
    .subscribe(
      data => {
        this.listDoctors = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
