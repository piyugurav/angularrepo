import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employees:any;
  constructor(private service : DataService) { }

  ngOnInit() {

    this.service.select().subscribe(Response=>{
      if(Response['status']==='success')
      {
          this.employees = Response['data'];
      }
      else{

        console.log("error:"+ Response['error']);
      }


    });
  }

}
