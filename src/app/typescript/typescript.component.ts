import { Component, OnInit } from '@angular/core';
import { DIRECTION } from '../helper/enum';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})

export class TypescriptComponent implements OnInit {
  
  name: string = "I am Robot";
  age: number;
  isShow: boolean;
  foods: Array<string>;
  description: any; 

  bien: [string, number, boolean]; //Tuple
  bien2: null | undefined; //union type

  action: Action;

  constructor() { }

  ngOnInit(): void {

    this.description = "abc";

    this.getMargin(50);
    this.getMargin("50px");

    this.action = {
      bad: 'bad thing'
    };

    this.action  = this.getHeight(100, this.action);

    //optional chaining

    const material: any = {
      temperature: 'heat' || 'cold',
      solid: true
    };

    const arr:any = undefined;

    if(arr?.length) { //undefined

    }
    else
    {
      //console.log('optional chaning works');
    }

    const bien = material?.temperature?.a ?? 150;

    console.log(bien);
  }

  getName(name: string): string {
    return `${name}`;
  }

  getMargin(value: string | number | boolean): string {

    if(typeof value === 'string') {
      return value;
    }

    return `${value}px`;
  }

  getHeight(value: any, action: Action): Action {

    const height = false;

    if(height) { //null, undefine, '' is string, 0 is number, true 
      console.log(height);
    }
    else
    {
      console.log('no data');
    }

    return action;
  }

}

type Action = {
  bad: string,
  good?: string
}


