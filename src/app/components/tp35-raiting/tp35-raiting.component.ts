import {
  Component,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tp35-raiting',
  templateUrl: './tp35-raiting.component.html',
  styleUrls: ['./tp35-raiting.component.scss']
})
export class Tp35RaitingComponent {
  /**
   * Value
   *
   * @public
   * @type {number}
   * @memberof Tp35RaitingComponent
   */
  @Input() value: number = 0;
  /**
   * Total
   *
   * @public
   * @type {number}
   * @memberof Tp35RaitingComponent
   */
  @Input() total: number = 5;
  /**
   * Icon
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingComponent
   */
  @Input() icon: string = 'star';
  /**
   * ColorChecked
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingComponent
   */
  @Input() colorChecked: string = '#f1c40f';
  /**
   * ColorUnchecked
   *
   * @public
   * @type {string}
   * @memberof Tp35RaitingComponent
   */
  @Input() colorUnChecked: string = '#ecf0f1';
  /**
   * ReadOnly
   *
   * @public
   * @type {boolean}
   * @memberof Tp35RaitingComponent
   */
  @Input() readonly: Boolean = true;

  /**
   * Event when changed the raiting value
   *
   * @type {EventEmitter<any>}
   * @memberof Tp35RaitingComponent
   */
  @Output() changed: EventEmitter<any> = new EventEmitter();

  /**
   * Event when completed the raiting value
   *
   * @type {EventEmitter<any>}
   * @memberof Tp35RaitingComponent
   */
  @Output() completed: EventEmitter<any> = new EventEmitter();

  constructor() {}

  /**
   * @description Reset is when, the action is than value is zero
   * @param newValue
   */
  selected(newValue: number) {
    this.value = newValue;

    if (this.value === this.total) {
      this.completed.emit({
        completed: true,
        total: this.total
      });
    } else {
      this.changed.emit({
        completed: false,
        total: this.total
      });
    }
  }

  /**
   * @description Reset is when, the action is than value is zero
   */
  reset() {
    this.value = 0;
  }

}
