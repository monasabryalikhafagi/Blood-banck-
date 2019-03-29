import { Injectable } from '@angular/core';
import{Patientcase} from'./patient/patientcase';
import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient } from '@angular/common/http';
import{listcases} from'./listcaeses';

@Injectable({
  providedIn: 'root'
 
})

export class AdminService {
  donercase:Patientcase[]=[];

  constructor(  private http:HttpClient) { }
  burl:string="http://localhost:8080/patients/";
  burl2:string="http://localhost:8080/";
  burlcase:string="http://localhost:8080/cases/";
  cases:Patientcase[]=[];
  burl3:string;

  setcase(c:Patientcase){
    console.log(c);
    this.donercase.push(c);
 
   // this.getcase()
  }


  getcase(){
    console.log(this.donercase)
   // return this.donercase;

  }
counter=0

 id
 getAlllists(c:number){
  this.id=c;
  console.log(this.id);
  this.burl3= `http://localhost:8080/listcases/${c}`
 // return this.http.get<listcases>(this.burl2+"listcases",{params:this.id});
 return this.http.get<any>( this.burl3);
 }
 sendcase(l:listcases){

  return this.http.post<listcases>(this.burl2+"listcases",l);
    
 }
 acceptcase(l:listcases,y:number){
  this.id=y;  
return this.http.post<any>(`${this.burl2}accept/${y}`,l);
    
 }

 regectecase(l:listcases,y:number ){
  this.id=y;   
  return this.http.post<any>(`${this.burl2}regiect/${y}`,l);
      
   }
 getAllcases(){
  
  return this.http.get<any>(this.burl+"case");
 }

deletecase(l:listcases){
  return  this.http.post<any>(this.burl2+`deletecase`,l);
}


// deletecase(l:number){
//   return  this.http.post<any>(this.burl2+"delete",l);
// }


get_don_operations(){
  return this.http.get<any>(this.burl2+"donation");
}
 
}
