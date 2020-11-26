import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight';
  showAvailability = false;


  constructor(private router: Router) {
    //this.router.navigate(['/home']);
  }

  checkavailability() {
    this.showAvailability = true;
    console.log('check availability button clicked');
  }
  cancel() {
   this.showAvailability = false;

  }
}
