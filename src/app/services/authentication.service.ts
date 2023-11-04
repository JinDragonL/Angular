import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtModel } from 'src/models/JwtModel';
import jwtDecode from 'jwt-decode';
import { JwtTokenModel } from 'src/models/JwtTokenModel';
import { TokenHandlerService } from 'src/services/token.handler.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  TOKEN_NAME = "access_token";

  baseUrl = environment.baseApi + "api/authentication";

  private token = new BehaviorSubject<JwtTokenModel | null>(null);

  token$ : Observable<JwtTokenModel | null>;

  constructor(private http: HttpClient, private tokenHandlerService: TokenHandlerService) { 
    this.token$ = this.token.asObservable();

    const tokenStorage = localStorage.getItem(this.TOKEN_NAME);

    if(tokenStorage) {
      const token = jwtDecode<JwtTokenModel>(tokenStorage);
      this.token.next(token);
      this.tokenHandlerService.showConfirmExpiredToken();
    }
  }

  login(md: any): Observable<JwtModel> {
    return this.http.post<JwtModel>(`${this.baseUrl}/login`, md).pipe(
      tap(token => {

        const tokenValue = jwtDecode<JwtTokenModel>(token.accessToken);

        this.token.next(tokenValue);

        localStorage.setItem(this.TOKEN_NAME, token.accessToken);
        
        this.tokenHandlerService.showConfirmExpiredToken();
      }),
      shareReplay()
    );
  }

  logout() {
    this.token.next(null);
    localStorage.removeItem(this.TOKEN_NAME);
    this.tokenHandlerService.destroyExpiredTokenInterval();
  }
}
