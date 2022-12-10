import { Component, OnInit } from '@angular/core';
// import {vodafone} from "../../../assets/vodafone.png";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  // vodafone = vodafone;

  constructor() {}

  ngOnInit(): void {}
  goToURL(path: string) {
    window.open(path, '_blank');
  }
}
