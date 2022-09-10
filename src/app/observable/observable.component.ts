import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of, Subject, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {
  
  subscription : Subscription;

  constructor() { }

  ngOnInit(): void {

   //static data
   //event: click/keyup/
   //http request
   //interval (timer)


   const source$ = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next("test")
    subscriber.next({ id: 1, name: 'robot'})
   })

   source$.subscribe(console.log); 
 
   const observer ={
    next: (target:any) => console.log("element", target),
    complete: ()=> console.log("completed")
   }

   const target$ = fromEvent(<HTMLElement>document.getElementById('btn-submit'),"click");

   this.subscription = target$.subscribe(observer);

   //of()

   const testVal$ = this.funcTest();
   
   testVal$.subscribe(observer);

   const obserTarget$ = of([1,2,3,4,5]);

   obserTarget$.subscribe(observer);

   const obserTarget1$ = from([1,2,3,4,5]);
   obserTarget1$.subscribe(observer);


  }

  funcTest(): Observable<any>{

    return of(100);

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
  person: string[] = [];

  persons: string[][] = [];

  

}

