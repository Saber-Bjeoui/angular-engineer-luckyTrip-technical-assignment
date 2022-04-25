import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new BehaviorSubject<boolean>(false)
  isLoading$ = this.loaderSubject.asObservable();

  isLoading(status: boolean) {
    this.loaderSubject.next(status);
  }
}
