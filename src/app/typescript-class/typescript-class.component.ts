export class Candy {

  private name: string;
  protected hasSugar: boolean;
  public useBefore: Date = new Date();

  constructor(label: string) {
  }

  getValue(): number {
    return 1;
  }


}

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-class',
  templateUrl: './typescript-class.component.html',
  styleUrls: ['./typescript-class.component.scss']
})

export class TypescriptClassComponent extends Candy implements OnInit {

  private readonly _mulipleNumber: number;
  private _currentValue: number = 1;

  constructor() {
    super("Chocolate");

    this.hasSugar;

    this.getValue();

    this._mulipleNumber = 2;
  }

  get getMultipleValue() {
    return this._currentValue * this._mulipleNumber;
  }

  set getMultipleValue(value: number) {
    this._currentValue = value;
  }

  ngOnInit(): void {

    const candy = new Candy("M&M");

  }

  increaseNumber(): void {
    this._currentValue += 1;
  }

  //accessor
  //getter - setter
  //static
  //extents
  //abstract - interface
  
}

