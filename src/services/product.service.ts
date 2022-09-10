import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = environment.baseApi + "api/product";

  constructor(private http: HttpClient) { 

  }

  getByCategoryId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-by-category/${id}`);
  }
}
