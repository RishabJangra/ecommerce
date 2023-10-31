import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  user: { email: string } = { email: '' };

  constructor(private router: Router) {}

  resetPassword() {
    this.router.navigate(['/login']);
  }
}
