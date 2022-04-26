import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, startWith } from 'rxjs';
import { Destination } from './models/destination.model';

interface GetDestinationsApiResponse {
  new_destinations: Destination[],
  updated_destinations: Destination[]
  destinations: Destination[]
}

interface GetDestinationsByApiRespense {
  destination: Destination;
  activities: any
}
@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private baseApiUrl = 'https://devapi.luckytrip.co.uk/api/2.0/top_five'

  constructor(private http: HttpClient) { }

  getDestinations$ = (searchValue: string) =>
    this.http.get<GetDestinationsApiResponse>(`${this.baseApiUrl}/destinations?search_type=city_or_country&search_value=${searchValue}`)
      .pipe(
        map(response => response.destinations),
        filter(destinations => destinations !== null),
      )

  getDestinationById$ = (destinationId: number) =>
    this.http.get<GetDestinationsByApiRespense>(`${this.baseApiUrl}/destination?id=${destinationId}`)
      .pipe(
        map(response => response.destination)
      )

}
