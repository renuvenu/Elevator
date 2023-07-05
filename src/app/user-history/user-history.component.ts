import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent {
  searchForm: FormGroup;
  searchResult: any; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = this.fb.group({
      userId: ['',Validators.required]
    });
  }
  get userid() {
    return this.searchForm.get('userId');
  }


  searchuserHistory() {
    const userId = this.searchForm.get('userId')?.value;
    if (userId) {
      this.http.get<any[]>(`https://localhost:7160/api/PersonDetailsInLift/user/${userId}`)
        .subscribe(data => {
          console.log(data);         
          this.searchResult = data;
        });
        
        
    }
  }
}
