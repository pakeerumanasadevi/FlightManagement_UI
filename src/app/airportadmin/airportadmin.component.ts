import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-airportadmin',
  templateUrl: './airportadmin.component.html',
  styleUrls: ['./airportadmin.component.css']
})
export class AirportadminComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  faAlignJustify=faAlignJustify;
  showSearch = true;
  constructor() { }

  ngOnInit(): void {
  }

}
