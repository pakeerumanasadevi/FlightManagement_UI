import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../flight.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchairport',
  templateUrl: './searchairport.component.html',
  styleUrls: ['./searchairport.component.css']
})
export class SearchairportComponent implements OnInit {
  faSearch = faSearch;
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  @Output()
  updateAirport: EventEmitter<any> = new EventEmitter();
  airportData: any = [];
  data: any = {};
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.getAllAirports();
  }
  getAllAirports() {
    this.flightService.getAllAirports().subscribe((res: any) => {
      this.airportData = res;
    })
  }
  searchAirport() {
    this.flightService.searchAirport(this.data.airportId).subscribe((res: any) => {
      let airport = [];
      airport[0] = res;
      this.airportData = airport;
      alert("Airport is available");
    },
    (error) => { 
      alert("Airport is not available");
    })
  }
  update(airport) {
    this.updateAirport.emit(airport);
  }


}


