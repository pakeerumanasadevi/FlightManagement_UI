import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  faAlignJustify=faAlignJustify;

  constructor(private router: Router, private flightService: FlightService) { }


  ngOnInit(): void {
  }
  viewbookings()
  {
  this.router.navigate(['/viewbookings']);
  }
}
