import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tp35RaitingComponent } from './tp35-raiting.component';
import { NumberEachPipe } from './utils/number-each.pipe';
import { Tp35RaitingIconComponent } from './components/tp35-raiting-icon/tp35-raiting-icon.component';
import { Tp35RaitingLabelComponent } from './components/tp35-raiting-label/tp35-raiting-label.component';
@NgModule({
  declarations: [Tp35RaitingComponent, NumberEachPipe, Tp35RaitingIconComponent, Tp35RaitingLabelComponent],
  exports: [Tp35RaitingComponent],
  imports: [
    CommonModule
  ]
})
export class Tp35RaitingModule { }
