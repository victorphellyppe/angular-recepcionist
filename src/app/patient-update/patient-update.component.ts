import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../receptionist-panel/Patient';
import { PatientService } from '../services/patients.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patientUpdateFormGroup: FormGroup;
  patient = {} as Patient;

  upName:any;
  upSurname:any;
  upAddress:any;
  upNumber:any;
  upComplement:any;
  upUF:any;
  upCity:any;
  upDate:any;
  upDistrict:any;
  upCEP:any;
  upPhone:any;
  upCPF:any;
  upRG:any;
  upSUS:any;
  upHealth_insurance_name:any;
  upHealth_insurance_number:any;
  upMother_name:any;
  upMarital_status:any;
  upGender:any;
  upEmail:any;

  constructor(private formBuilder: FormBuilder,
    private patientService: PatientService,
    private route: Router) {
      this.patientUpdateFormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        CPF: ['', Validators.required],
        RG: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
        city: ['', Validators.required],
        date: ['', Validators.required],
        district: ['', Validators.required],
        CEP: ['', Validators.required],
        phone: ['', Validators.required],
        SUS:[],
        UF:[],
        marital_status:[],
        health_insurance_name:[],
        health_insurance_number:[],
        gender:[],
        mother_name:[],
        complement:[],
        password:[]
      });
  }

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

  updatePatient(): void {
    const updatedPatient = {
        name : this.upName,
        surname : this.upSurname,

        address : this.upAddress,
        number : this.upNumber,
        complement : this.upComplement,
        UF : this.upUF,
        city : this.upCity,
        district : this.upDistrict,
        CEP : this.upCEP,
        phone : this.upPhone,
        CPF : this.upCPF,
        RG : this.upRG,
        SUS : this.upSUS,
        health_insurance_name : this.upHealth_insurance_name,
        health_insurance_number : this.upHealth_insurance_number,
        mother_name : this.upMother_name,
        marital_status : this.upMarital_status,
        gender : this.upGender,
        email : this.upEmail,


    };

    this.patientService.updatePatient(
      sessionStorage.getItem("token"),
      sessionStorage.getItem("companyId"),
      sessionStorage.getItem("patientId"),
      updatedPatient
    ).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl('/patient-schedule');
      },
      error: (error) => {
        console.error("Erro ao atualizar paciente:", error);
      }
    });


  }
}
