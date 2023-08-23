import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../material-ui/material-ui.component';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class AdvancedFormComponent implements OnInit {

  constructor(private formBuild: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

   // console.log(data);
  }

  formGroup = this.formBuild.group({
    code: ['', [Validators.required, Validators.minLength(3)]],
    method: ['', { validators: [Validators.required] }],
    shipping: [0],
    products: this.formBuild.array([this.formBuild.group({
      productName: [''],
      color: ['#000']
    })])
  });


  get products() {
    return this.formGroup.controls['products'] as FormArray;
  }

  //Strictly Typed Form
  // support Strongly-type

  ngOnInit(): void {

    //this.formGroup.get('code')?.patchValue("AZZ000");

    this.formGroup.patchValue({
      code: 'VC6666'
    });

    this.formGroup.setValue({
      code: 'BFFFF',
      method: 'cash',
      shipping: 100,
      products: [
        {
          color: '#FFF',
          productName: 'ABC'
        }
      ]
    });


    const code = this.formGroup.value.code;

    //this.formGroup.get('code')?.disable();

    this.formGroup.controls.code.disable();

  }

  onAddColor(): void {
    this.products.push(new FormGroup({
      productName: new FormControl(),
      color: new FormControl('#000')
    }));

  }

  removeColor(index: number): void {
    this.formGroup.controls.products.removeAt(index);
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  //formbuilder
  //formgroup

  test() {

    // const id = 12;
    // const name = 'Robot';
    // const keyName = 'name';


    const obj = {
      id: 12,
      name: 'Robot',
      price: {
        sale: 100,
        cost: 90
      }
    }

    const {
      id,
      price:
      {
        sale,
        cost
      },
      ...rest // imply { name: 'Robot'}, is rest part of object
    } = obj;

    console.log(id, name, sale);


    //check property of object
    obj.hasOwnProperty('name') // check it is exist
    Object.keys(obj) //return all property ['id', 'name', 'price']

    Object.assign({}, obj) // copy and merge into { }
    const newObj = { ...obj } //new way is shorthanding to write code
    //...obj is to merge new object of OBJ

    const newDeepClone = JSON.stringify(obj);
    const newNewObj = JSON.parse(newDeepClone);

    typeof obj              // 'object'
    obj instanceof Object   //true

  }





}
