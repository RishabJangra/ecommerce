// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({ providedIn: 'root' })
// export class RegistrationService {

   
//   constructor(private http: HttpClient) {}
//   registerUser(username: string, password: string, email: string):Observable<any> {
//     console.log("done");
//     return this.http.post('http://localhost:3000/register', {
//       username,
//       password,
//       email
//     });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  registerUser(username: string, password: string, email: string):Observable<any> {
    console.log(username);
    console.log(password);
    console.log(email);
    const registartion_data={
      username:username,
      password:password,
      email:email
    }
    return this.http.post(`http://localhost:3000/register`,registartion_data);
  }
}
 