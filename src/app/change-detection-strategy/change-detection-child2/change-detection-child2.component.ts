import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-child2',
  templateUrl: './change-detection-child2.component.html',
  styleUrls: ['./change-detection-child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionChild2Component implements OnInit {

  @Input() message: string;
  @Input() cat: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
