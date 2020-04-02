import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarModule } from './components/progressbar/progressbar.module';
import { Tp35RaitingModule } from './components/tp35-raiting/tp35-raiting.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule,
    Tp35RaitingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
