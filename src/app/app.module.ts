import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalenderHolderComponent } from './calender-holder/calender-holder.component';
import { EventAdderComponent } from './event-adder/event-adder.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileHolderComponent } from './file-holder/file-holder.component';
import { PrintOptionsComponent } from './print-options/print-options.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderHolderComponent,
    EventAdderComponent,
    FileSelectDirective,
    FileDropDirective,
    FileHolderComponent,
    PrintOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
