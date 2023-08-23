import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingBarService {

  private loading = new BehaviorSubject<boolean>(false);

  loading$ = this.loading.asObservable();

  constructor() { }

  startProgressing()  {
    this.loading.next(true);
  }

  endProgressing() {
    this.loading.next(false);
  }
}
