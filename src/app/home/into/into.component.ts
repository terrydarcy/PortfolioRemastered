import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitter, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.scss']
})
export class IntoComponent implements OnInit {

  faInstagram = faInstagram as IconProp;
  faTwitter = faTwitter as IconProp;
  faGithub = faGithub as IconProp;
  faYoutube = faYoutube as IconProp;
 
  constructor() {
  }

  ngOnInit(): void {
  }

}
