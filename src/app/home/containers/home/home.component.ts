import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'The title';

  constructor() {}

  ngOnInit() {}

  updateTitle(value: string) {
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}
