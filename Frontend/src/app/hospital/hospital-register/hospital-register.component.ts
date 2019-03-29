import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.css']
})
export class HospitalRegisterComponent implements OnInit {
 
hospital:Hospital=new Hospital(1,"",0,"",{city:"",street:""},"");

constructor(private hos:HospitalService,private route:Router) { }
showdata(hos){
  console.log(hos);
}

addHospital(d){
  //console.log(d)
  this .hos.addHospitaluser(d).subscribe(
    a=>{
      console.log(a)
      this.route.navigate(['/hospitals/profile/:id',a])

    }
  )
}


Login(){
  this.route.navigate(['/login'])
}



ngOnInit() {
 
}



onKeyDown($event){
  //console.log($event)
 if($event.keyCode==32){
    return  false
  
 }
}

}


