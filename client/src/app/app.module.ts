import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { HomePageComponent } from './components/home-page/home-page.component';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SignUpStudentComponent } from './components/sign-up-student/sign-up-student.component';
import { LoginStudentPageComponent } from './components/login-student-page/login-student-page.component';
import { LoginSchoolStaffPageComponent } from './components/login-school-staff-page/login-school-staff-page.component';
import { SignUpSchoolStaffComponent } from './components/sign-up-school-staff/sign-up-school-staff.component';
import { ListStaffsComponent } from './components/list-staffs/list-staffs.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { ListAcademicMonthComponent } from './components/list-academic-month/list-academic-month.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
//import { NotFoundComponent } from './components/not-found/not-found.component';
//import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomePageComponent,
    ListStudentsComponent,
    SignUpStudentComponent,
    LoginStudentPageComponent,
    LoginSchoolStaffPageComponent,
    SignUpSchoolStaffComponent,
    ListStaffsComponent,
    FooterComponent,
    NavbarComponent,
    ListClassComponent,
    ListAcademicMonthComponent,
    LoginAdminComponent,
    AdminProfileComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
