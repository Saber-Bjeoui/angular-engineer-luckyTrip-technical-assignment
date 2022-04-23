import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationsService } from 'src/app/destinations.service';
import { Destination } from 'src/app/models/destination.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  bgImageUrl =  'url("../../../assets/images/background_1.png")';

  constructor(private service: DestinationsService) { }

  // by default we will load destinations from france
  destinations$: Observable<Destination[]> = this.service.getDestinations$('france') as Observable<Destination[]>;

  ngOnInit(): void {
    this.destinations$.subscribe(console.log)
  }

}
