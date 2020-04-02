import { Component, OnInit, Input, EventEmitter, SimpleChange, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-tp35-raiting-label',
  templateUrl: './tp35-raiting-label.component.html',
  styleUrls: ['./tp35-raiting-label.component.scss']
})
export class Tp35RaitingLabelComponent implements OnInit {
  @Input() total: string;
  @Input() value: string;

  @Output() click: EventEmitter<Event> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleClick(simpleChanges: Event) {
    this.click.emit(simpleChanges);
  }

}
