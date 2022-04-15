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
    
    BrowserModule
  ],
  providers: [HttpService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
