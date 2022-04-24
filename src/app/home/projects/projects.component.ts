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
    this.githubLoading = true;
    this.githubLoading = false;
    this.githubService.getGitHubRepos().subscribe((result) => {
        this.repos = result;
        console.log (this.repos);
        this.repos.map((repo) => this.githubService.getRepoLanguages(repo.name).subscribe((result) => {
            repo.languages = Object.keys(result);
        }));
    });
  }

  openRepo(repoURL: string) {
    window.open(repoURL, "_blank");

  }

}
