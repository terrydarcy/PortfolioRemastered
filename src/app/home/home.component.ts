import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollToService } from '../services/scroll-to.service';
import { scrollToEnum } from '../models/Interfaces';
var scrollToElement = require('scroll-to-element');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('projectsTarget') projectsTarget!: ElementRef;
  @ViewChild('skillsTarget') skillsTarget!: ElementRef;
  @ViewChild('servicesTarget') servicesTarget!: ElementRef;

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {
    this.scrollToService.getScrollToSubject().subscribe((value: string) => {
      if (value) this.scrollTo(value);
    });
  }

  scrollTo(el: string) {
    const config = { offset: -70, ease: 'inQuad', duration: 300 };
    switch (el) {
      case scrollToEnum.PROJECTS:
        scrollToElement(this.projectsTarget.nativeElement, config);
        break;
      case scrollToEnum.SKILLS:
        scrollToElement(this.skillsTarget.nativeElement, config);
        break;
      case scrollToEnum.SERVICES:
        scrollToElement(this.servicesTarget.nativeElement, config);
        break;
    }
  }
}
