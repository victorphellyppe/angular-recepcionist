import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar BrowserAnimationsModule
import { BrMaskerModule } from 'br-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AboutDoctorDayComponent } from './about-doctor-day/about-doctor-day.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { AboutPatientComponent } from './about-patient/about-patient.component';
import { AdminCompanyListComponent } from './admin-company-list/admin-company-list.component';
import { AdminCreateEmployeeComponent } from './admin-create-employee/admin-create-employee.component';
import { AdminCreatePatientComponent } from './admin-create-patient/admin-create-patient.component';
import { AdminEmployeeManagementComponent } from './admin-employee-management/admin-employee-management.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPatientManagementComponent } from './admin-patient-management/admin-patient-management.component';
import { AdminPatientScheduleComponent } from './admin-patient-schedule/admin-patient-schedule.component';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';
import { AdminSupervisionComponent } from './admin-supervision/admin-supervision.component';
import { AdminUpdatePatientComponent } from './admin-update-patient/admin-update-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatAlertComponent } from './chat-alert/chat-alert.component';
import { ChatComponent } from './chat/chat.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ConsultationsInProgressComponent } from './consultations-in-progress/consultations-in-progress.component';
import { DoctorAboutDoctorDayComponent } from './doctor-about-doctor-day/doctor-about-doctor-day.component';
import { DoctorAboutDoctorComponent } from './doctor-about-doctor/doctor-about-doctor.component';
import { DoctorAboutPatientComponent } from './doctor-about-patient/doctor-about-patient.component';
import { DoctorChatAlertComponent } from './doctor-chat-alert/doctor-chat-alert.component';
import { DoctorCompanyListComponent } from './doctor-company-list/doctor-company-list.component';
import { DoctorConsultationsInProgressComponent } from './doctor-consultations-in-progress/doctor-consultations-in-progress.component';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { DoctorPatientScheduleComponent } from './doctor-patient-schedule/doctor-patient-schedule.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { EmergencyRoomComponent } from './emergency-room/emergency-room.component';
import { FooterDoctorComponent } from './footer-doctor/footer-doctor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMedicoComponent } from './header-doctor/header-doctor.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeComponent } from './home/home.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientScheduleRegisterComponent } from './patient-schedule-register/patient-schedule-register.component';
import { PatientScheduleComponent } from './patient-schedule/patient-schedule.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { RecepcionistHeaderComponent } from './recepcionist-header/recepcionist-header.component';
import { ReceptionistCompanyListComponent } from './receptionist-company-list/receptionist-company-list.component';
import { ReceptionistPanelComponent } from './receptionist-panel/receptionist-panel.component';
import { RolesComponent } from './roles/roles.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceptionistPanelComponent,
    PatientRegisterComponent,
    ScheduleRegisterComponent,
    ChatAlertComponent,
    AboutPatientComponent,
    DoctorScheduleComponent,
    ChatComponent,
    PatientScheduleComponent,
    PatientScheduleRegisterComponent,
    HeaderMenuComponent,
    FooterComponent,
    AboutDoctorComponent,
    AboutDoctorDayComponent,
    CompanyListComponent,
    RecepcionistHeaderComponent,
    EmergencyRoomComponent,
    ConsultationsInProgressComponent,
    PatientUpdateComponent,
    RolesComponent,
    HeaderMedicoComponent,
    DoctorPanelComponent,
    FooterDoctorComponent,
    DoctorAboutDoctorComponent,
    DoctorCompanyListComponent,
    DoctorAboutDoctorDayComponent,
    DoctorChatAlertComponent,
    DoctorConsultationsInProgressComponent,
    DoctorPatientScheduleComponent,
    DoctorAboutPatientComponent,
    AdminHeaderComponent,
    AdminPanelComponent,
    AdminEmployeeManagementComponent,
    AdminPatientManagementComponent,
    AdminSupervisionComponent,
    AdminScheduleComponent,
    ReceptionistCompanyListComponent,
    AdminCreatePatientComponent,
    AdminCreateEmployeeComponent,
    AdminCompanyListComponent,
    AdminPatientScheduleComponent,
    AdminUpdatePatientComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrMaskerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
