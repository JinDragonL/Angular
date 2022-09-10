import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss']
})
export class ChangeDetectionStrategyComponent implements OnInit {

  constructor() { }

  message: string = 'I am Robot';
  count = 0;

  cat: any = {
    age: 3,
    color: 'black'
  }

  ngOnInit(): void {



  }


  onChangeAge() {
    this.cat.age = Math.random() * 10;
  }

  onChangeCat() {
    this.count += 1;

    this.cat = {
      age: this.count,
      color: `white ${(new Date).getMilliseconds()}`
    }
  }

  onChangeMessage(event:any) {
    this.message = event.value;
  }

}
