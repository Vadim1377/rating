import { Component, Output } from '@angular/core';
import { HttpService} from './http.service';
import {CalendarModule} from 'primeng/calendar';
import { getLocaleMonthNames } from '@angular/common';
import { User } from '././rating/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_progect';
  list!: User[];
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
      this.currentImenina = "";
      this.httpService.getData().subscribe((data: any) => {

        this.list = data;

        for (var i = 0; i < this.list.length; i++) {
          var bdayDate = new Date(this.list[i].user_bday);//.transform(new Date(this.list[i].user_bday),'dd/MM/yyyy');
          let myDate = new Date();
          if (i != (this.list.length-1) && this.inBetween(myDate, bdayDate)==0)
            this.currentImenina += this.list[i].user_name + ", ";
          else if (this.inBetween(myDate, bdayDate) == 0)
            this.currentImenina += this.list[i].user_name + ".";
        }
        if (this.currentImenina == "") {
          this.currentImenina = "Сегодня именинников нет.";
        }
        /*let now = new Date().getTime();
        var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        for (var i=0;i<this.list.length;i++){
          var dt = new Date(this.list[i].day.replace(pattern,'$3-$2-$1')).getTime();
          var res= (dt-now) / 86400000     
          res=Math.ceil(res)
          this.list[i].days=res
        }
        */
      }
      );
      /*this.currentImenina = this.httpService.getImenina();*/
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
  inBetween(date1: Date, date2: Date): number {
    //console.log("date", date1, "scnddate", date2);
    if (date1.getMonth() < date2.getMonth() || (date1.getMonth() == date2.getMonth() && date1.getDate() <= date2.getDate()))
      date1.setFullYear(date2.getFullYear());
    else {
      date1.setFullYear(date2.getFullYear() - 1);
    }
    date1.setHours(date2.getHours());
    date1.setMinutes(date2.getMinutes());
    date1.setSeconds(date2.getSeconds());
    date1.setMilliseconds(date2.getMilliseconds());
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / one_day);
  }

}
