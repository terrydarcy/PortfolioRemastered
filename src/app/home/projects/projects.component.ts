import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos!: [any];
  githubLoading: boolean = false;
  
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getGitHubData();
  }

  getGitHubData() {
    this.githubLoading = true;
    this.githubService.getGitHubRepos().subscribe((result : any) => {
      this.githubLoading= false;
      this.repos = result;
      console.log (this.repos);
    });
  }
  
  capitalizeFirstLetter(string: string) {
    if(!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  navigateTo(url: string) {
    window.open(url, "_blank");
  }
 

}
