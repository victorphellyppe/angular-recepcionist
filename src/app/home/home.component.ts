import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: any;
  email: any;
  password: any;
  roles: any = {};

  constructor(private authService: ServiceAuthService, private route: Router) {}

  ngOnInit(): void {}

  public getRoles(): any {
    return this.roles;
  }

  login(): void {
    const loginUser = {
      email: this.email,
      password: this.password,
      device_name: 'Web',
    };
    this.authService.login(loginUser).subscribe(
      (response) => {
        if (this.checkRole(response)) {
          sessionStorage.setItem('logged', response.success);
          sessionStorage.setItem('email', this.email);
          sessionStorage.setItem('pass', this.password);
          sessionStorage.setItem('name', response.user.name);
          sessionStorage.setItem('user_id', response.user.id);
          sessionStorage.setItem('token', response.token);
          this.route.navigateByUrl('/roles');
        } else {
          alert(
            'Seu usuário não tem autorização para este acesso, por favor entre em contato com a administração.'
          );
        }
      },
      (error) => {
        console.log(error);
        alert('Acesso Negado!');
      }
    );
  }

  private checkRole(response: any): boolean {
    this.roles = response.user.roles;
    let isRole: boolean;
    isRole = false;
    this.roles.forEach((element: any) => {
      console.log(element, 'Element');

      if (
        element.name === 'receptionist' ||
        element.name === 'admin' ||
        element.name === 'company' ||
        element.name === 'doctor'||

element.name === "patient" ||
element.name === "user"
      ) {
        isRole = true;
      }
    });
    console.log(this.roles, 'ROLE');
    return isRole;
  }

  loginf(): void {
    sessionStorage.setItem('logged', 'true');
    this.route.navigateByUrl('/company-list');
  }
}
