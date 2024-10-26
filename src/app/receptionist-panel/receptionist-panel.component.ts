import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patients.service';
import { Patient } from './Patient';


@Component({
  selector: 'app-receptionist-panel',
  templateUrl: './receptionist-panel.component.html',
  styleUrls: ['./receptionist-panel.component.css']
})



export class ReceptionistPanelComponent implements OnInit {

  filterPatient: string = '';

  listPatients: Patient[];

  patient: any;

  pag : number = 1;
  counter : number = 10;

  constructor( private patientService: PatientService, private route: Router) {
      this.listPatients = [];

  }

  ngOnInit(): void {
    this.listPatient();
    console.log(this.listPatient());
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

  }

  listPatient(): void {
    const token = sessionStorage.getItem("token");
    const companyId = sessionStorage.getItem("companyId");

    const companyIdNumber = companyId ? Number(companyId) : null;

    if (token && companyIdNumber !== null) {
      this.patientService.listPatients(token, companyIdNumber)
        .subscribe({
          next: (data: any) => {
            this.listPatients = data;
          },
          error: (error: any) => {
            console.log('Erro ao listar pacientes:', error);
          },
          complete: () => {
            console.log('Listagem de pacientes concluída.');
          }
        });
    } else {
      console.log('Token ou Company ID está ausente.');
    }
  }


  selectPatient(patientId: any): void {
    sessionStorage.setItem("patientId", patientId);
    this.route.navigateByUrl('/patient-schedule');

  }

  searchPatient(search: any): void {
    this.patientService.searchPatients(sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"), search)
    .subscribe(
      data => {
        this.listPatients = data;
      },
      error => {
        console.log(error);
      }
    );
  }



}
