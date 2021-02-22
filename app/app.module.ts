import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { FormatTimerPipe } from './format-timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    FormatTimerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormatTimerPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
