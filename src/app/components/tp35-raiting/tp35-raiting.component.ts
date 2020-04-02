import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  QueryList,
  ContentChildren,
  TemplateRef,
  AfterContentInit,
  Directive
} from "@angular/core";

@Component({
  selector: "app-tp35-raiting",
  templateUrl: "./tp35-raiting.component.html",
  styleUrls: ["./tp35-raiting.component.scss"]
})
export class Tp35RaitingComponent implements OnInit, AfterContentInit {
  @Input() value: number = 0;
  @Input() total: number = 5;
  @Input() icon: string = "star";
  @Input() colorChecked: string = "#f1c40f";
  @Input() colorUnChecked: string = "#ecf0f1";
  @Input() readonly: Boolean = true;
  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Output() completed: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}

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

  reset() {
    this.value = 0;
  }

}
