import { Input,Component } from '@angular/core';
import { HttpService} from '../http.service';
@Component({
    selector: 'detailuser',
    templateUrl: './detailuser.component.html',
    styleUrls: ['./detailuser.component.scss']
})
export class DetailuserComponent { 
@Input() userid: any=[]; 
constructor(private httpService: HttpService){}

}
