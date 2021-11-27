import { Component, Input } from '@angular/core';

@Component({
  selector: 'result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  @Input() title: string
  @Input() imgSrc: string
  
  @Input() expandedView: boolean = false

  get imgUrl(): string {
    return this.imgSrc || '/assets/images/default-image.png'
  }
}