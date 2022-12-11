import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeCharacter } from 'src/models/AnimeCharacter';

@Injectable({
  providedIn: 'root'
})
export class YugiohServiceService  implements AnimeCharacter {

  constructor(private _httpClient: HttpClient) { }

  getCharacter(): Observable<any> {
    return this._httpClient.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician');
  }
}
