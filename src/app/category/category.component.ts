import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { CategoryModel } from '../../models/CategoryModel';
import { CategoryService } from '../../services/category.service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _categoryService: CategoryService,
            private _productService: ProductService) { }

  categories: CategoryModel[] = [];

  ngOnInit() {
    this.getList();


    //this._productService.getByCategoryId(1).subscribe(console.log);
  }

  getList(){
    this._categoryService.getList().subscribe((data) => {
      this.categories = data as CategoryModel[];
    });
  }

}
