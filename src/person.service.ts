import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersonDetail(id: any) {
    return this.http.get('https://team2-api-naf.azurewebsites.net/login', {
      headers: new HttpHeaders({ userId: id }),
    });
  }

  verifyCapacity() {
    return this.http.get('https://team2-api-naf.azurewebsites.net/verifyCapacity');
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
