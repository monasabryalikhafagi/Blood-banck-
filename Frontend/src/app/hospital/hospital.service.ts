import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from './hospital';
import { Cases } from "./cases";

@Injectable({
  providedIn: 'root'
})
export class HospitalService {


  burl:string="http://localhost:8080/hospitals/";
  curl:string="http://localhost:8080/cases/";
  curl2:string="http://localhost:8080/";
  bur2:string="http://localhost:8080/patients/";

  constructor(private http:HttpClient) {}

  
  
  
  getAllhospitals(){
    return this.http.get<Hospital[]>(this.burl+"list");
  }
  
  
  getHospitalSubmit(id:number){
    return this.http.get<Hospital>(this.burl+"submit/"+id);
  }
  
  
  addHospitaluser(d:Hospital){
    //console.log(d);
    return this.http.post<Hospital>(this.burl+"register",d)
  }


  deleteHospital(id){
    return this.http.get<Hospital>(this.burl+"delete/"+id)
  }
 
  editHospital(id:number,h:Hospital)
  {
    return this.http.post<Hospital>(this.burl+"edit/"+id,h);
  }

  
  addHospital(hospital:Hospital){
  console.log("HIIIIIIIIIII from post")
    return this.http.post<Hospital>(this.burl+"profile/",hospital)
  }
  


 
  //???????? how this take   <string> 
  // // addCase(c:Cases){
  // //   return  this.http.post<Cases>(this.curl +"hospital-profile", c);
  // //   //<Student>(this.burl + "/add")
  // // }
   addCase(c:Cases){
    return  this.http.post<Cases>(this.bur2 +"case", c);
    //<Student>(this.burl + "/add")
  }



  getcaseDetails(){
    return this.http.get<Cases[]>(this.bur2+"case");
  }



  gethospitalDetails(id:number){
    return this.http.get<Hospital>(this.burl+"details/"+id);
  }
 

   

}

