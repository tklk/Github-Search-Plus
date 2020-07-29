import { Component, OnInit } from '@angular/core';
import { GitSearchUserService } from '../../Service/git-search-user.service';
import { GitSearchUser } from '../../interface/git-search-user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdvancedSearchUser } from '../../interface/advanced-search-user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  form: FormGroup;
	formControls = {};

  constructor(
    private GitSearchUserService: GitSearchUserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    for (let key of this.modelKeys) {
      let valid = [];
      if (key === 'user') {
        valid.push(Validators.required);
      }
      if (key === 'repos') {
        valid.push(Validators.maxLength(3));
      }
      valid.push(this.noSpecialChars);
      this.formControls[key] = new FormControl(this.model[key], valid);
    }
    this.form = new FormGroup(this.formControls);
  }
  model = new AdvancedSearchUser('', '', null, null, '');
  modelKeys = Object.keys(this.model);
  
  noSpecialChars(c: FormControl) {
    let REGEXP = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    const hasSpecialChars = REGEXP.test(c.value);
    return hasSpecialChars ? { specialChar: { valid: false } } : null;
  }

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
    // this.router.navigate(['/search-user/' + this.searchQuery]);
    let search: string = this.form.value['user'];
    let params: string = "";
    for (let key of this.modelKeys) {
      if (key === 'user') {
        continue;
      }
      if (this.form.value[key]) {
        if (key === 'followers' || key === 'repos') {
          params += '+' + key + ':>=' + this.form.value[key];  
        } else {
          params += '+' + key + ':' + this.form.value[key];
        }
      }
    }
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }
}
