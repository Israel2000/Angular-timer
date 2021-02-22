import { Component } from '@angular/core';
import { Subscription } from "rxjs";
import {timer} from "rxjs/observable/timer";
import { Pipe, PipeTransform } from "@angular/core";
import { FormatTimerPipe } from '../format-timer.pipe';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
})

export class TimerComponent{
  countDown: Subscription;
  counter = 1500;
  tick = 1000;
  //existing code
  started: boolean = false;
  minutes: number = 25;
  seconds: number = 0;
  newMin: number;
  interval: any;
  isStarted:boolean = false;

  constructor() {
    this.started = false;
  this.minutes = 25;
  this.seconds = 0;
  }

  resetVariables(mins, secs, started) {
    
  }

  start() {
    
    if(!this.isStarted){
    this.countDown = timer(0, this.tick).subscribe(() => (this.counter > 0) ? --this.counter : this.counter);
    this.isStarted = true;
  }
  }
                                                                      
  addFive() {
    this.counter+= 300;
  }

  minusFive() {
    this.counter = this.counter>300 ? this.counter-= 300 : this.counter= 0;
  
  }


  stop() {
    this.countDown.unsubscribe();
    this.isStarted = false;
  }

  reset() {
    this.counter = 1500;
    this.countDown.unsubscribe();
    this.isStarted = false;
  }

  intervalCallback() {
    
  }

}
// @Pipe({
//   name: "formatTime"
// })
// export class FormatTimePipe implements PipeTransform {
//   transform(value: number): string {
//     const minutes: number = Math.floor(value / 60);
//     return (
//       ("00" + minutes).slice(-2) +
//       ":" +
//       ("00" + Math.floor(value - minutes * 60)).slice(-2)
//     );
//   }
// }
