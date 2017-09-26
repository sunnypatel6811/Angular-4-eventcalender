import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showsuccess: boolean = false;
  addEvent: boolean = false;
  sendToCalender;
  showprint: boolean = false;
  public files = [];

  constructor(){}

  showFirstDiv(){
    this.showsuccess = false;
    this.showprint = false;
  }

  onAddEvent(e) {
    this.addEvent = e;
  }

  showCalender(e) {
    this.addEvent = e;
  }

  showEvent(e) {
    this.sendToCalender = e;
    if (e.printOuts) {
      this.files = e.attachDocs;
      this.showprint = true;
      this.addEvent = false;
    }
    this.addEvent = false;
  }

  showSuccessMethod(e){
    this.showsuccess = e;
  }
}
