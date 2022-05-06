import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService} from '../http.service';
import {TableModule} from 'primeng/table';
import {User} from '../rating/user';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent {
 @Output() selectName = new EventEmitter<number>();
  title = 'rating';
  list!: User[];
  detailuserid: any;
  constructor(private httpService: HttpService){}
      
    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {
        
            this.list=data;
            
            /*this.list.sort(function (a, b) {
                if (a.day > b.day) {
                  return 1;
                }
                if (a.day < b.day) {
                  return -1;
                }
                // a должно быть равным b
                return 0;
              });
              let now = new Date().getTime();
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
      //this.httpService.addUser("Никита Токийский Петрович", "01.01.2002", "C:/nekit,jpg");
      this.httpService.updateUser(5,"Никита Хабибуллин Максимович", "01.02.2003", "C:/nekit.jpg");
      //this.httpService.deleteUser(6);
    }
    openDetailUser(val: number){
      this.selectName.emit(val);
      console.log(val)
    }
}

