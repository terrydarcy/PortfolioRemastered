import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skill = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JavaScript'},
    {name: 'TypeScript'},
    {name: 'Angular'},
    {name: 'React'},
    {name: 'Node'},
    {name: 'Express'},
    {name: 'PostgreSQL'},
    {name: 'MongoDB'},
    {name: 'MySQL'},
    {name: 'Firebase'},
    {name: 'Firestore'},
    {name: 'Firebase'},
    


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
