import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';
import { company } from './company';

@Component({
  selector: 'app-receptionist-company-list',
  templateUrl: './receptionist-company-list.component.html',
  styleUrls: ['./receptionist-company-list.component.css']
})
export class ReceptionistCompanyListComponent implements OnInit {

  filterCompany: string = '';

  listCompanies:company[];

  pag : number = 1;
  counter : number = 10;

  company: any;

  constructor( private companyListService: ServiceAuthService ) {
    this.listCompanies = [];
  }

  ngOnInit(): void {
    this.receptionistCompanies();
  }

  setLogoTemp(img: any, companyId: any):void{
    sessionStorage.setItem("img", "../../assets/logoipsum-logo-" + img + ".svg");
    sessionStorage.setItem("companyId", companyId);
  }

  receptionistCompanies(): void {
    console.log(sessionStorage.getItem("token"));
    this.companyListService.listCompanies(sessionStorage.getItem("token"))
    .subscribe(
      data => {
        sessionStorage
        this.listCompanies = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
