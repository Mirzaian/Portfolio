import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  education: any[] = [
    { 
      "timeline": "2020 - present",
      "title": "Vocational school",
      "company": "Heinrich-Emanuel-Merck-Schule, Darmstadt",
      "icon": "fa-graduation-cap"
    },
    { 
      "timeline": "2018 - 2020",
      "title": "Computer science (B.sc.)",
      "company": "Hochschule Darmstadt",
      "icon": "fa-graduation-cap"
    },
    { 
      "timeline": "2013 - 2015",
      "title": "Secondary school",
      "company": "Erasmus-Kittler-Schule, Darmstadt",
      "icon": "fa-graduation-cap"
    },
    { 
      "timeline": "2007 - 2013",
      "title": "Comprehensive school",
      "company": "Mornewegschule, Darmstadt",
      "icon": "fa-graduation-cap"
    }
  ]

  work: any[] = [
    { 
      "timeline": "2020 - present",
      "title": "Apprenticeship as IT specialist for application development",
      "company": "Deutsche Telekom AG, Darmstadt",
      "icon": "fa-briefcase"
    },
    { 
      "timeline": "2015 - 2016",
      "title": "Trainee as IT system electrician",
      "company": "Deutsche Telekom AG, Darmstadt",
      "icon": "fa-briefcase"
    },
    { 
      "timeline": "2013 - 2014",
      "title": "Year-long intership",
      "company": "Speedpoint GmbH, Darmstadt",
      "icon": "fa-briefcase"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
