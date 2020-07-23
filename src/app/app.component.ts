import { Component, OnInit } from '@angular/core';
import { GitSearchUserService } from './git-search-user.service';
import { GitSearchTopicService } from './git-search-topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchTopicService, GitSearchUserService]
})
export class AppComponent implements OnInit{
  constructor(
    private GitSearchTopicService: GitSearchTopicService,
    private GitSearchUserService: GitSearchUserService,
  ) {}

  ngOnInit() { }
  title = 'github-search';
}