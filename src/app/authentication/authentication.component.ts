import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnChanges {

  @Output("company") company: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public name: any;

  ngOnChanges(changes: SimpleChanges): void {
      // Do your check here
      console.log("name: ",this.name);
  }
}
