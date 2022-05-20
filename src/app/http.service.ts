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
              user_name: `Премин Николай Николаевич`,
              user_bday: `2000-01-05`,
              user_photo: `C:/photo.jpg`
            },
            {
              user_name: `Мохаммед Абдул Александрович`,
              user_bday: `1990-11-21`,
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
//  getImenina(i: number) {
//    list!: User[];
//    this.getData().subscribe((data: any) => {

//      this.list = data;

//      for (var i = 0; i < this.list.length; i++) {
//        var bdayDate = new Date(this.list[i].user_bday);//.transform(new Date(this.list[i].user_bday),'dd/MM/yyyy');
//        let myDate = new Date();
//        console.log(myDate);
//        this.list[i].days = this.inBetween(myDate, bdayDate);
//        myDate = new Date();
//        console.log(myDate);
//        this.list[i].ubiley = this.Ubiley(myDate, bdayDate);
//      }
//      this.list.sort(function (a, b) {
//        if (a.days > b.days) {
//          return 1;
//        }
//        if (a.days < b.days) {
//          return -1;
//        }
//        // a должно быть равным b
//        return 0;
//      });
//      /*let now = new Date().getTime();
//      var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
//      for (var i=0;i<this.list.length;i++){
//        var dt = new Date(this.list[i].day.replace(pattern,'$3-$2-$1')).getTime();
//        var res= (dt-now) / 86400000     
//        res=Math.ceil(res)
//        this.list[i].days=res
//      }
//      */
//    }
//    return "Иванов В.В.";

//}
}
