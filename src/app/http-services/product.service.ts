import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductPostModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  private apiUrl = 'https://api.restful-api.dev';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/objects`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/objects/${id}`);
  }

  createProduct(postData: ProductPostModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/objects`, postData);
  }}
