import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-child1',
  templateUrl: './change-detection-child1.component.html',
  styleUrls: ['./change-detection-child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChangeDetectionChild1Component implements OnInit {


  @Input() message: string;
  @Input() cat: any;

  constructor() { }

  ngOnInit(): void {
  }


}
