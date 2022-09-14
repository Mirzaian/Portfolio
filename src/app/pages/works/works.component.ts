import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  applications: any[] = [
    { 
      "title": "Highend Project",
      "category": "everything",
    },
    { 
      "title": "Example Project nr.1",
      "category": "angular"
    },
    { 
      "title": "Example Project nr.2",
      "category": "angular"
    },
    { 
      "title": "Example Project nr.3",
      "category": "react"
    },
    { 
      "title": "Example Project nr.4",
      "category": "kotlin"
    },
    { 
      "title": "Example Project nr.5",
      "category": "python"
    }
  ]

  filteredApplications = this.applications;

  filteredCategory(category: string) {
    if(category === 'everything') {
      this.filteredApplications = this.applications
    } else if(category === 'angular') {
      this.filteredApplications = this.applications.filter((card) => card.category === 'angular')
    } else if(category === 'react') {
      this.filteredApplications = this.applications.filter((card) => card.category === 'react')
    } else if(category === 'kotlin') {
      this.filteredApplications = this.applications.filter((card) => card.category === 'kotlin')
    } else if(category === 'python') {
      this.filteredApplications = this.applications.filter((card) => card.category === 'python')
    }
  }

  mockups: any[] = [
    { 
      "title": "test"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
