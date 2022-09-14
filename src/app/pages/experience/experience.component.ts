import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  show: boolean = true

  education: any[] = [
    { 
      "timeline": "2020 - present",
      "title": "Vocational school",
      "company": "Max Mustermann School, Darmstadt",
      "icon": "fa-graduation-cap"
    },
    { 
      "timeline": "2018 - 2020",
      "title": "Computer science (B.sc.)",
      "company": "Max Mustermann University",
      "icon": "fa-graduation-cap"
    },
    { 
      "timeline": "2013 - 2015",
      "title": "Secondary school",
      "company": "Max Mustermann School, Darmstadt",
      "icon": "fa-graduation-cap"
    },
    { 
      "timeline": "2007 - 2013",
      "title": "Comprehensive school",
      "company": "Max Mustermann School, Darmstadt",
      "icon": "fa-graduation-cap"
    }
  ]

  work: any[] = [
    { 
      "timeline": "2020 - present",
      "title": "Apprenticeship as IT specialist for application development",
      "company": "Max Mustermann AG, Darmstadt",
      "icon": "fa-briefcase"
    },
    { 
      "timeline": "2015 - 2016",
      "title": "Trainee as designer",
      "company": "Max Mustermann AG, Darmstadt",
      "icon": "fa-briefcase"
    },
    { 
      "timeline": "2013 - 2014",
      "title": "Intership",
      "company": "Max Mustermann AG, Darmstadt",
      "icon": "fa-briefcase"
    }
  ]

  skills : any [] = [
    {
      "name": "angular",
      "img": "https://angular.io/assets/images/logos/angular/angular.svg",
      "value": "50",
      "urlCertificate": "https://www.coursera.org/account/accomplishments/certificate/7JSJU8V23T7R",
      "show": false
    },
    {
      "name": "react",
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "value": "50",
      "urlCertificate": "https://www.coursera.org/account/accomplishments/certificate/7JSJU8V23T7R",
      "show": true
    },
    {
      "name": "js",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png",
      "value": "50",
      "urlCertificate": "https://www.coursera.org/account/accomplishments/certificate/7JSJU8V23T7R",
      "show": true
    },
    {
      "name": "ts",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
      "value": "50",
      "urlCertificate": "https://www.coursera.org/account/accomplishments/certificate/7JSJU8V23T7R",
      "show": true
    },
    {
      "name": "kotlin",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/768px-Kotlin_Icon.svg.png?20171012085709",
      "value": "50",
      "urlCertificate": "https://www.coursera.org/account/accomplishments/certificate/7JSJU8V23T7R",
      "show": true
    },
    {
      "name": "python",
      "img": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      "value": "50",
      "urlCertificate": "https://www.coursera.org/account/accomplishments/certificate/7JSJU8V23T7R",
      "show": true
    },
    {
      "name": "photoshop",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png",
      "value": "50",
      "urlCertificate": "2",
      "show": true,
      "src": "false"
    },
    {
      "name": "adobexd",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
      "value": "50",
      "urlCertificate": "1",
      "show": false,
      "src": "https://media-exp1.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1671062400&v=beta&t=P68KZhU6g2NyzK1Jr9kNwAaMm1c6Vp1h5KnX57GXti4"
    }
  ]

  srcs : any [] = [
    {
      "src": "https://media-exp1.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1671062400&v=beta&t=P68KZhU6g2NyzK1Jr9kNwAaMm1c6Vp1h5KnX57GXti4",   
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
