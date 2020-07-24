import { Component, OnInit } from '@angular/core';
import { GitSearchTopicService } from '../git-search-topic.service';
import { GitSearchTopic } from '../interface/git-search-topic';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-git-search-topic',
  templateUrl: './git-search-topic.component.html',
  styleUrls: ['./git-search-topic.component.css']
})
export class GitSearchTopicComponent implements OnInit {
  searchResults: GitSearchTopic;
  searchQuery: string;
  displayQuery: string;
  title: string;

  constructor(
    private GitSearchTopicService: GitSearchTopicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.gitSearch();
    });

    this.route.data.subscribe((results) => {
      this.title = results.title;
    });
  }

  gitSearch = () => {
    this.GitSearchTopicService
      .getSearchTopic(this.searchQuery)
      .subscribe((results) => {
        this.searchResults = results;
      }, (error) => {
        alert("Error: " + error.statusText);
      })
  }
  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search-topic/' + this.searchQuery]);
  }
}
