import { Component, OnInit, Input, EventEmitter, SimpleChange, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-tp35-raiting-label',
  templateUrl: './tp35-raiting-label.component.html',
  styleUrls: ['./tp35-raiting-label.component.scss']
})
export class Tp35RaitingLabelComponent implements OnInit {
  /**
   * Total
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingLabelComponent
   */
  @Input() total: string;
  /**
   * Value
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingLabelComponent
   */
  @Input() value: string;

  /**
   * Event when than click
   *
   * @type {EventEmitter<any>}
   * @memberof Tp35RaitingLabelComponent
   */
  @Output() click: EventEmitter<Event> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * @description HandleClick output
   * @param simpleChanges
   */
  handleClick(simpleChanges: Event) {
    this.click.emit(simpleChanges);
  }

}
