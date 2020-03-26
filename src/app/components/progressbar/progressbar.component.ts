import { Component, EventEmitter, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit, OnChanges {
  /**
   * Value
   *
   * @private
   * @type {number}
   * @memberof ProgressbarComponent
   */

  @Input() value: number = 0;

  /**
   * Label
   *
   * @private
   * @type {string}
   * @memberof ProgressbarComponent
   */

  @Input() label: string;
  /**
   * Color for progress bar
   *
   * @private
   * @type {string}
   * @memberof ProgressbarComponent
   */

  @Input() color: string = '#0984e3';

  /**
   * Class for component
   *
   * @private
   * @type {string}
   * @memberof ProgressbarComponent
   */

  @Input() className: string;

  /**
   * Total for progress bar
   *
   * @private
   * @type {string}
   * @memberof ProgressbarComponent
   */
  @Input() total: number = 100;

  /**
   * Type Of COmponent percentage and number
   *
   * @private
   * @type {string}
   * @memberof ProgressbarComponent
   */
  @Input() type = 'percentage';

  /**
   * Config JSON width class Css3
   *
   * @private
   * @type {json}
   * @memberof ProgressbarComponent
   */
  @Input() configStyle: any = {
    height: '60px',
    padding: '10px'
  };

  /**
   * Double binding for the form/fields validation status.
   *
   * @type {EventEmitter<any>}
   * @memberof ProgressbarComponent
   */

  @Output() changed: any = new EventEmitter();

  /**
   * Double binding for the form/fields validation status.
   *
   * @type {EventEmitter<any>}
   * @memberof ProgressbarComponent
   */

  @Output() completed: any = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.type && this.type === 'percentage') {
      this.value = (this.value * 100) / this.total;
    }
  }

  /**
   * A life cycle hook that is called when any data-bound property of a directive changes.
   * {@link https://angular.io/api/core/OnChanges}
   *
   * @memberof ProgressbarComponent
   */

  ngOnChanges() {
    const valueCompare = this.type === 'percentage' ? 100 : this.total;
    if (this.value >= valueCompare) {
      this.completed.emit(this.value);
    } else {
      this.changed.emit(this.value);
    }
  }
}
