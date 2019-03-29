import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { GalleryComponent } from './gallery/gallery/gallery.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { MyguardGuard } from './auth/myguard.guard';
import { LoginComponent } from './auth/login/login.component';
import { HospitalSubmitComponent } from './hospital/hospital-submit/hospital-submit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { HospitalProfileComponent } from './hospital/hospitalprofile/hospitalprofile.component';
import {DonorProfileComponent} from './donors/donor-profile/donor-profile.component';


//Donor

import {RegisterdonorComponent} from './donors/registerdonor/registerdonor.component';



//Rehab
import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { HospitalRegisterComponent } from './hospital/hospital-register/hospital-register.component';



//mona*
import { PatientAddComponent } from './patient/patient-add/patient-add.component';

import { AdminComponent } from './admin/admin.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';



//-----------------



import { CasesComponent } from './admin/cases/cases.component';
import { ListofoperationComponent } from './admin/listofoperation/listofoperation.component';
import{DonorListComponent}from'./donors/donor-list/donor-list.component';





const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"gallery",component:GalleryComponent},
  // {path:"students",component:StudentListComponent,children:[
  //   {path:"add",component:StudenAddComponent}
  // ]},
  // {path:"students/details/:id",component:StudentDetailsComponent},

  //rehab 
  {path:"hospitals",component:HospitalListComponent,
   children:[{path:"add",component:HospitalRegisterComponent}]
  },
  {path:"login",component:LoginComponent},
  
  {path:"hospitals/submit/:id",component:HospitalSubmitComponent},
  
  // {path:"hospitals/add",component:HospitalRegisterComponent},
  
  {path:"hospitals/register",component:HospitalRegisterComponent},

  {path:"hospitals/login",component:LoginComponent},
  
  {path:"hospitals/profile/:id",component:HospitalProfileComponent},
//-----------

//mona*
{path:"patients/register",component:PatientAddComponent},
{path:"patients/profile/:id",component:PatientProfileComponent}, //patientComponent
{path:"patients/login/:id",component:LoginComponent},
{path:"admin/profile/",component:AdminComponent},
{path:"admin/cases",component:CasesComponent},
{path:"admin/list",component:ListofoperationComponent},
{path:"admin/profile",component:AdminComponent},
{path:"hospitals/list",component:HospitalListComponent},
{path:"patients/list",component:PatientListComponent},
{path:"donor/list",component:DonorListComponent},
// {path:"hospitals",component:AdminComponent,children:[{path:"list",component:HospitalListComponent},]},
// {path:"patients",component:AdminComponent,children:[{path:"list",component:PatientListComponent},]},

//ADmin
{path:"admin/cases",component:CasesComponent},
{path:"admin/list",component:ListofoperationComponent},
{path:"admin/profile/:id",component:AdminComponent},
{path:"hospitals/list",component:HospitalListComponent},
{path:"patients/list",component:HospitalListComponent},

//---------------
{path:"patients/list",component:HospitalListComponent},
{path:"donor/list",component:DonorListComponent},
//Donor aliaa
{path:"donorUser/register",component:RegisterdonorComponent},
{path:"donorUser/profile/:id",component:DonorProfileComponent},

{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"**",component:NotfoundComponent},


//{path:"donorUser/register",component:RegisterdonorComponent},
// {path:"donorUser/login",component:AddDonorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
