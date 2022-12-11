import { Observable } from "rxjs";

export interface AnimeCharacter {
    getCharacter(): Observable<any>
}