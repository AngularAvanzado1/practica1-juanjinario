import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bm-ui-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit {

  @Input() region;
  @Output() onClickRegion = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goToRegion(code) {
    this.onClickRegion.emit(code);
  }
}
