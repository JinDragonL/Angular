import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';

@Injectable()

export class InterceptorRequest implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let codeApi = "123";

        return new Observable((obser: any) => {

            next.handle(req.clone({ setHeaders: { codeApi } }))
                .subscribe((response: any) => {
                    return of(response);
                },
                (error: any) => {
                    alert(error.message);
                });

        })

    }
}




