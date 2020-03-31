import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarModule } from './components/progressbar/progressbar.module';
import { Tp35RaitingComponent } from './components/tp35-raiting/tp35-raiting.component';


@NgModule({
  declarations: [
    AppComponent,
    Tp35RaitingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
