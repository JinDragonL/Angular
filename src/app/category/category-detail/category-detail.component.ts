import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  products: string[];

  constructor(private route: ActivatedRoute) { 

    this.route.data.pipe(
      pluck("dataProducts")
    )
    .pipe(
      map(array => array.map((item:any) => { return item.ProductName}))
    )
    .subscribe((data: any[]) => {
      this.products = data;
    })

  }

  ngOnInit(): void {
  }

}
