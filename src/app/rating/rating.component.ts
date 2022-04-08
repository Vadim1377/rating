import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent {
 @Output() selectName = new EventEmitter<number>();
  title = 'rating';
  list: any[];
  detailuserid: any;
  constructor(private httpService: HttpService){}
      
    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {
            this.list=data["userList"]
            
            this.list.sort(function (a, b) {
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
              
          }
        );
    }
    openDetailUser(val: number){
      this.selectName.emit(val);
      console.log(val)
    }
}
