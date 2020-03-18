import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserIdentity } from '../models/auth/user-identity';
import { LocalStorageService } from './local-storage.service';
import { UserInfoService } from './user-info.service';
import { Constants, User } from '..';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private userIdentity: UserIdentity;

  constructor(private localStorage: LocalStorageService, private userInfoService: UserInfoService) { }

  isAuthenticated() {
    return this.authenticated;
  }

  getUserIdentity() {
    const userIdentity = this.localStorage.getItem<UserIdentity>(Constants.localStorage().userIdentity());
    if (userIdentity !== undefined) {
      this.userInfoService.get(userIdentity.userName).subscribe(x => {
        userIdentity.user = x;
        return of(userIdentity);
      });
    }
    return of(userIdentity);
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
        user: null,
        roles: [{
          name: 'ADMIN'
        }],
        token: '',
        refreshToken: ''
      };
      this.localStorage.setItem(Constants.localStorage().userIdentity(), this.userIdentity);
      return of(true);
    }

    if (userName === '43151256' && password === '43151256') {
      this.authenticated = true;
      this.userIdentity = {
        userName: '43151256',
        user: null,
        roles: [{
          name: 'CONSULTANT'
        }],
        token: '',
        refreshToken: ''
      };
      this.localStorage.setItem(Constants.localStorage().userIdentity(), this.userIdentity);
      return of(true);
    }
    return of(false);
  }
}
