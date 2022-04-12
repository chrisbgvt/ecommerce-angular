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

  url: string = 'https://fakestoreapi.com';

  currentUser: IUser;

  // get isLogged() {
  //   return !!this.currentUser;
  // }

  isLogged: boolean = false;

  constructor(private HttpClient: HttpClient) { }

  login(body: IUserLogin): Observable<IUserLogin> {
    localStorage.setItem('userData', JSON.stringify(body));
    this.isLogged = true;
    console.log(this.isLogged);
    return this.HttpClient.post<IUserLogin>(this.url + '/auth/login', body);
    // .pipe(tap(body => this.currentUser = body));
  }

  register(body: IUser): Observable<IUser> {
    localStorage.setItem('userData', JSON.stringify(body));
    return this.HttpClient.post<IUser>(this.url + '/users', body);
  }

  logout(): void {
    localStorage.clear();
    this.isLogged = false;
    console.log(this.isLogged)
  }
}
