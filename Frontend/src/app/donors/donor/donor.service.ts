import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { Donor } from './donor';
import { Hospital } from '../../hospital/hospital';


@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private burl:String="http://localhost:8080/donorUser/";
  private burl1:String="http://localhost:8080/Hospitals/";

  constructor(private http: HttpClient) { }
  addDonor(d:Donor){
    console.log("post")
    return this.http.post<Donor>(this.burl+"register",d)
  }
  
  getAllDonor(){
    return this.http.get<Donor[]>(this.burl+"list")
  }

  logdonor(d:Donor){
    return this.http.post<Donor>(this.burl+"login",d)
  }


  getDonorDetails(id:number){
    return this.http.get<Donor>(this.burl+"details/"+id);
  }

  deleteDonor(id){
    return this.http.get<Donor>(this.burl+"delete/"+id)
  }
 
  editDonor(id:number,donor:Donor)
  {
    return this.http.post<Donor>(this.burl+"edit/"+id,donor);
  }
  
  getAllhospitals(q:string){
   
    console.log(q)
    return this.http.get<Hospital[]>(this.burl1+"searchbycity/"+q);
  }


}
