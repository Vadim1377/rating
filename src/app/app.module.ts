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
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RatingComponent,
    DetailuserComponent,
    HelpComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CalendarModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [HttpService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
