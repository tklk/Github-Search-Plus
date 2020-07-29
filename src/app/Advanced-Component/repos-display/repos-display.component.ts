import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitSearchRepo } from '../../interface/git-search-repo';

@Component({
  selector: 'app-repos-display',
  templateUrl: './repos-display.component.html',
  styleUrls: ['./repos-display.component.css']
})
export class ReposDisplayComponent implements OnInit {
  @Input() searchResults: GitSearchRepo;
  @Input() favorites: Array<string>
  @Output() updateFavorites = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addFavorite = (item) => {
    return this.updateFavorites.emit(item.id);
  }
  deFavorite = (item) => {
    return this.updateFavorites.emit(item.id);
  }
  checkFavorite = (item) => {
    return this.favorites.indexOf(item.id) > -1;
  }  
}
