import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, 
        Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy { //OnChanges, , DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked 

  constructor(private _homeService: HomeService) { }

  name:string;
  
  isShow:boolean = false;
  
  description:string;
  
  arr = [1,2,3,4,5];
  
  count:number = 1;

  objTest = { 
    name: "abc this is descriptions for test", 
    id: 1 
  };


  formatDate(){

  }

  /***
   * Event On Chagne 
   */
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ngOnChanges", changes);
  // }

  ngOnInit() {

    // let arrNumbers$ = new Observable(subcriber => {
    //   subcriber.next(this.arr);
    // });

    let arrNumbers$ = from(this.arr);

    arrNumbers$.subscribe(console.log);

    this._homeService.sendMessage('this is message test');

  }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck");
  // }

  // ngAfterContentInit(): void {

  //   console.log("ngAfterContentInit");
  // } 
  
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked");
  // }

  public onSendMsg(){
    //this._homeService.sendMessage("I am Robot");
    this.isShow =!this.isShow;


    //this.objTest = Object.assign({}, this.objTest);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }


}

