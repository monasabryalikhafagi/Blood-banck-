import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import{Patientcase} from'../patientcase';
import{AdminService} from '../../admin.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  p:Patient;
  allpatient:Patient
  constructor(private stdser:PatientService,
    
    private aroute:ActivatedRoute,
    private route:Router,
    private adiminservec:AdminService
    
    ) { }

    goBack(){

      this.route.navigate(['/patients'])

    }
  

    addcase(c:Patientcase){
     // console.log(c);
      this.stdser.addPatientcase(c).subscribe(
        a=>{console.log(a);console.log(c); ; 
          this.adiminservec.cases.push(a);
       
           console.log("cvs jj");
           this.adiminservec.cases.forEach(element => {console.log(element);
            console.log("from  fore each");
           });
          },
        e=>console.log("errr")
      )
    }

  ngOnInit() {
    this.aroute.params.subscribe(
    
      a=>{
        console.log("hi from in init ");
        this.stdser.getPatientDetails(a['id']).subscribe(
          d=>{this.p=d; console.log(d); this.allpatient=d;}
        )
      }
    )
  }

}
