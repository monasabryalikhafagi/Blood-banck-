import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { Alert } from 'selenium-webdriver';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-studen-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})


export class PatientAddComponent implements OnInit {

 
  constructor(  private http:HttpClient,private stre:PatientService ,  private aroute:ActivatedRoute,
    private route:Router ) { }
    student:Patient;
    // goBack(){

    //   this.route.navigate(['/patients'])

    // }
    // burl:string="http://localhost:8080/patients/";
    // addpatient(p:Patient){
    //   console.log("ggg")
    //   return  this.http.post<Patient>(this.burl +"register" , p );
    //   //<Student>(this.burl + "/add")
    // }

   // patients : Patient[] ;
    //p=new Patient(0,"","",{Phonenumber:0,Facebook:""},0, 0,{City:"",Street:""},"","") ;
        
    addp(p:Patient){
      console.log(p);
    this.stre.addpatient(p).subscribe(
     // data=>this.patients.push(data), 
       d=>{console.log(d); ; console.log("kkk")},  //error
    )  
    }


    get(){
      this.stre.getPatientDetails
    }


    
  

  //Patient=new Patient(1,"","",1);
  
  showdata(std){
    console.log(std);
  }
  ngOnInit() {

  }

  onKeyDown($event){
    //console.log($event)
   if($event.keyCode==32){
      return  false
    
   }
  }

   Login(){
    this.route.navigate(['/login'])
  }

}
