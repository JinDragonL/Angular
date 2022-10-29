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

  constructor() { }

  ngOnInit(): void {
    this.age = 30;

    this.bien = ['Robot', 100, true];

    this.getName('Danny');

    this.bien2 = null;

  }

  getName(name:string): string {
    return `${name}`;
  }


}
