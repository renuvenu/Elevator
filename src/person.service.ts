import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersonDetail(id: any) {
    return this.http.get('https://localhost:7160/login', {
      headers: new HttpHeaders({ userId: id }),
    });
  }

  verifyCapacity() {
    return this.http.get('https://localhost:7160/verifyCapacity');
  }

  addPersonDetailInLift(data: any){
    return this.http.post('https://localhost:7160/api/PersonDetailsInLift',data)
  }

  updatePersonDetailInLift(id:string, status:string){
    return this.http.put(`https://localhost:7160/api/PersonDetailsInLift/${id}/${status}`,{})
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
