import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, fromEvent, map, Observable, of, switchMap, tap, concatMap, exhaustMap} from 'rxjs';
import { delay, distinctUntilChanged, mergeMap, take } from 'rxjs/operators';
import { CategoryService } from 'src/services/category.service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _serviceCategory: CategoryService) { }
  
  public message: string = "I am Robot";

  public number:number = 1500;

  public date: Date = new Date();

  public categories$: Observable<any[]> | undefined;


  ngOnInit(): void {

   this.categories$ = this._serviceCategory.getComboData();

    // const test$ = of([0,1,2,3,4]);

    //const event$ = fromEvent(document, "click");

    const target$ = fromEvent(<HTMLElement>document.getElementById("btn-onget"),"click");

    target$.pipe(
      delay(1000),
      //take(2),
      switchMap(data => {
        return this._serviceCategory.getComboData().pipe(
          delay(1000),
          concatMap(data => {
            return this._serviceCategory.getGetLicense();
          })
        );
      }),
    )
    .subscribe(console.log);

    // const target$ = fromEvent(<HTMLElement>document.getElementById("txt-input"),"keypress");

    // target$.pipe(
    //   //debounceTime(5000),
    //   distinctUntilChanged(),
    //   switchMap(data => {
    //     return this._serviceCategory.getComboData();
    //   }),
    // ).subscribe(console.log);
  }

  onGetCategories(){
    //   this._serviceCategory.getComboData()
    //   .pipe(
    //     debounceTime(5000),
    //     switchMap((data: any) => {
    //       return of(data);
    //     }),
    //   ).subscribe(console.log);


    // this._serviceCategory.getGetLicense()
    //   .pipe(
    //     map(value => value > 1),
    //   ).subscribe(console.log);

  }

}



