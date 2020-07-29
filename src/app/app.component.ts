import { Component, OnInit } from '@angular/core';
import { GitSearchUserService } from './Service/git-search-user.service';
import { GitSearchRepoService } from './Service/git-search-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchRepoService, GitSearchUserService]
})
export class AppComponent implements OnInit{
  constructor(
    private GitSearchRepoService: GitSearchRepoService,
    private GitSearchUserService: GitSearchUserService,
  ) {}

  ngOnInit() { }
  title = 'github-search';
}