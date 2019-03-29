import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor/donor';
import { DonorService } from '../donor/donor.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
donors:Donor[]
  constructor(private donser:DonorService) { }

  ngOnInit() {
    this.donser.getAllDonor().subscribe(
      a=>this.donors=a
    )
  }
  delete(id){
    this.donser.deleteDonor(id).subscribe(
      a=>this.donors.pop()
    )
  }

}
