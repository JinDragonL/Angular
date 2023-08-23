import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';
import { LoadingBarService } from 'src/services/loading-bar.service';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {

  constructor(private loadingBarService: LoadingBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isShowLoading = request.params.get('isShowLoading');

    if(JSON.parse(isShowLoading ?? 'false')) {
      this.loadingBarService.startProgressing(); 

      return next.handle(request).pipe(
        finalize(() => {
          this.loadingBarService.endProgressing();
        }),
        catchError(() => {
          this.loadingBarService.endProgressing();

          throw "Fail to handle the request";
        })
      );
    }

    return next.handle(request);
  }
}
