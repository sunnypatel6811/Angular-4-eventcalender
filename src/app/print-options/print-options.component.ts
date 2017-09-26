import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PrinterService } from '../printer.service';

@Component({
  selector: 'app-print-options',
  templateUrl: './print-options.component.html',
  styleUrls: ['./print-options.component.css'],
  providers: [PrinterService]
})
export class PrintOptionsComponent implements OnInit {

  @ViewChild('print') printRef: ElementRef;
  @ViewChild('color') colorRed: ElementRef;
  @ViewChild('notes') notesRef: ElementRef;
  @ViewChild('fileName') fileNameRef: ElementRef;
  @ViewChild('owner') ownerRef: ElementRef;
  @ViewChild('meetingRoom') meetingRef: ElementRef;
  @ViewChild('description') descriptionRef: ElementRef;
  @ViewChild('tbody') tbodyRef: ElementRef;
  description
  @Output() sendSuccess = new EventEmitter();

  public print;
  public color;
  public notes;

  @Input() sendToPrint = [];


  constructor(private _ps: PrinterService) { }

  ngOnInit() { }

  sendingToPrintCenter() {

    console.log(this.tbodyRef);

    /*let obj = [{
      "printRequest": {

        "deliverTo": this.ownerRef.nativeElement.value,
        "instructions": this.descriptionRef.nativeElement.value,
        "documents": {
          "document": [
            {
              "filename": this.fileNameRef.nativeElement.value,
              "color": this.color.nativeElement.value,
              "notes": this.notesRef.nativeElement.value
            }
          ]

        }
      }
    }];
*/
    //this code is excecuted once printing is successfully done...
    //this._ps.print(obj).subscribe(response => console.log(response));

    this.sendSuccess.emit(true);
  }

  notSendingToPrintCenter() {

    this.sendSuccess.emit(false);
  }

}



