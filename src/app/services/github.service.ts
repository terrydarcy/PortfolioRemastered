import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  baseUrl: string = '';

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.baseUrl =
        'https://us-central1-portfolio-remastered-api.cloudfunctions.net/portfolio_remastered';
    } else {
      this.baseUrl =
        'http://localhost:5001/portfolio-remastered-api/us-central1/portfolio_remastered';
    }
  }

  getGitHubRepos() {
    var url = this.baseUrl + '/github/';
    return this.http.get(url);
  }
}
