
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  
    private http:HttpClient,
    private stre:LoginService ,
    private aroute:ActivatedRoute,
  
    private route:Router 
    ){}

    user:User;
    myobj
    uArray:User[] =[];  
    
    loginpost(user:User){
      console.log(user); // ... reach name , pass
      this.stre.postUser(user).subscribe(
        d=>{  console.log(d) ; 
          this.myobj=d;
          console.log(this.myobj);
          this.route.navigate([`/${this.myobj.type}/profile/${this.myobj._id}`])

          //()=>{
            // this.stre.getUserDetails(this.myobj._id).subscribe(
            //   d=>{console.log("from on itnit"); this.user=d;
            //   console.log(this.myobj);
            // }
            // );
         // }
          //this.uArray.push(d); 
        
        //this.route.navigate(['patients/profile'])
        //  this.route.navigate([`/${}/profile/${user.Password}`]);
          
      
      },
        // this.route.navigate([`/${user.}/profile/${d._id}`]);},

        // this.route.navigate(['/d.type/profile/d._id']);
      // this.route.navigate(['/patients/profile', ])
      // this.route.navigate(['/patients/profile/', p._id]);
      // this.stre.getUserDetails(d['id']).subscribe(

        e=>console.log(e)
      );
}



//HERE 
  // getProfile(){
  //     this.stre.getUserDetails(this.myobj._id).subscribe(
  //       d=>{console.log("from on itnit"); this.user=d;
  //       this.route.navigate(['/patients/profile'])
  //     }
  //     );
  //   }
 
  // getProfile;
  // addp(p:Patient){
  //   console.log(p);
  // this.stre.addpatient(p).subscribe(
  //  // data=>this.patients.push(data), 
  //    d=>{console.log(d);  this.route.navigate(['/patients/profile/p._id']); console.log("kkk")},  //error
  // )  
  // }


  // get(){

  //   this.stre.getPatientDetails
  // }


// showdata(std){
//   console.log(std);
// }



users:User[];

ngOnInit() {

  
  this.stre.getAllUsers().subscribe(
    a=>{this.users=a; console.log(a)}
  );


  // this.aroute.params.subscribe(
  //   a=>{
  //     this.stre.getUserDetails(this.uArray['id']).subscribe(
  //       d=>{console.log("from on itnit"); this.user=d}
  //     );
  //   }
  // )

 }
}