import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitSearchCode } from '../../interface/git-search-code';

@Component({
  selector: 'app-codes-display',
  templateUrl: './codes-display.component.html',
  styleUrls: ['./codes-display.component.css']
})
export class CodesDisplayComponent implements OnInit {
  @Input() searchResults: GitSearchCode;
  @Input() favorites: Array<string>
  @Output() updateFavorites = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addFavorite = (item) => {
    return this.updateFavorites.emit(item.repository.id);
  }
  deFavorite = (item) => {
    return this.updateFavorites.emit(item.id);
  }
  checkFavorite = (item) => {
    return this.favorites.indexOf(item.repository.id) > -1;
  }
}
