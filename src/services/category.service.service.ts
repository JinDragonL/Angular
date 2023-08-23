import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from 'src/models/CategoryModel';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  baseUrl = environment.baseApi + "api/category";

  constructor(private http: HttpClient) { }

  getList(isShowLoading: boolean = true): Observable<CategoryModel[]> {

    const params = new HttpParams().set('isShowLoading', false);

    return this.http.get<CategoryModel[]>(this.baseUrl, { params });
  }
  
  update(obj: any): Observable<any> {
    return this.http.post(this.baseUrl + "/createupdate", obj);
  }

  getComboData(): Observable<any> {
    return this.http.get(this.baseUrl + "/ddl");
  }

  getGetLicense(): Observable<any> {
    return this.http.get(this.baseUrl + "/get-available-license");
  }

  getArray(skip:number): Observable<any> {
    return this.http.get(this.baseUrl + "/get-array-number?skip=" + skip);
  }
}
