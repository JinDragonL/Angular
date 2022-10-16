import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent implements OnInit {

  constructor(private formBuild: FormBuilder) { }
  formGroup: FormGroup;

  get products() {
    return this.formGroup.controls['products'] as FormArray;
  }

  ngOnInit(): void {
    // this.formGroup = new FormGroup({
    //   name: new FormControl('', ),
    //   products: new FormArray([new FormGroup({
    //     productName: new FormControl(),
    //     color: new FormControl('#000')
    //   })])
    // });

    this.formGroup = this.formBuild.group({
      name: ['', []],
      products: this.formBuild.array([this.formBuild.group({
        productName: [''],
        color: ['#000']
      })])
    })
    

  }

  onAddColor() {
    this.products.push(new FormGroup({
        productName: new FormControl(),
        color: new FormControl('#000')
    }));

  }


  onSubmit() {
    console.log(this.formGroup);
  }

  //formbuilder
  //formgroup

}
