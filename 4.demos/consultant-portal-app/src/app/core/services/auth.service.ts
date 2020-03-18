import { Injectable } from '@angular/core';
import { UserIdentity } from '../models/auth/user-identity';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private userIdentity: UserIdentity;

  constructor(private localStorage: LocalStorageService) { }

  isAuthenticated() {
    return this.authenticated;
  }

  getUserIdentity() {
    return this.localStorage.getItem<UserIdentity>('USER_IDENTITY');
  }

  login(userName: string, password: string): Observable<boolean> {
    if (userName === undefined) { throw new Error('param userName is null'); }
    if (password === undefined) { throw new Error('param password is null'); }

    userName = userName.trim();
    password = password.trim();

    if (userName === '') { throw new Error('param userName is empty'); }
    if (password === '') { throw new Error('param password is  empty'); }

    if (userName === 'admin' && password === 'admin') {
      this.authenticated = true;
      this.userIdentity = {
        userName: 'admin',
        user: {
          names: 'admin',
          lastNames: 'admin'
        },
        roles: [{
          name: 'ADMIN'
        }],
        token: '',
        refreshToken: ''
      };
      this.localStorage.setItem('USER_IDENTITY', this.userIdentity);
      return of(true);
    }

    if (userName === '43151256' && password === '43151256') {
      this.authenticated = true;
      this.userIdentity = {
        userName: '43151256',
        user: {
          names: 'Victor',
          lastNames: 'Vilela'
        },
        roles: [{
          name: 'CONSULTANT'
        }],
        token: '',
        refreshToken: ''
      };
      this.localStorage.setItem('USER_IDENTITY', this.userIdentity);
      return of(true);
    }
  }
}
