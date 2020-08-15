import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpConnect {
  constructor(private http: HttpClient) {}
  login = (email, password) => {
    return this.http.post(
      'http://localhost:3001/api/v1/user/login',
      JSON.stringify({ email: email, password: password }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  };
  logout = (token) => {
    return this.http.post(
      'http://localhost:3001/api/v1/user/logout',
      {},
      { headers: { 'Authorization': token} }
    );
  };
  signup = (name, email, phoneno, password) => {
    return this.http.post(
      'http://localhost:3001/api/v1/user/signup',
      JSON.stringify({
        name: name,
        email: email,
        password: password,
        phoneNo: phoneno,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  };
}
