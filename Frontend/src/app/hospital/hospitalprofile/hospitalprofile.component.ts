import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import {Cases} from '../cases';
@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospitalprofile.component.html',
  styleUrls: ['./hospitalprofile.component.css']
})
export class HospitalProfileComponent implements OnInit {
  cases:Cases[]

  hospital:Hospital=new Hospital(0,"",0,"",{city:"",street:""},"");
   //case:Cases= new Cases(0,"",0,"",{city:"",street:""});
  //hs:Hospital;
  
  hospitals:Hospital[];
  
  constructor(private http:HttpClient,private stre:HospitalService ,  private aroute:ActivatedRoute,
    private route:Router) { }
    


    profilepost(cases:Cases){
      console.log(cases); // that done 
      this.stre.addCase(cases).subscribe(
      d=>{ //this.cases.push(d);
        //  console.log(d);
      },
      c=>console.log("Hi from profile post at hospital profile component"),
      )   
    }
    // getAllHospital(){
    //   this.stre.gethospitalDetails().subscribe(a=>{console.log(a),
    //     this.hospitals=a;  
    //   })
            
    // }

    delete(id:Number){
      this.stre.deleteHospital(id).subscribe(
        a=>this.hospital 
      )
    }
  
    update(id:number,h:Hospital){
      this.stre.editHospital(id,h).subscribe(
        a=>{
  // console.log(a)
          this.hospital;
  
  
        }
      )
    }

    //-----------------------------------------------
    ngOnInit() { 
      this.aroute.params.subscribe(
        a=>{
          console.log("hi from on init")
          console.log(a)
      this.stre.gethospitalDetails(a['id']).subscribe(
            d=>{
              console.log("hi from hospital profile com. ")
              console.log(d);
              this.hospital=d;
             // this.hospitals.push(d);
            }
          )
        }
      )
    }
  

}
