import { Component, HostListener, OnInit } from '@angular/core';
import { InactivityService } from '../inactivity-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent{
  timerValue: number = 30;
  timerInterval: any;
  constructor(private router:Router){}
 
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:keydown', ['$event'])
  onActivity(event: Event) {
    this.resetTimer();
    this.startTimer();
  }
 
  // startTimer() {
  //   this.timerInterval = setInterval(() => {
  //     if (this.timerValue > 4) {
  //       this.timerValue--;}
  //     if(this.timerValue>0 && this.timerValue<4){
  //       alert('timing out');
  //       this.timerValue--
  //     }
  //     else {
  //       clearInterval(this.timerInterval);
  //       this.router.navigate(['/login']);
  //     }
  //   }, 1000);
  // }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
        if(this.timerValue==4){
          alert('timing out')
        }
      } else {
        clearInterval(this.timerInterval);
        this.router.navigate(['/logout']);
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerValue = 30;
  }

  ngOnDestroy() {
    this.resetTimer();
  }

  
}

