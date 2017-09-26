import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilePath } from '../file.model';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-event-adder',
  templateUrl: './event-adder.component.html',
  styleUrls: ['./event-adder.component.css']
})
export class EventAdderComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });
  printOuts = false;
  @Output() showCalender = new EventEmitter();
  @Output() sendEventToCalender = new EventEmitter();
  @Output() showSuccess = new EventEmitter();

  recipes: FilePath[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.attachDocs = this.uploader.queue;
        
    if (!e.printOuts) {
      this.showSuccess.emit(true);
    }

    this.sendEventToCalender.emit(e); 
}

  cancelForm() {
    this.showCalender.emit(false);
  }






}
