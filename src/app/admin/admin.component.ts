import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  faAlignJustify=faAlignJustify;
  constructor() { }

  ngOnInit(): void {
  }

}
