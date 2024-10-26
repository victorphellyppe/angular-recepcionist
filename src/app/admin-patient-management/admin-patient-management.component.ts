import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patients.service';
import { Patient } from './Patient';

@Component({
  selector: 'app-admin-patient-management',
  templateUrl: './admin-patient-management.component.html',
  styleUrls: ['./admin-patient-management.component.css'],
})
export class AdminPatientManagementComponent implements OnInit {
  filterPatient: string = '';

  listPatients: Patient[];

  patient: any;

  pag: number = 1;
  counter: number = 10;

  constructor(
    private patientService: PatientService,
    private route: Router
  ) {
    this.listPatients = [];
  }

  ngOnInit(): void {
    this.listPatient();
    console.log(this.listPatient());
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
  }

  listPatient(): void {
    const token = sessionStorage.getItem('token');
    const companyIdString = sessionStorage.getItem('companyId');
    const companyId = companyIdString ? parseInt(companyIdString, 10) : 0;

    if (token && companyId) {
      this.patientService.listPatients(token, companyId).subscribe({
        next: (data: any) => {
          this.listPatients = data;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('Request completed.');
        },
      });
    } else {
      console.log('Token ou Company ID inválido');
    }
  }

  selectPatient(patientId: any): void {
    sessionStorage.setItem('patientId', patientId);
    this.route.navigateByUrl('/admin-patient-schedule');
  }

  searchPatient(search: any): void {
    this.patientService
      .searchPatients(
        sessionStorage.getItem('token'),
        sessionStorage.getItem('companyId'),
        search
      )
      .subscribe(
        (data) => {
          this.listPatients = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
