import { Component } from '@angular/core';
import { HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 tab: number;
  userid: any[];
  showdetailuser: boolean=false;

  constructor(private httpService: HttpService){}

 changeTab(val){
   this.tab=val
 }
 public selectName(val: number): void {
  this.finduser(val)
  
  
 }
 finduser(userid){
  this.showdetailuser=false;
  this.httpService.getData().subscribe((data:any) => {
    var userdata=data["userList"]
    for (var i=0; i<userdata.length; i++)
    {
        if (userdata[i].number==userid){
            this.userid=userdata[i]
        }
    }
    this.showdetailuser=true;
});
    
 }
 
}
