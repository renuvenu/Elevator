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

  addPersonDetailInLift(data: any){
    return this.http.post('https://team2-api-naf.azurewebsites.net/api/PersonDetailsInLift',data)
  }

  updatePersonDetailInLift(id:string, status:string){
    return this.http.put(`https://team2-api-naf.azurewebsites.net/api/PersonDetailsInLift/${id}/${status}`,{})
  }
}
