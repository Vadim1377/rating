import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../assets/user';
// import idb from 'idb';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable()
export class HttpService{
//  sqlite3 = require('sqlite3').verbose();
    constructor(private http: HttpClient , private dbService: NgxIndexedDBService){ 
      this.dbService.count('people').subscribe((peopleCount) => {
        if (peopleCount = 0){
          this.dbService
          .bulkAdd('people', [
            {
              name: `charles number ${Math.random() * 10}`,
              email: `email number ${Math.random() * 10}`,
            },
            {
              name: `charles number ${Math.random() * 10}`,
              email: `email number ${Math.random() * 10}`,
            },
          ])
          .subscribe((result) => {
            console.log('result: ', result);
          });
        }
      });
   
   
    }
      
    getData(){
      return this.dbService.getAll('people');

  }
  getUserId( id:number):User
  {
    var tmpUser = new User(id, "ivan", true, new Date());

    return tmpUser;
  }
}
