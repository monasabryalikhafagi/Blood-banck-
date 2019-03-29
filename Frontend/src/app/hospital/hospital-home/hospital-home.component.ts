import { Component, OnInit } from '@angular/core';
import { HospitalHomeService } from './hospital-home.service';
import { Cases } from '../cases';

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.css']
})
export class HospitalHomeComponent implements OnInit {

  
  cases: Cases[];
  Cases= new Cases(1,"",2,"",{city:"",street:""});

  constructor(private sercase:HospitalHomeService ) { }
   
       // cases= new Cases(1,"",2,"",{city:"",street:""});

  // getAllCase(){
  //   this.sercase.getcaseDetails().subscribe(a=>{console.log(a),
  //     this.cases=a;
  //   })
          
  // }

  ngOnInit() {
         //  this.getAllCase()
  }

}
