import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GithubDto } from '../../DTO/github-dto';
import { GithubService } from '../../service/github-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  repos: GithubDto[] = [];
  
  constructor(private readonly githubService: GithubService){ }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data: GithubDto[]) => {
      this.repos = data.filter(repo => !repo.fork)
    })
  }
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  getRepoUrl(item: GithubDto){
    return `https://${item.owner.login}.github.io/${item.name}/`
  }
}
