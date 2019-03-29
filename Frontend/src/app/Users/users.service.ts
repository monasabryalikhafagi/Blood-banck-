import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{Users} from'./users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}
  private burl:String="http://localhost:8080/users/";
  
  deleteUser(id){
    return this.http.get<Users>(this.burl+"delete/"+id)
  }
}
