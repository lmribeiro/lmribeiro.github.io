import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'https://';
  constructor(private http: HttpClient) { }

  get(endpoint: string): any {
    const url = this.API_URL + endpoint;
    return this.http.get(url);
  }
}
