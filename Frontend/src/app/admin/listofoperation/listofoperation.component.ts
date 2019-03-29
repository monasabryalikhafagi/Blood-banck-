import { Component, OnInit } from '@angular/core';
import{AdminService} from '../../admin.service';

@Component({
  selector: 'app-listofoperation',
  templateUrl: './listofoperation.component.html',
  styleUrls: ['./listofoperation.component.css']
})
export class ListofoperationComponent implements OnInit {
donetionoperation
  constructor( private admin:AdminService ) { }


  ngOnInit() {
    this.admin.get_don_operations().subscribe(
      a=>{console.log("data");
        console.log(a); this.donetionoperation=a;},
      e=>{console.log(e);}
    )
  }
}
