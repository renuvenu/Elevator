import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FloorsService {
  constructor(private http: HttpClient) {}

  getFloors() {
    return this.http.get('https://team2-api-naf.azurewebsites.net/api/Floor');
  }
}
