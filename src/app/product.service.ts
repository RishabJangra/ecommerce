import { Injectable } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // username: string = '';
  // password: string = '';
  // email: string = '';
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  creditNo: string = '';
  username: string = '';
  password: string = '';
  selectedMembershipType: string = '';
  selectedOptions: string[] = [];
  private apiURL="https://reqres.in/api/users";
  private baseUrl = 'http://localhost:3000';
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
  private baseUrl1: string = 'https://reqres.in/api/users';
  private url2: string ='https://reqres.in/api/unknown';
  private url3: string = 'https://reqres.in/api/users?page=1';
  register(formdata: FormData): Observable<any>{
    return this.http.post<any>(this.baseUrl1, formdata);
  }
  getData():Observable<any>{
    return this.http.get<any>(this.url2);
  }
  getUsers():Observable<any>{
    return this.http.get<any>(this.url3);
  }



  login(username: string, password: string) {
    //if (username === 'rishab' && password === 'rishab') {
      this.username = username;
   // }
  }

  // login(username: string, password: string) {
  //   if (username === 'rishab' && password === 'rishab') {
  //     this.username = username;
  //   }
  // }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  // }

  logout() {
    this.username = '';
  }
}
