import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tp35-raiting-icon',
  templateUrl: './tp35-raiting-icon.component.html',
  styleUrls: ['./tp35-raiting-icon.component.scss']
})
export class Tp35RaitingIconComponent {
  /**
   * Icon
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingIconComponent
   */
  @Input() icon: string = 'star';
  /**
   * Color
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingIconComponent
   */
  @Input() color: string;
  /**
   * Index
   *
   * @public
   * @type {number}
   * @memberof Tp35RaitingIconComponent
   */
  @Input() index: number;

  @Output() click: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  /**
   * @description HandleClick output
   * @param event
   */
  handleClick(event) {
    this.click.emit(event);
  }
}
