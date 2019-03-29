import { Component, OnInit } from '@angular/core';
import{AdminService} from '../admin.service'
import { shallowEqual } from '@angular/router/src/utils/collection';
import{Patientcase} from'../patient/patientcase';
import{listcases} from'../listcaeses';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  
  cases
  public href: string = "";
  constructor( private adminsetr:AdminService ,private router:Router){ }
//  mypordders:object[]=this.adminsetr.cases;
// senddonor(l:listcases){
//   // this.adminsetr.setcase(c);
//   this.adminsetr.sendcase(l).subscribe(
//     a=>{console.log(a) ; this.delete(l:number)},
//     e=>console.log(e)
//   );
 
//  }
//  delete(l:number){
//   this.adminsetr.deletecase(l).subscribe(
//     a=>{console.log(a); console.log("deleted");}, 
//     //this.cases.pop();},
//     e=>console.log(e)
//      );
// }


  ngOnInit() {
    console.log(this.adminsetr.counter);
    this.adminsetr.getAllcases().subscribe(
      a=>{console.log("vvbc nn"); console.log(a);  this.cases=a},
      e=>console.log(e)
    )
    this.href = this.router.url;
    console.log(this.router.url);
    console.log(window.location.href)
// this.adminsetr.cases.forEach(element => {
//       console.log(element);
//     });
//     this.adminsetr.add();

    
   
   }





}
