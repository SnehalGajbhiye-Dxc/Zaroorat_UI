import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { ZarooratService } from '../zaroorat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  services : Services[];
  constructor(private zarooratService: ZarooratService) { }

  ngOnInit() {

    this.zarooratService.getServices().subscribe((data: Services[])=>{
      console.log(data);
      this.services = data;
    })  
  }

}
