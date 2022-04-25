import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, startWith } from 'rxjs';
import { Destination } from './models/destination.model';

interface ApiResponse<T> {
  new_destinations: T[],
  updated_destinations: T[]
  destinations: T[]
}
@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private baseApiUrl = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations'

  constructor(private http: HttpClient) { }

  getDestinations$ = (searchValue: string) =>
    this.http.get<ApiResponse<Destination>>(`${this.baseApiUrl}?search_type=city_or_country&search_value=${searchValue}`)
      .pipe(
        map(response => response.destinations),
        filter(destinations => destinations !== null),
      )
}
