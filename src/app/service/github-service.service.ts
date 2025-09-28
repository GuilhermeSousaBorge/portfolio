import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubDto } from '../DTO/github-dto';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = "https://api.github.com/users/GuilhermeSousaBorge/repos";

  constructor(private http: HttpClient) { }

  getRepos(): Observable<GithubDto[]>{
    return this.http.get<GithubDto[]>(this.apiUrl);
  }
}
