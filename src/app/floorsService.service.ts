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

  //   addSaving(data: any) {
  //     return this.http.post(
  //       `https://648c27378620b8bae7ec55df.mockapi.io/savings`,
  //       data
  //     );
  //   }

  //   editSaving(id: string, data: any) {
  //     return this.http.put(
  //       `https://648c27378620b8bae7ec55df.mockapi.io/savings/${id}`,
  //       data
  //     );
  //   }

  //   deleteSaving(id: string) {
  //     return this.http.delete(
  //       `https://648c27378620b8bae7ec55df.mockapi.io/savings/${id}`
  //     );
  //   }

  //   getSavingDetail(id: string) {
  //     return this.http.get(
  //       `https://648c27378620b8bae7ec55df.mockapi.io/savings/${id}`
  //     );
  //   }
}
