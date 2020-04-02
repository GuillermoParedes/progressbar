import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tp35-raiting-icon',
  templateUrl: './tp35-raiting-icon.component.html',
  styleUrls: ['./tp35-raiting-icon.component.scss']
})
export class Tp35RaitingIconComponent implements OnInit {
  @Input() icon: string = 'star';
  @Input() color: string;
  @Input() index: number;

  @Output() click: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  handleClick(event) {
    this.click.emit(event);
  }
}
