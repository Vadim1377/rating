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
const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'photo', keypath: 'photo', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }]
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
