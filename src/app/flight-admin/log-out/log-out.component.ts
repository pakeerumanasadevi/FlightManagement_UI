import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public flightservice: FlightService, public router: Router) { }
  ngOnInit(): void {
    this.flightservice.logOut();
    this.router.navigate(['/login']);
  }

}
