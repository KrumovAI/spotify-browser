import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-paragraph',
  templateUrl: './info-paragraph.component.html',
  styleUrls: ['./info-paragraph.component.scss']
})
export class InfoParagraphComponent {
  @Input() key: string
  @Input() value: any
}
