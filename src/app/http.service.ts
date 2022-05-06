import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../assets/user';
// import idb from 'idb';
import { Key, NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient , private dbService: NgxIndexedDBService){ 
      this.dbService.count('users').subscribe((peopleCount) => {
        if (peopleCount == 0){
          this.dbService
          .bulkAdd('users', [
            {
              user_name: `Николай Премин Николаевич`,
              user_bday: `02.01.2000`,
              user_photo: `C:/photo.jpg`
            },
            {
              user_name: `Абдул Мохаммед Александрович`,
              user_bday: `21.11.1990`,
              user_photo: `C:/photo.jpg`
            },
          ])
          .subscribe((result) => {
            console.log('result: ', result);
          });
        }
      },
        error => {
          console.log(error);
        }      );
   
   
    }
  addUser(userName: string, userBday: string, userPhoto: string) {
    this.dbService.bulkAdd('users', [
      {
        user_name: userName,
        user_bday: userBday,
        user_photo: userPhoto
      }]).subscribe((result) => { console.log('result: ', result); });
  }
  updateUser(userId: Key, userName: string, userBday: string, userPhoto: string) {
    this.dbService.update('users', {
      id: userId,
      user_name: userName,
      user_bday: userBday,
      user_photo: userPhoto,
    }).subscribe((storeData) => {
      console.log('storeData: ', storeData);
    });
  }
  deleteUser(userId: number) {
    this.dbService.bulkDelete('users', [userId]).subscribe((result) => {
      console.log('result: ', result);
    });
  }
  getData() {

      return this.dbService.getAll('users');

  }
  getUserId( id:number)//:User
  {
    //var tmpUser = new User(id, , new Date(),"C:/photo.jpg");
    //return this.dbService.getAll('people');
    return this.dbService.getByKey('users', id).subscribe((users) => {
      console.log(users);
    });
  }
}
