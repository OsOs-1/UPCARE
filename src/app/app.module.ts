import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './Layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './Components/login/login.component';
import { EmergencyComponent } from './Components/emergency/emergency.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { PatientProfileComponent } from './Components/patient-profile/patient-profile.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { NursesComponent } from './Components/nurses/nurses.component';
import { ReceptionistsComponent } from './Components/receptionists/receptionists.component';
import { CheckupComponent } from './Components/checkup/checkup.component';
import { RadiologyComponent } from './Components/radiology/radiology.component';
import { PharmacyComponent } from './Components/pharmacy/pharmacy.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { BillsComponent } from './Components/bills/bills.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    EmergencyComponent,
    DashboardComponent,
    PatientsComponent,
    PatientProfileComponent,
    RoomsComponent,
    DoctorsComponent,
    NursesComponent,
    ReceptionistsComponent,
    CheckupComponent,
    RadiologyComponent,
    PharmacyComponent,
    ScheduleComponent,
    BillsComponent,
    ReviewsComponent,
    SidebarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
