import { Component, OnInit } from '@angular/core';
import { GitSearchUserService } from '../git-search-user.service';
import { GitSearchUser } from '../interface/git-search-user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {
  searchResults: GitSearchUser;
  searchQuery: string;
  displayQuery: string;
  title: string;

  constructor(
    private GitSearchUserService: GitSearchUserService,
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
    this.GitSearchUserService
      .getSearchUser(this.searchQuery)
      .subscribe((results) => {
        this.searchResults = results;
      }, (error) => {
        alert("Error: " + error.statusText);
      })
  }
  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search-user/' + this.searchQuery]);
  }
}
