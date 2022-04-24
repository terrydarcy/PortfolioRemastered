import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

 
  constructor(private http: HttpClient) { 
   }

  getGitHubRepos() {
    return this.http.get<any>('https://api.github.com/users/terrydarcy/repos');
  }

  getRepoLanguages(repoName : string) {
    return this.http.get<any>(`https://api.github.com/repos/terrydarcy/${repoName}/languages`);
  }
}
