import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = environment.baseApi + "api/category";

  constructor(private http: HttpClient) { 

  }

  getList() {
    return this.http.get(this.baseUrl);
  }
  
}
