import { Component, Inject, Injector, OnInit } from '@angular/core';
import { finalize, forkJoin, take } from 'rxjs';
import { AnimeCharacter } from 'src/models/AnimeCharacter';
import { Payment } from 'src/models/Payment';

@Component({
  selector: 'app-typescript-interface',
  templateUrl: './typescript-interface.component.html',
  styleUrls: ['./typescript-interface.component.scss']
})

export class TypescriptInterfaceComponent implements OnInit, Payment {

  constructor(@Inject("AnimeCharacter")
              private _animeCharacterServices: AnimeCharacter[]) { }
  
  key: string;
  getPaymentByMethod(method: string): void {
    console.log('Pay by bank');
  }

  phones: Array<Phone> = [];

  mobilePhone: Phone = { color: 'red', label: 'Oppo', manufacturedYear: 2010 };

  ngOnInit(): void {

    const phone = new CellPhone("Apple", "black", 2017);

    phone.processing();

    // console.log(phone);

    this.phones.push(new CellPhone("Samsung","red", 2000, true));
    this.phones.push(new CellPhone("Nokia","white-black", 2000, true));


    this.phones.push({ label: "Apple", color: "black", manufacturedYear: 2000 });
    this.phones.push({ label: "Samsung", color: "white", manufacturedYear: 2000  });

    // console.log(this.phones);

    forkJoin(
      this._animeCharacterServices.map((_service: AnimeCharacter) => _service.getCharacter())
    )
    .subscribe(console.log);
  }
}

export interface Phone {
  readonly label: string;
  color: string;
  manufacturedYear: number;
  hasFlash?: boolean;
  //processing(): void;
}

export class CellPhone {
  label: string;
  color: string;
  manufacturedYear: number;
  hasFlash?: boolean;

  constructor(label: string, color: string, year: number, hasFlash?: boolean) {
    this.label = label;
    this.color = color;
    this.manufacturedYear = year;
    this.hasFlash = hasFlash;

    //
  }

  processing(): void {
    console.log('Phone can processing something');
  }
}

