import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, fromEvent, Observable, take } from 'rxjs';
import { CategoryService } from 'src/services/category.service.service';

@Component({
  selector: 'app-scroll-rxjs',
  templateUrl: './scroll-rxjs.component.html',
  styleUrls: ['./scroll-rxjs.component.scss']
})
export class ScrollRxjsComponent implements OnInit {
  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  items$: Observable<any> = this.obsArray.asObservable();
  currentPage: number = 0;
  pageSize: number = 10;
  public dataBinding:any;
  public skip: number = 0;
  public currentPos: number = 0;
  public isScrollDown: boolean = true;
  public isUpdated:boolean = false;
  public dataSource: any = {
    prevData: [],
    currentData: []
  };
 
  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {

    this._categoryService.getArray(0).subscribe(
      (data) => { 
        this.dataSource.currentData = data;
        this.dataSource.prevData = data;

        this.dataBinding = this.dataSource.currentData;
      
      }
    );

    // this.appService.getData(this.currentPage, this.pageSize).subscribe((data: any) => {
    //   this.obsArray.next(data);
    // });

    // const content = document.querySelector('.items');
    // const scroll$ = fromEvent(content!, 'scroll').pipe(map(() => { return content!.scrollTop; }));

    // scroll$.subscribe((scrollPos) => {
    //   let limit = content!.scrollHeight - content!.clientHeight;
    //   if (scrollPos === limit) {
    //     this.currentPage += this.pageSize;
    //     forkJoin([this.items$.pipe(take(1)), this.appService.getData(this.currentPage, this.pageSize)]).subscribe((data: Array<Array<any>>) => {
    //       const newArr = [...data[0], ...data[1]];
    //       this.obsArray.next(newArr);
    //     });
    //   }
    // });

  }

}
