import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  /** 
    * Get all available products
    * */
  getAllProducts(): Observable<any> {
    const url = 'https://wpmyaccountapi.assecobs.pl/api/products'
    return this.http.get<Observable<any>>(url);
  }
}
