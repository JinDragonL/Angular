import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, filter, map, Observable, of, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable()

export class InterceptorRequest implements HttpInterceptor {

    constructor() { }

    private authenticationService = inject(AuthenticationService);
    private router = inject(Router);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let codeApi = "123";

        return next.handle(req.clone({ setHeaders: { codeApi } })).pipe(

            switchMap((response: any) => {
                return of(response);
            }),
            catchError((error: HttpErrorResponse) => {
                if(error.status === 401) {
                    this.authenticationService.logout();
                    this.router.navigate(['/auth']);
                }

                throw error.message;
            })
        )
    }
}




