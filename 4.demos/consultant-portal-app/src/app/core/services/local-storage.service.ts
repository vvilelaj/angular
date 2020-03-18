import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(key: string, item: any): void {
    if (key === undefined || key.trim() === '') { throw new Error('param key is null or undefined'); }
    if (item === undefined) { throw new Error('param item is null'); }

    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem<T>(key: string): T {
    if (key === undefined || key.trim() === '') { throw new Error('param key is null or undefined'); }

    return JSON.parse(localStorage.getItem(key)) as T;
  }

  removeITem(key: string): void {
    if (key === undefined || key.trim() === '') { throw new Error('param key is null or undefined'); }
    localStorage.removeItem(key);
  }
}
