import { animate, animateChild, group, keyframes, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const target = document.querySelector('.slogan');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'var(--red-color)'
    })

    writer
      .strings(
        400,
        "IT Specialist for Application Development",
        "Web Developer",
        "Graphic Designer"
      )
      .start()
  }
}
