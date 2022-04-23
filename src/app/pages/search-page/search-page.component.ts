import { Component, OnInit } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { DestinationsService } from 'src/app/destinations.service';
import { Destination } from 'src/app/models/destination.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  bgImageUrl =  'url("../../../assets/images/background_1.png")';

  constructor(private service: DestinationsService) { }

  onSearchClick$ = new Subject<string>()

  destinations$: Observable<Destination[]> = this.onSearchClick$.pipe(
    startWith(''),
    switchMap((searchValue: string) => this.service.getDestinations$(searchValue) as Observable<Destination[]>)
  )


}
