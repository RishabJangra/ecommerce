import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  timerValue: number = 10;
  timerInterval: any;
  router: any;

  // constructor() {
  //   this.activityTimer = timer(0, 1000);
  //   this.setupActivityTimer();
  // }

  onActivity(event: Event) {
    this.resetTimer();
    this.startTimer();
  }
 
  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      } else {
        clearInterval(this.timerInterval);
        this.router.navigate(['/logout']);
      }
    }, 1000);
 
  }
 
  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerValue = 5;
  }
}
