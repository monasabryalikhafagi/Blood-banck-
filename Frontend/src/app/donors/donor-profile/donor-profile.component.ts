import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Donor } from '../donor/donor';

import { DonorService } from '../donor/donor.service';
import { createWiresService } from 'selenium-webdriver/firefox';
import { Hospital } from '../../hospital/hospital';
import { from } from 'rxjs';
import { Users } from 'src/app/Users/users';
import {UsersService } from '../../Users/users.service';
import{AdminService} from '../../admin.service'
import { shallowEqual } from '@angular/router/src/utils/collection';
import{Patientcase} from'../../patient/patientcase';
import{listcases} from'../../listcaeses';
@Component({
  template: 'The href is: {{href}}',
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {
donor:Donor=new Donor("",0,0,"","",{phone:0,facebook:""},
{city:"",street:0},new Date());
donors:Donor[];
hospitals:Hospital[];
user:Users=new Users(0,"","","");
  constructor(private route:Router,
    private Dser:DonorService,
    private aroute:ActivatedRoute,
    private User:UsersService
    ,private adminser:AdminService) {
    
   }
   //////////////////////////////////
   public href: string = this.route.url;
   id:any;
   x:any;
   //console.log(typeof(href));
 listofdonetion:listcases[]=[];
 caseslists:listcases[]=[];
accept(l:listcases){
  console.log(l);
  this.id=this.href.split('/');
  this.x=Number(this.id[3]);
 this.adminser.acceptcase(l,this.x).subscribe(
    a=>{console.log(a+"hello from update"); this.listofdonetion.push(a);this.caseslists.pop();},
    e=>console.log(e)
  )
}

write(){
  ////// javascript
  console.log(this.href);
  console.log(typeof(this.href));
this.href.split('/');
 console.log( 
  this.id=this.href.split('/'));
  console.log(this.id[3]);
  console.log(typeof(this.id[3]));
 this.x=Number(this.id[3]);
 console.log(this.x);
 //////////////
 this.adminser.getAlllists(this.x).subscribe(
  a=>{
    console.log(a);
    this.caseslists=a;
    console.log(this.caseslists);
    
  })}
  reject(d:listcases){

    this.id=this.href.split('/');
    this.x=Number(this.id[3]);
    this.caseslists.pop();
    console.log("regect");
    this.adminser.regectecase(d,this.x).subscribe(
      a=>{console.log(a)},
      e=>{console.log(e)}
    )
  
  }
   
  ngOnInit() { 
    this.write();
    this.aroute.params.subscribe(
      a=>{

    this.Dser.getDonorDetails(a['id']).subscribe(
          d=>{
            console.log(d)
            this.donor=d}
        )
      }
    )
  }
  today:number=Date.now();
  onKeyDown($event){
    //console.log($event)
   if($event.keyCode==32){
      return  false
      
    
  
   }
  }


  getsearchhospital(value:string){
    var ss=value.toLowerCase(); 
     
     console.log(ss);
    this.Dser.getAllhospitals(ss).subscribe(
      a=>this.hospitals=a
    )
  }
  
    
  
  delete(id:Number){
    this.Dser.deleteDonor(id).subscribe(
      a=>this.donor
      
    )
  }

  backlogin( ){
    console.log(" hello from navecation ");
    this.route.navigate([`/login`])

  
  }

    deleteuser(id:Number){
      this.User.deleteUser(id).subscribe(
        a=>this.user
      )
    }
 
  update(id:number,donor:Donor){
    this.Dser.editDonor(id,donor).subscribe(
      a=>{
// console.log(a)
        this.donor


      }
    )
  }
  
 


}
