import { Input,Component } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
    selector: 'detailuser',
    templateUrl: './detailuser.component.html',
  styleUrls: ['../app.component.css'],
})
export class DetailuserComponent { 
  @Input() userid: any = [];
  @Input() admin: any;
  status: boolean = true;
constructor(private httpService: HttpService){
    this.status = true;
}
closemodal(){
    this.status = false;
  var modal = document.getElementById('modal');
  modal!.className = 'modal closemodal';
  }
  addUser(name: string, date: string, photo: string) {
    this.httpService.addUser(name, date, photo);
  }
  deleteUser(id: number) {
    this.httpService.deleteUser(id);
  }
}
