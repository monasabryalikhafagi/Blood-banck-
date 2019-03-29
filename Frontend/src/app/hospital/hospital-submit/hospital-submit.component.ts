import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { Hospital } from '../hospital';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospital-submit',
  templateUrl: './hospital-submit.component.html',
  styleUrls: ['./hospital-submit.component.css']
})
export class HospitalSubmitComponent implements OnInit {
  hospital:Hospital;
  constructor(
    private hosser:HospitalService,
  
   private aroute:ActivatedRoute,
   private route:Router
  
  ) { }
  goBack(){

        this.route.navigate(['/hospitals'])
    
       }
  ngOnInit() {
    this.aroute.params.subscribe(
           a=>{
            this.hosser.getHospitalSubmit(a['id']).subscribe(
              d=>this.hospital=d
             )
         }
         )
  }

 }
