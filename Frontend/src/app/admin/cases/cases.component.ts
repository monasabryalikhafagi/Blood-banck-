import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../admin.service'
import { shallowEqual } from '@angular/router/src/utils/collection';
import{Patientcase} from'../../patient/patientcase';
import{listcases} from'../../listcaeses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases:any[]=[];
  public href: string = "";
  constructor( private adminsetr:AdminService ,private router:Router) { }
  //  mypordders:object[]=this.adminsetr.cases;
senddonor(l:listcases,id:number){
  // this.adminsetr.setcase(c);
  console.log("from send ");
  console.log(l,id);
  this.adminsetr.sendcase(l).subscribe(
    a=>{console.log(a); this.delete(l); },
    e=>console.log(e)
  );
  
  }

 //========================================
delete(p:listcases){

  this.adminsetr.deletecase(p).subscribe(
    a=>{console.log(a); console.log("deleted");
    // this.cases.forEach(element => {
      
    // });
   this.cases.pop();
  }
    ,
    e=>console.log(e)
     );
}

  ngOnInit() {
    console.log(this.adminsetr.counter);
    this.adminsetr.getAllcases().subscribe(
      a=>{console.log("vvbc nn"); console.log(a);  this.cases=a},
      e=>console.log(e)
    )
    this.href = this.router.url;
    console.log(this.router.url);
    console.log(window.location.href)
  }

}
