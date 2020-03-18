import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService, User, Helpers, Constants } from '..';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private localStorage: LocalStorageService) { }

  get(userName: string): Observable<User> {
    if (Helpers.isNullOrEmpty(userName)) { throw new Error('param userName is null or empty'); }

    let user = this.localStorage.getItem<User>(Constants.localStorage().userInfo());
    if (!user) {
      if (userName === 'admin') {
        user = {
          names: 'admin',
          lastNames: 'admin'
        };
      }

      if (userName === '43151256') {
        user = {
          names: 'Victor',
          lastNames: 'Vilela'
        };
      }
    }

    this.localStorage.setItem(Constants.localStorage().userInfo(), user);

    return of(user);
  }

  set(userName: string, userInfo: User): void {
    if (Helpers.isNullOrEmpty(userName)) { throw new Error('param userName is null or empty'); }

    if (userInfo === null) { throw new Error('param user is null or empty'); }

    this.localStorage.setItem(Constants.localStorage().userInfo(), userInfo);
  }
}
