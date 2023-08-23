import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/CategoryModel';
import { CategoryService } from '../../services/category.service.service';
import { Observable,  debounceTime,  delay,  map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories$: Observable<CategoryModel[]>;
  newCategories$: Observable<any>;

  ngOnInit() {
    this.getList();
  }

  getList() {

    this.categories$ = this.categoryService.getList().pipe(
      shareReplay(1),
    );

    this.newCategories$ = this.categories$.pipe(
      map(item => item.filter(x => x.Id % 2 === 0))
    );

  }

}

// Async Pipe