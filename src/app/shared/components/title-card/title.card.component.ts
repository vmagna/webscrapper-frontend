import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title.card.component.html',
  styleUrls: ['./title.card.component.scss']
})
export class TitleCardComponent {

  @Input() icon = '';
  @Input() title = '';
  @Input() qtdReg = '';
  @Input() btnSearch = false;
  @Input() btnWhite = false;
  @Input() removeMargin = false;

  constructor() {}
}
