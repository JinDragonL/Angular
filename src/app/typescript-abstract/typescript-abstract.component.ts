export interface Game {
  numberOfPlayer: number;
  play(): void;
}

export interface TestGame {
  isTest: boolean;
}

export abstract class Game2 implements Game {
  abstract numberOfPlayer: number;
  abstract play(): void;

 constructor() {

 }

}


// Fighting, Adventure, Strategy

 class Fighting extends Game2 {

  constructor(){
    super();
  }

   numberOfPlayer: number = 2;
   play(): void {
     console.log('combat between 2 players');
   }

 }

 class Adventure implements Game, TestGame {
   isTest: boolean;
   numberOfPlayer: number = 1 | 2;
   play(): void {
    console.log('find way to win all level of game');
   }

 }

 class Strategy implements Game {
   numberOfPlayer: number = 1;
   play(): void {
    console.log('make decision to win game.');
   }

 }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-abstract',
  templateUrl: './typescript-abstract.component.html',
  styleUrls: ['./typescript-abstract.component.scss']
})

export class TypescriptAbstractComponent implements OnInit {

  game: Game;
  game2: Game2;

  constructor() { 
  }

  ngOnInit(): void {

    if(this.game2 instanceof Game2) {  //abstract class

    }

    // if(this.game instanceof Game) {  //interface

    // }
  
  }

}



//Both
// for inheriting
// can not have instance
// method() --> not have body


//Abstract 
  //single inheritance
  //constructor
  //can intial property/method in private normally

//Interface
  //multiple inheritance
  //not constructor

