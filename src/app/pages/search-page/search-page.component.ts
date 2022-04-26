import { isPlatformWorkerApp } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, Observable, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DestinationsService } from 'src/app/destinations.service';
import { LoaderService } from 'src/app/loader.service';
import { Destination } from 'src/app/models/destination.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnDestroy{

  bgImageUrl =  'url("../../../assets/images/background_1.png")';

  constructor(
    private service: DestinationsService,
    public loader: LoaderService,
    private router: Router) {}

  onSearchClick$ = new Subject<string>()
  onDestroy$ = new Subject()
  isFirstLoad = true;

  destinations$: Observable<Destination[]> = this.onSearchClick$.pipe(
    startWith(''),
    tap(() => this.loader.isLoading(true)),
    switchMap((searchValue: string) => this.service.getDestinations$(searchValue) as Observable<Destination[]>),
    tap(() => {
      this.loader.isLoading(false)
      this.isFirstLoad = false;
    }),
    takeUntil(this.onDestroy$)
  )

  showNoDataMessage$: Observable<boolean> = this.destinations$
  .pipe(
    tap((v) => console.log('dest ==> ', v)),

    switchMap((items: Destination[]) => this.loader.isLoading$
      .pipe(map((isLoading: boolean) => isLoading === false && items.length === 0))
    ),
    startWith(false),
    tap(console.log),
  )

  onCardClick(destinationId: number) {
    this.router.navigate(['details', destinationId])
  }

  ngOnDestroy() {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }

}
