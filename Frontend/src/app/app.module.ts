import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import{CustomFormsModule} from 'ng2-validation'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
//rehab

import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
 import { HospitalRegisterComponent } from './hospital/hospital-register/hospital-register.component';
 import { HospitalSubmitComponent } from './hospital/hospital-submit/hospital-submit.component';

 //mona*

import { LoginComponent } from './auth/login/login.component';

 import {PatientAddComponent} from './patient/patient-add/patient-add.component';
 import {PatientListComponent} from './patient/patient-list/patient-list.component';

 import {PatientProfileComponent} from './patient/patient-profile/patient-profile.component';

 import { AdminComponent } from './admin/admin.component';
import { HospitalProfileComponent } from './hospital/hospitalprofile/hospitalprofile.component';



import { RegisterdonorComponent } from './donors/registerdonor/registerdonor.component';
import { DonorProfileComponent } from './donors/donor-profile/donor-profile.component';

import { DonorListComponent } from './donors/donor-list/donor-list.component';

import { GalleryComponent } from './gallery/gallery/gallery.component';
import { CasesComponent } from './admin/cases/cases.component';
import { ListofoperationComponent } from './admin/listofoperation/listofoperation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    HospitalSubmitComponent,
    DonorListComponent,
    RegisterdonorComponent,
    PatientProfileComponent,
    DonorProfileComponent,
    CasesComponent ,
    ListofoperationComponent,
    DonorListComponent ,
    //rehab
    HospitalListComponent,
     HospitalRegisterComponent,
     //----
     //mona*
     PatientAddComponent,
     LoginComponent,
     AdminComponent,
     HospitalProfileComponent,
     PatientListComponent,
     GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
