import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import{Patientcase} from'./patientcase';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  burl:string="http://localhost:8080/patients/";

  constructor(private http:HttpClient) { }

  // getAllPatients(){
  //   return this.http.get<Patient[]>(this.burl+"list");
  // }

  getPatientDetails(id:number){
    return this.http.get<Patient>(this.burl+"profile/"+id);
  }

  addpatient(p:Patient){
    return  this.http.post<Patient>(this.burl +"register" , p );
    //<Student>(this.burl + "/add")
  }

  addPatientcase(c:Patientcase){
 
    return  this.http.post<Patientcase>(this.burl +"case" , c );
  }
  getAllPatients(){
    return this.http.get<Patient[]>(this.burl+"list");
  }


  deletePatients(id:number){
    return this.http.get<Patient>(this.burl+"delete/"+id)
  }



}
