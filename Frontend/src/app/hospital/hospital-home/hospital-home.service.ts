import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cases } from '../cases';


@Injectable({
  providedIn: 'root'
})
export class HospitalHomeService {

  curl:string="http://localhost:8080/";
  curl2:string="http://localhost:8080/patients/";

  constructor(private http:HttpClient) { }


  // the route ?
  getcaseDetails(){
    console.log("hi from hospital home servie get case Detils ")
    return this.http.get<Cases[]>(this.curl2+"case");
  }
}
