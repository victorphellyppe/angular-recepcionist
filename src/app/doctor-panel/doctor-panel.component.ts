import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patients.service';
import { Patient } from './Patient';

@Component({
  selector: 'app-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.css']
})
export class DoctorPanelComponent implements OnInit {

  filterPatient: string = '';

  listPatients: Patient[];

  patient: any;

  pag : number = 1;
  counter : number = 10;
  especialidades = [
    { id: null, name: 'Cardiologia' },
    { id: null, name: 'Dermatologia' },
    { id: null, name: 'Neurologia' },
    { id: null, name: 'Pediatria' },
    { id: null, name: 'Ortopedia' }
  ];
  constructor(private patientService: PatientService, private route: Router) {
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
          next: (data) => {
            console.log(data);
            this.listPatients = data;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('Request completed.');
          }
        });
    } else {
      console.log('Token or Company ID is missing.');
    }
  }


  selectDoctor(doctorId: any): void {
    console.log(doctorId, 'Doctor-panel');
    this.route.navigate(['/doctor-about-doctor', doctorId]);
    // this.route.navigateByUrl('/doctor-about-doctor');
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

  viewExams(patientId: number) {
    alert(patientId)
    // Lógica para exibir exames do paciente
    console.log(`Exibindo exames para o paciente com ID: ${patientId}`);
    // Você pode redirecionar para outra página, abrir um modal, etc.
  }

}
