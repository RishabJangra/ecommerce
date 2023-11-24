import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:3000'; // Replace this with your server URL

  // constructor(private http: HttpClient) { }

  // login(username: string, password: string): Observable<any> {
  //   const url = `${this.baseUrl}/login`;
  //   const body = { username, password };
  //   return this.http.post<any>(url, body);
  // }
  private _isAuthenticated = false;
  private backendUrl = 'http://localhost:3000';
  username: string='';
  //

  isLoggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}
 
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    this.username = username;
    //

    this.isLoggedIn= true;
    console.log(loginData, "From Auth Service")
    return this.http.post('http://localhost:3000/login', loginData).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(error);;
      })
    );
  }
 
  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
 
  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  getUserProfile(): Observable<any> {
    // Use the stored username to fetch user profile
    if (!this.username) {
      return new Observable(); // Handle scenario where username is not available
    }
    console.log(this.username+"   "+"username");
    
    return this.http.get<any>(`${this.backendUrl}/user/${this.username}`);
  }

  setUsername(username: string): void {
    this.username = username;
  }

  clearUsername(): void {
    this.username = '';
    //

    this.isLoggedIn= false;
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete<any>(`${this.backendUrl}/users/${this.username}`);
  }
}
