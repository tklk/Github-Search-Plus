import { Component, OnInit } from '@angular/core';
import { GitSearchRepoService } from '../../Service/git-search-repo.service';
import { UnifiedSearchService } from '../../Service/unified-search.service';

import { GitSearchRepo } from '../../interface/git-search-repo';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdvancedSearchRepo } from '../../interface/advanced-search-repo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-git-search-repo',
  templateUrl: './git-search-repo.component.html',
  styleUrls: ['./git-search-repo.component.css']
})
export class GitSearchRepoComponent implements OnInit {
  searchResults: GitSearchRepo;
  searchQuery: string;
  displayQuery: string;
  title: string;
  form: FormGroup;
  formControls = {};
  favorites: Array<number> = [];

  constructor(
    private GitSearchRepoService: GitSearchRepoService,
    private UnifiedSearchService: UnifiedSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    for (let key of this.modelKeys) {
      let valid = [];
      if (key === 'repository') {
        valid.push(Validators.required);
      }
      if (key === 'stars') {
        valid.push(Validators.maxLength(5));
      }
      valid.push(this.noSpecialChars);
      this.formControls[key] = new FormControl(this.model[key], valid);
    }
    this.form = new FormGroup(this.formControls);
  }

  model = new AdvancedSearchRepo('', '', '', null, null, '');
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
    this.UnifiedSearchService
      .unifiedSearch(this.searchQuery)
      .subscribe((response) => {
        console.log(response)
        this.searchResults = response;
      }, (error) => {
        alert("Error: " + error.statusText);
      });
  }
  sendQuery = () => {
    this.searchResults = null;
    //this.router.navigate(['/search-repo/' + this.searchQuery]);
    let search: string = this.form.value['repository'];
    let params: string = "";
    for (let key of this.modelKeys) {
      if (key === 'repository') {
        continue;
      }
      if (this.form.value[key]) {
        params += '+' + key + ':' + this.form.value[key];
      }
    }
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }

  checkType = (key) => {
    return typeof key === 'string' ? 'text' : typeof key;
  }
  
  handleFavorite = (id) => {
    const index = this.favorites.indexOf(id);
    if (index > -1 ) {
      return this.favorites.splice(index, 1);
    } else {
      return this.favorites.push(id);
    }    
  }
}
