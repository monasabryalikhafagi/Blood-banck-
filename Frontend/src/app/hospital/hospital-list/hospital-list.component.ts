import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { Hospital } from '../hospital';


@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitals:Hospital[];
  constructor(private hosder:HospitalService) { }

  ngOnInit() {
    this.hosder.getAllhospitals().subscribe(
      a=>this.hospitals=a,
    )
  }

  }

