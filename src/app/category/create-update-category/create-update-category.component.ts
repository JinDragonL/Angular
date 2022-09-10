import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/services/category.service.service';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {
  
  private id: number = 0;

  constructor(private formBuilder: FormBuilder, 
              private _categoryService: CategoryService,
              private _activatedRoute : ActivatedRoute) { }

  registerFrom = this.formBuilder.group({
    id:[0],
    name: ["", Validators.required],
    description: [""]
  });


  get f() {
    return this.registerFrom.controls;
  }

  //domain/10/
  //?id=10&name=abc

  ngOnInit(): void {
   this._activatedRoute.params.subscribe(params => {
    this.id = params["id"];
   });
   this.id = 5;
   this.loadData();
  }

  loadData(){
    if(this.id) {
      //call api

      this.registerFrom.get("name")?.patchValue("abc");
      this.registerFrom.get("description")?.patchValue("this is description");
    }
  }

  onSubmit(): void {
    let id = this.registerFrom.controls["id"].value;
    let name = this.registerFrom.controls["name"].value;
    let description = this.registerFrom.controls["description"].value;

    this._categoryService.update({ id: id, name: name, description: description})
                        .subscribe((resp) => {

                        });

  }


}
