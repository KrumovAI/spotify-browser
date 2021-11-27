import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-results-group',
  templateUrl: './search-results-group.component.html',
  styleUrls: ['./search-results-group.component.scss']
})
export class SearchResultsGroupComponent {
  @Input() title: string
}