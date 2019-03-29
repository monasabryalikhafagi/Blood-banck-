import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor/donor.service';
import { Donor } from '../donor/donor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registerdonor',
  templateUrl: './registerdonor.component.html',
  styleUrls: ['./registerdonor.component.css']
})
export class RegisterdonorComponent implements OnInit {
 d:Donor;
  constructor(private Dser:DonorService,private route:Router,private aroute:ActivatedRoute) { }

  ngOnInit() {
  }

  today:number=Date.now();
  onKeyDown($event){
    //console.log($event)
   if($event.keyCode==32){
      return  false
      
    
  
   }
  }


  adddonor(d){
    console.log(d);
    this.Dser.addDonor(d).subscribe(
      a=>console.log(a)
    )

  }

  

  gotologin( b:number){
    console.log(" hello from navecation ");
    this.route.navigate([`/donorUser/profile/${b}`])

  
  }


  Login(){
    this.route.navigate(['/login'])
  }



}
