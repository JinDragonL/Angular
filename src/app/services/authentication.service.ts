import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtModel } from 'src/models/JwtModel';
import jwtDecode from 'jwt-decode';
import { JwtTokenModel } from 'src/models/JwtTokenModel';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  
  baseUrl = environment.baseApi + "api/authentication";

  private token = new BehaviorSubject<JwtTokenModel | null>(null);

  token$ : Observable<JwtTokenModel | null>;

  constructor(private http: HttpClient) { 
    this.token$ = this.token.asObservable();
  }

  login(md: any): Observable<JwtModel> {
    return this.http.post<JwtModel>(`${this.baseUrl}/login`, md).pipe(
      tap(token => {

        const tokenValue = jwtDecode<JwtTokenModel>(token.accessToken);

        this.token.next(tokenValue);
      }),
      shareReplay()
    );
  }

  logout() {
    this.token.next(null);
  }
}
