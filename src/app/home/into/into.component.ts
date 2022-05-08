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

  instagramURL : string = 'https://www.instagram.com/darcydevelopment/';
  twitterURL : string = 'https://twitter.com/darcydevelop';
  youtubeURL : string = 'https://www.youtube.com/channel/UChBEieVKmbciCLEaeog5u4g';
 
  constructor() {
  }

  ngOnInit(): void {
  }

  goToURL(path: string) {
    window.open(path, '_blank');
  }

}
