import { Component, OnInit } from '@angular/core';
import { HospitalHomeService } from '../hospital/hospital-home//hospital-home.service';
import { Cases } from '../hospital/cases';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';
import { HospitalService } from '../hospital/hospital.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cases: Cases[];
  Cases= new Cases(1,"",2,"",{city:"",street:""});

  constructor(private sercase:HospitalService  ,  private aroute:ActivatedRoute,
    private route:Router){}
   
      // cases= new Cases(1,"",2,"",{city:"",street:""});

      
  getAllCase(){
    console.log("hi from home componenet")
    this.sercase.getcaseDetails().subscribe(a=>{console.log(a),
      this.cases=a;
    })       
  }
  

  ngOnInit() {
    // this.aroute.params.subscribe(
    //   a=>{
    //     console.log("hi from on init")
    //     console.log(a)   // empty object?
   this.getAllCase();

      }
    
  }


