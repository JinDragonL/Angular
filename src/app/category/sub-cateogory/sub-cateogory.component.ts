import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-cateogory',
  templateUrl: './sub-cateogory.component.html',
  styleUrls: ['./sub-cateogory.component.scss']
})
export class SubCateogoryComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  key: number;

  ngOnInit(): void {

    this.router.params.subscribe(param => {
      this.key = param['id'];
    })

  }

}
