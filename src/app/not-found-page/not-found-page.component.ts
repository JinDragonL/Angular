import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `<h3>Not Found Page</h3>
            <p> Please contact to Administrator to get more information</p>
            `
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  student = {
    name: 'A',
    age: 100
  }

  ngOnInit() {
  }

}
