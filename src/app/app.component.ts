import { Component } from '@angular/core';
import { HttpService} from './http.service';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_progect';
 tab!: number;
  userid!: any[];
  value: Date = new Date();
  showdetailuser: boolean=false;

  constructor(private httpService: HttpService) {}

 changeTab(val: any){
   this.tab=val
  }


  switchModeParent(event: number) {
    console.log(event);
    this.tab = event;
  }

 public selectName(val: number): void {
  this.finduser(val)
  
  
 }
 finduser(userid: any){
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
