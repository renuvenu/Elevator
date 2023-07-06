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
  userName:any 
  searchHistory:any
  

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
      this.http.get<any[]>(`https://team2-api-naf.azurewebsites.net/api/PersonDetailsInLift/user/${userId}`)
        .subscribe(data => {       
          this.searchResult = data;
          this.searchHistory=this.searchResult.personDetails.map((history: any) => {
            return {
              ...history,
              travelledDateTime: this.getDateTime(history.travelledDateTime),
            }
          });
          this.userName=this.searchResult['userName']
          console.log(this.searchHistory);
          
          console.log(this.searchResult);
          
        });
        
        
    }
  }

  getDateTime(dateTime: string){
    let arr = dateTime.split(" ")
    let date = arr[0].split('-').reverse().join('-')
    let time = new Date(`${arr[0]}T` + arr[1] + 'Z')
    .toLocaleTimeString('en-US',
      {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
    return date+" "+time
    
  }
}
