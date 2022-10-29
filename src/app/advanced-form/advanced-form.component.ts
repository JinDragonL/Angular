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
    const newObj = {...obj} //new way is shorthanding to write code
    //...obj is to merge new object of OBJ

    const newDeepClone = JSON.stringify(obj);
    const newNewObj = JSON.parse(newDeepClone);

    typeof obj              // 'object'
    obj instanceof Object   //true



  }





}
