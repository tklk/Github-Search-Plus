import { Component, OnInit } from '@angular/core';
import { GitSearchUserService } from '../git-search-user.service'
import { GitSearchUser } from '../interface/git-search-user'
import { faAddressBook, faBell, faJournalWhills, faBuilding, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {
  faAddressBook = faAddressBook;
  faBell = faBell;
  faJournalWhills = faJournalWhills;
  faBuilding = faBuilding;
  faHandHoldingHeart = faHandHoldingHeart;

  searchResults: GitSearchUser;
  searchQuery: string;

  constructor(private GitSearchUserService: GitSearchUserService) { }

  ngOnInit(): void {
    this.searchQuery = 'kevin';
    this.gitSearch();
  }
  gitSearch = () => {
    this.GitSearchUserService
      .getSearchUser(this.searchQuery)
      .subscribe((results) => {
        this.searchResults = results;
      }, (error) => {
        alert("Error: " + error.statusText)
      })
  }

}
