import { Component, OnInit, Input } from '@angular/core';
import { faJava, faHtml5, faCss3, faJs, faAngular, faReact, faNode, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
 
export class SkillsComponent implements OnInit {

  @Input() target: any;
  faJava = faJava as IconProp;
  faHtml = faHtml5 as IconProp;
  faCss3 = faCss3 as IconProp;
  faJs = faJs as IconProp;
  faCode = faCode as IconProp;
  faAngular = faAngular as IconProp;
  faReact = faReact as IconProp;
  faNode = faNode as IconProp;
  faDatabase = faDatabase as IconProp;
  faGoogle = faGoogle as IconProp;
  
  skills = [
    {name: 'HTML', icon: this.faHtml },
    {name: 'Java', icon: this.faJava },
    {name: 'CSS', icon: this.faCss3 },
    {name: 'JavaScript' , icon: this.faJs},
    {name: 'TypeScript' , icon: this.faCode},
    {name: 'Angular' , icon: this.faAngular},
    {name: 'React' , icon: this.faReact},
    {name: 'Node' , icon: this.faNode},
    {name: 'Express' , icon: this.faCode},
    {name: 'PostgreSQL' , icon: this.faDatabase},
    {name: 'MongoDB' , icon: this.faDatabase},
    {name: 'MySQL' , icon: this.faDatabase},
    {name: 'Firestore' , icon: this.faGoogle},
    {name: 'Firebase' , icon: this.faGoogle},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
