import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bm-ui-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input() country;
  @Output() onClickCountry = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goToCountry(id) {
    this.onClickCountry.emit(id);
  }

}
