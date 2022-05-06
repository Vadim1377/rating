import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpService} from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menubar/menu.component';
import {RatingComponent} from './rating/rating.component';
import {DetailuserComponent} from './detailuser/detailuser.component'
import { HelpComponent } from './help/help.component';
import { NavigationComponent } from './navigation/navigation.component';

import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxIndexedDBModule,DBConfig  } from 'ngx-indexed-db';
const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 2,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'user_name', keypath: 'user_name', options: { unique: false } },
      { name: 'user_bday', keypath: 'user_bday', options: { unique: false } },
      { name: 'user_photo', keypath: 'user_photo', options: { unique: false } }
    ]
  },
    //{
    //  store: 'rating',
    //  storeConfig: { keyPath: 'id', autoIncrement: true },
    //  storeSchema: [
    //    { name: 'user_name', keypath: 'user_name', options: { unique: false } },
    //    { name: 'user_bday', keypath: 'user_bday', options: { unique: false } },
    //    { name: 'user_curr_bday', keypath: 'user_curr_bday', options: { unique: false } }
    //  ]
    //}
  ]
};
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RatingComponent,
    DetailuserComponent,
    HelpComponent,
    NavigationComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CalendarModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [HttpService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
