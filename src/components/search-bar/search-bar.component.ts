import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>()

  searchTerm: string = ''

  search() {
    if (this.searchTerm) {
      this.onSearch.emit(this.searchTerm)
    }
  }
}