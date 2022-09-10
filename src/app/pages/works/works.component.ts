import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  programming: any[] = [
    { 
      "title": "Miniplan - Server Overview"
    }
  ]

  mockups: any[] = [
    { 
      "title": "test"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
