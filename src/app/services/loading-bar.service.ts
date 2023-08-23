import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingBarService {

  private loading = new BehaviorSubject<boolean>(false);

  show$ = this.loading.asObservable();

  constructor() { }

  startProgress() {
    this.loading.next(true);
  }

  endProgress() {
    this.loading.next(false);
  }

}
