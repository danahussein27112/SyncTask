import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegService {
  private _countriesURL: string = "/assets/countries.json";
  private _companiesURL: string = "/assets/companies.json";
  
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<String[]> {
    return this.http.get<String[]>(this._companiesURL);
  }
}
