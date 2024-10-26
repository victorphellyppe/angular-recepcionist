import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-doctor-company-list',
  templateUrl: './doctor-company-list.component.html',
  styleUrls: ['./doctor-company-list.component.css']
})
export class DoctorCompanyListComponent implements OnInit {

  filterCompany: string = '';

  listCompanies:any[] = [];

  pag : number = 1;
  counter : number = 10;

  company: any;
  medicalSpecialties = [
    { id: null, name: 'Cardiologia' },
    { id: null, name: 'Dermatologia' },
    { id: null, name: 'Neurologia' },
    { id: null, name: 'Pediatria' },
    { id: null, name: 'Ortopedia' }
  ];
  constructor(
    private companyListService: ServiceAuthService
  ) {
    this.listCompanies = [];
  }

  ngOnInit(): void {
    this.doctorCompanies();
  }

  setLogoTemp(img: any, companyId: any):void{
    sessionStorage.setItem("img", "../../assets/logoipsum-logo-" + img + ".svg");
    sessionStorage.setItem("companyId", companyId);
  }

  doctorCompanies(): void {
    const token = sessionStorage.getItem("token");
    this.companyListService.listCompanies(token)
    .subscribe({
      next: (data) => {
        this.listCompanies = ["teste", ...data];
      },
      error: (error) => {
        console.log(error);
      }
  });
  }

}
