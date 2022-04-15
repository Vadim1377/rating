import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../assets/user';
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient ){ }
      
    getData(){
        return this.http.get('assets/users.json')
  }
  getUserId( id:number):User
  {
    var tmpUser = new User(id, "ivan", true, new Date());

    return tmpUser;
  }
}
