import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  public _behaviorSubject = new BehaviorSubject<any>(null);

  constructor() { }

  /**
   *
   * Event to send message to another component
   * @param {string} msg
   * @memberof HomeService
   */
  public sendMessage(msg: string) {
    this._behaviorSubject.next(msg);
  }

}
