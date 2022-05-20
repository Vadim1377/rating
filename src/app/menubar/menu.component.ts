import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../rating/user';
@Component({
    selector: 'menu-comp',
    templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  //imports: [FormsModule,ReactiveFormsModule],
    providers: [HttpService]
})
export class MenuComponent {
  @Output() selectName = new EventEmitter<number>();
  list!: User[];
  currentDate = new Date();
  detailuserid: any;
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.httpService.getData().subscribe((data: any) => {

      this.list = data;

      for (var i = 0; i < this.list.length; i++) {
        var bdayDate = new Date(this.list[i].user_bday);//.transform(new Date(this.list[i].user_bday),'dd/MM/yyyy');
        //let myDate = new Date();
        //console.log(myDate);
        //this.list[i].days = this.inBetween(myDate, bdayDate);
        //myDate = new Date();
        //console.log(myDate);
        //this.list[i].ubiley = this.Ubiley(myDate, bdayDate);
      }
      //this.list.sort(function (a, b) {
      //  if (a.days > b.days) {
      //    return 1;
      //  }
      //  if (a.days < b.days) {
      //    return -1;
      //  }
      //  // a должно быть равным b
      //  return 0;
      //});
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
  }
  addUser(name: string, date:string ,photo:string ) {
    this.httpService.addUser(name,date,photo);
  }
  deleteUser(id:number) {
    this.httpService.deleteUser(id);
  }
  openDetailUser(val: number) {
    this.selectName.emit(val);
    console.log(val);
  }
}
