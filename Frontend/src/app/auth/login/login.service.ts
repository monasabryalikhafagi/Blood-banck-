import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  burl:string="http://localhost:8080/";
  
  constructor(private http:HttpClient){}

  // getAllPatients(){
  //   return this.http.get<Patient[]>(this.burl+"list");
  // }

  

  

  getUserDetails(id:number){
    console.log("from details .. service");
    //let  detailUser= this.http.get<User>(this.burl+"profile"+id);
      return this.http.get<User>(this.burl+"profile/"+id);
    //console.log(detailUser);
    
  }




  postUser(u:User){
    console.log("from postUser Service")
     let postuser =this.http.post<User>(this.burl +"login" , u );
    //console.log(postuser);
    return postuser;
     //<Student>(this.burl + "/add")
  }



  
  getAllUsers(){
    return this.http.get<User[]>(this.burl+"list");
  }
  

}


