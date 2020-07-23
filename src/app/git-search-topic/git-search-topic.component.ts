import { Component, OnInit } from '@angular/core';
import { GitSearchTopicService } from '../git-search-topic.service'
import { GitSearchTopic } from '../interface/git-search-topic'

@Component({
  selector: 'app-git-search-topic',
  templateUrl: './git-search-topic.component.html',
  styleUrls: ['./git-search-topic.component.css']
})
export class GitSearchTopicComponent implements OnInit {
  searchResults: GitSearchTopic;
  searchQuery: string;

  constructor(private GitSearchTopicService: GitSearchTopicService) { }

  ngOnInit(): void {
    this.searchQuery = 'angular';
    this.gitSearch();
  }
  gitSearch = () => {
    this.GitSearchTopicService
      .getSearchTopic(this.searchQuery)
      .subscribe((results) => {
        this.searchResults = results;
      }, (error) => {
        alert("Error: " + error.statusText)
      })
  }
}
