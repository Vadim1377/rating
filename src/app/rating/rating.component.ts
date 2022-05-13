import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService} from '../http.service';
import {TableModule} from 'primeng/table';
import { User } from '../rating/user';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [DatePipe]
})

export class RatingComponent {
 @Output() selectName = new EventEmitter<number>();
  title = 'rating';
  list!: User[];
  currentDate = new Date();
  detailuserid: any;
  constructor(private httpService: HttpService){}
      
    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {
        
          this.list = data;

          for (var i = 0; i < this.list.length; i++) {
            var bdayDate =new Date(this.list[i].user_bday);//.transform(new Date(this.list[i].user_bday),'dd/MM/yyyy');
            let myDate = new Date();
            console.log(myDate);
            this.list[i].days = this.inBetween(myDate, bdayDate);
            myDate = new Date();
            console.log(myDate);
            this.list[i].ubiley = this.Ubiley(myDate,bdayDate); 
          }
          this.list.sort(function (a, b) {
            if (a.days > b.days) {
              return 1;
            }
            if (a.days < b.days) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
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

      this.httpService.getUserId(3);
      //this.httpService.addUser("Никита Токийский Петрович", "2002-01-01", "C:/nekit,jpg");
      this.httpService.updateUser(10, "Никита Хабибуллин Максимович", "2002-06-13", "C:/nekit.jpg");
      this.httpService.updateUser(11, "Никита Хабибуллин Максимович", "2007-05-13", "C:/nekit.jpg");
      //this.httpService.deleteUser(6);
    }
    openDetailUser(val: number){
      this.selectName.emit(val);
      console.log(val)
  }
  inBetween(date1: Date, date2: Date): number {
    //console.log("date", date1, "scnddate", date2);
    if (date1.getMonth() < date2.getMonth() || (date1.getMonth() == date2.getMonth() && date1.getDate() <= date2.getDate()))
      date1.setFullYear(date2.getFullYear());
    else {
      date1.setFullYear(date2.getFullYear()-1);
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
  Ubiley(date1: Date, date2: Date): boolean {
    console.log("date",date1,"scnddate",date2);
    //Get 1 day in milliseconds
    var one_year = 1000 * 60 * 60 * 24 * 365;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    console.log("result of mathround", Math.round(difference_ms / one_year)-1);
    if ((Math.round(difference_ms / one_year) - 1) % 5 == 0 || Math.round(difference_ms / one_year) % 5 == 0 && (date1.getMonth() <= date2.getMonth() || (date1.getMonth() == date2.getMonth() && date1.getDate() <= date2.getDate())))
      return true;
    else
      return false;
  }
}

