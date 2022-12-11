import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeCharacter } from 'src/models/AnimeCharacter';

@Injectable({
  providedIn: 'root'
})

export class PokemonServiceService implements AnimeCharacter {

  constructor(private _httpClient: HttpClient) { }

  getCharacter(): Observable<any> {
    return this._httpClient.get('https://pokeapi.co/api/v2/berry/2');
  }
  
}
