import { Component, OnInit } from '@angular/core';
import { concat, debounceTime, filter, forkJoin, fromEvent, map, mergeMap, of, reduce, switchMap, take,tap,
   takeWhile, delay, takeLast, distinct, first, distinctUntilChanged, last, Observable, finalize, takeUntil, Subject } from 'rxjs';
import { CategoryService } from 'src/services/category.service.service';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.scss']
})
export class Observable2Component implements OnInit {

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {

    this._categoryService.getArray(this.skip).subscribe(
      (data) => { 
        this.dataSource.currentData = data;
        this.dataSource.prevData = data;

        this.dataBinding = this.dataSource.currentData;
      
      }
    );


    // Pipe
    // Filtering: filter, take, debounceTime, takeWhile, ....
    // Transformation: map, scan, reduce, mergeMap, switchMap.... 
    // Combination: forkJoin, concat...

    //const target$ = of(1, 2, 3, 4, 5);

    // target$.pipe(
    //   map(value => value * 10),
    //   filter(value => value > 30)
    // ).subscribe(console.log);

    // this._categoryService.getGetLicense().pipe(
    //   map(value => value > 0)
    // ).subscribe(console.log);

    //  target$.pipe(
    //   map(value => value * 10),
    //   //takeWhile(value => value < 30),
    //   reduce((prevValue, currentValue) => {
    //     return prevValue + currentValue;
    //   })
    //  ).subscribe(console.log); 

    // target$.pipe(
    //   take(1)
    // ).subscribe(console.log);

    const targetButton$ = fromEvent(<HTMLElement>document.getElementById("btn-submit"), "click");

    targetButton$.pipe(
      map(target => target)
    ).subscribe(console.log);

    // targetButton$.pipe(
    //   delay(2000),
    //   mergeMap(() => {
    //     return this._categoryService.getComboData();
    //   })
    // ).subscribe(console.log);

    //forkJoin  

    // concat(
    //   this._categoryService.getComboData(),
    //   this._categoryService.getComboData()
    // ).subscribe(console.log);

    //takeUntil
    //delay
    //finalize()
    //exhaustMap
    //subject/ behaviorSubject
    //replaySubject
    //catchError


    const scroll$ = fromEvent(<HTMLElement>document.getElementById("dv-content"), "scroll");

    scroll$.pipe(
      map(({ target }) => {

        const currentPosition = this.calculateScroll(target);

        if (currentPosition < 0.15 && !this.isScrollDown) {
          if(this.skip > 50) {
            this.skip -= 50;
          }
          else
          {
            this.skip = 0;
          }
          return "up";
        }
        else if (currentPosition > 0.8 && this.isScrollDown) {
            this.skip += 50;
            return "down";
        }
        else {
          return '';
        }
      }),
      filter(data => data !== ''),
      // tap(() => {
      //   this.scrollSubject.next(scroll$);
      // })
      //distinctUntilChanged()
    ).pipe(
      takeLast(1),
      //takeUntil(targetButton$)
    ).subscribe((data)=>{

      this._categoryService.getArray(this.skip).subscribe(
        (data) => { 
          
          this.dataSource.prevData = this.dataSource.currentData;

          this.dataSource.currentData = data;
        
          if(this.isScrollDown) {
            this.dataBinding = [...this.dataSource.prevData, ...this.dataSource.currentData];
          }
          else{
            this.dataBinding = [...this.dataSource.currentData, ...this.dataSource.prevData ];
          }

          this.scrollSubject.next(scroll$);

        }
      );
    });

    this.scrollSubject.next(scroll$);
  }

  private scrollSubject = new Subject();
  
  public skip: number = 0;
  public currentPos: number = 0;
  public isScrollDown: boolean = true;
  public dataBinding: any;
  public isUpdated:boolean = false;
  public dataSource: any = {
    prevData: [],
    currentData: []
  };
 

  calculateScroll(element: any) {
    const { scrollTop, scrollHeight, clientHeight } = element;
    //console.log(element);

    let currentScrollPos = (scrollTop / (scrollHeight - clientHeight));

    if (currentScrollPos > this.currentPos) {
      this.isScrollDown = true;
      //console.log('down');
    }
    else {
      this.isScrollDown = false;
      //console.log('up');
    }

    this.currentPos = currentScrollPos;

    return currentScrollPos;
  }
}



