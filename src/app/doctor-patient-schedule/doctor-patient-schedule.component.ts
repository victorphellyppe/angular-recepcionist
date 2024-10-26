import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../receptionist-panel/Patient';
import { PatientService } from '../services/patients.service';

@Component({
  selector: 'app-doctor-patient-schedule',
  templateUrl: './doctor-patient-schedule.component.html',
  styleUrls: ['./doctor-patient-schedule.component.css']
})
export class DoctorPatientScheduleComponent implements OnInit {

  patient = {} as Patient;

  constructor(private patientService: PatientService,
    private route: Router) { }

  ngOnInit(): void {
    this.showPatient();
  }

  showPatient(): void {
    this.patientService.getPatients(
    sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"),
    sessionStorage.getItem("patientId"))
    .subscribe(
      data => {
        this.patient = data;
      },
      error => {
        console.log(error);
      }
    );
}

}
