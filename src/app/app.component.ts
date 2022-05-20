import { Component } from '@angular/core';
import { HttpService} from './http.service';
import {CalendarModule} from 'primeng/calendar';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_progect';
 tab!: number;
 currentImenina:string="";
  userid!: any[];
  value: Date = new Date();
  showdetailuser: boolean=false;
  months: Date[]=[new Date('01.01.2022'),new Date('02.01.2022'),new Date('03.01.2022'),new Date('04.01.2022'),new Date('05.01.2022'),new Date('06.01.2022'),new Date('07.01.2022'),new Date('08.01.2022'),]
  //public months: Date[] = new Array(12).fill(new Date()); //Исправить инициализацию значений
  constructor(private httpService: HttpService) { 
  //  console.log('da')
  //for (var i=1; i<=12; i++)
  //this.months[i-1].setMonth( i)
}

 changeTab(val: any){
   this.tab=val
  }


  switchModeParent(event: number) {
    console.log(event);
    this.tab = event;
    if (this.tab==1)
    {
      this.currentImenina = this.httpService.getImenina();
    }
  }

 public selectName(val: number): void {
  this.finduser(val)
  
  
 }
 finduser(userid: any){
  this.showdetailuser=false;
  this.httpService.getData().subscribe((data:any) => {
    //var userdata = data;
    for (var i=0; i<data.length; i++)
    {
        if (data[i].id==userid){
            this.userid=data[i]
        }
    }
    this.showdetailuser=true;
});
    
 }
 

}
