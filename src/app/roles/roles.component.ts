import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: any = {};


  constructor(private authService: ServiceAuthService, private route: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    const loginUser = {
      email:  sessionStorage.getItem("email"),
      password: sessionStorage.getItem("pass"),
      device_name: "Web"
    };
    this.authService.login(loginUser)
      .subscribe(
        response => {
          this.roles = response.user.roles;
          console.log(this.roles);

        },
        error => {
          console.log(error);
          alert('Acesso Negado!')
        }
      );
  }

  goCompany(role : any) : void {
    console.log({role});

    sessionStorage.setItem("role", role);

    if(role == 'doctor') {
      this.route.navigateByUrl('/doctor-company-list');
    }
    else if(role == 'receptionist') {
      this.route.navigateByUrl('/company-list');
    }
    else if(role == 'admin') {
      this.route.navigateByUrl('/admin-company-list');
    } else if(role == 'patient' || role == 'company_patient') {
      this.route.navigateByUrl('/company-list');
    } else if(role == 'company_owner') {
      this.route.navigateByUrl('/admin-company-list');
    } if(role == 'company_receptionist') {
      this.route.navigateByUrl('/company-list');
    } if(role == 'company_doctor') {
      this.route.navigateByUrl('/doctor-panel');
    }
  }
}
