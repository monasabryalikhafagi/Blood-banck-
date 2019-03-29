import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:Patient[];
  constructor(private patser:PatientService ) { }

  ngOnInit() {
    this.patser.getAllPatients().subscribe(
      a=>this.patients=a
    )
  }
  deletePatient(id){
    this.patser.deletePatients(id).subscribe(
      a=>this.patients.pop()
    )
  }

  
  

}
