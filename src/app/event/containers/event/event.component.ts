import { Component, OnInit } from '@angular/core';
import { Attendee } from '../../../models/attendee';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];

  constructor() {}

  ngOnInit() {}

  addAttendee(attendee: Attendee) {
    this.attendees = [...this.attendees, attendee];
    console.log(
      'TCL: EventComponent -> addAttendee -> attendees',
      this.attendees
    );
  }
}
