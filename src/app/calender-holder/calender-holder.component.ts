import { Component, OnInit, Input } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  }
};

import { EventModel } from '../events.model';


@Component({
  selector: 'app-calender-holder',
  templateUrl: './calender-holder.component.html',
  styleUrls: ['./calender-holder.component.css']
})
export class CalenderHolderComponent implements OnInit {
  @Input() sendToCalender;
  viewDate = new Date();
  view = 'month';
  activeDayIsOpen: boolean = false;



  events = [
    {
      start: startOfDay(new Date("05-08-2017")),
      end: new Date("05-09-2017"),
      title: 'Bday event',
      color: colors.red
    },

    {
      start: startOfDay(new Date("05-11-2017")),
      end: new Date("05-14-2017"),
      title: 'Javascript developer meeting',
      color: colors.red
    },

    {
      start: startOfDay(new Date("05-12-2017")),
      end: new Date("05-15-2017"),
      title: 'Angular 4 developers meeting',
      color: colors.red
    }
  ];

  constructor() { }

  ngOnInit() {
    if(this.sendToCalender){
      const startDay = this.sendToCalender.startEvent.startDate;
      const endDay = this.sendToCalender.endEvent.endDate;
      const title = this.sendToCalender.title;
      console.log(endDay);
      console.log(startDay);

      const newEvent =  new EventModel(startOfDay(new Date(startDay)), new Date(endDay), title, colors.red);
      this.events.push(newEvent);

    }
  }

  dayClicked({ date, events }: { date: Date, events: any[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

}
