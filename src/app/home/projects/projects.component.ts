import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import{pipe, of, switchMap, map} from 'rxjs';

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
    this.fetchAndFormatRepos();
  }

  fetchAndFormatRepos() {
    this.githubLoading = true;
    this.githubService.getGitHubRepos().subscribe((result) => {
      this.repos = result;
      console.log (this.repos);
      
      this.repos.map((repo) => {
        repo.name = this.capitalizeFirstLetter(repo.name);
        repo.description = this.capitalizeFirstLetter(repo.description);
        
        this.githubService.getRepoLanguages(repo.name).subscribe((result) => {
          repo.languages = Object.keys(result);
          this.githubLoading = false;
        })
      });
      //sorting repos by updated_at
      this.repos.sort((x, y) => {
        const xDate = new Date(y.updated_at);
        const yDate = new Date(x.updated_at);
        if(xDate < yDate) return -1;
        else if(xDate > yDate) return 1;
          else return 0;
        })
    });
  }
  
  capitalizeFirstLetter(string: string) {
    if(!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  openRepo(repoURL: string) {
    window.open(repoURL, "_blank");

  }

}
