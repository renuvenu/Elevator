

import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';




@Component({

  selector: 'app-user-history',

  templateUrl: './user-history.component.html',

  styleUrls: ['./user-history.component.css'],

})

export class UserHistoryComponent {

  searchForm: FormGroup;

  searchResult: any;

  userName: any;

  officeName: any;

  searchHistory: any;

  isSearch: boolean = false;




  displayedColumns: string[] = [

    'Id',

    'Name',

    'Office Name',

    'Weight',

    'From',

    'To',

    'Date&Time',

    'Status',

  ];

  // dataSource:searchHistory




  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.searchForm = this.fb.group({

      userId: ['', Validators.required],

    });

  }

  get userid() {

    return this.searchForm.get('userId');

  }




  searchuserHistory(issearch: boolean) {

    this.isSearch = issearch;




    const userId = this.searchForm.get('userId')?.value;

    if (userId) {

      this.http

        .get<any[]>(

          `https://team2-api-naf.azurewebsites.net/api/PersonDetailsInLift/user/${userId}`

        )

        .subscribe((data) => {

          this.searchResult = data;

          this.searchHistory = this.searchResult.personDetails.map(

            (history: any) => {

              return {

                ...history,

                travelledDateTime: this.getDateTime(history.travelledDateTime),

              };

            }

          );

          this.userName = this.searchResult['userName'];

          this.officeName = this.searchResult['officeName'];

          console.log(this.searchHistory);




          console.log(this.searchResult);

        });

    } else {

      console.log('user not found');

    }

  }




  getDateTime(dateTime: string) {

    let arr = dateTime.split(' ');

    let date = arr[0].split('-').reverse().join('-');

    let time = new Date(`${arr[0]}T` + arr[1] + 'Z').toLocaleTimeString(

      'en-US',

      { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }

    );

    return date + ' ' + time;

  }

}


