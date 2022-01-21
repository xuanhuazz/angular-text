import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { SchoolComponent } from './school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailComponent,
    MessagesComponent,
    SchoolComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
