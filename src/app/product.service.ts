import { Injectable } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  creditNo: string = '';
  user: string = '';
  password: string = '';
  selectedMembershipType: string = '';
  selectedOptions: string[] = [];
  private apiURL="https://reqres.in/api/users";
  // products: any[] = [];
  // constructor(private http: HttpClient) {
  // }

  // getData():Observable<any[]>{
  //   return this.http.get<any[]>(this.apiURL);
  // }
  // private baseUrl: string = 'https://reqres.in/api/users?page=2';
  // register(formdata: FormData): Observable<any>{
  //   return this.http.post<any>(this.baseUrl, formdata);
  // }

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://reqres.in/api/users';
  private url2: string ='https://reqres.in/api/unknown';
  private url3: string = 'https://reqres.in/api/users?page=1';
  register(formdata: FormData): Observable<any>{
    return this.http.post<any>(this.baseUrl, formdata);
  }
  getData():Observable<any>{
    return this.http.get<any>(this.url2);
  }
  getUsers():Observable<any>{
    return this.http.get<any>(this.url3);
  }



  login(username: string, password: string) {
    // Simulate login logic, set the user property on successful login
    if (username === 'rishab' && password === 'rishab') {
      this.user = username;
      // You can also set other user-related properties here
      // For example, this.firstName, this.lastName, etc.
    }
  }

  logout() {
    // Clear user data on logout
    this.user = '';
    // You may want to clear other user-related properties as well
  }
}
