import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user';
import { tap, map } from 'rxjs/operators';
import { IUserLogin } from './interfaces/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private HttpClient: HttpClient) { }

  login(body: IUserLogin): Observable<IUserLogin> {
    return this.HttpClient.post<IUserLogin>('https://fakestoreapi.com/auth/login', body);
    // .pipe(tap(body => this.currentUser = body));
  }

  register(body: IUser): Observable<IUser> {
    return this.HttpClient.post<IUser>('https://fakestoreapi.com/users', body);
  }
}
