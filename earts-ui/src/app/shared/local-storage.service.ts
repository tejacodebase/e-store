import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(storageName: string, data: any) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

  getLocalStorage(storageName: string) {
    let data = localStorage.getItem(storageName);
    return JSON.parse(data || '' );
  }

  clearLocalStorage(storageName: string) {
    localStorage.removeItem(storageName);
  }

  cleanAll() {
    localStorage.clear()
  }
}
