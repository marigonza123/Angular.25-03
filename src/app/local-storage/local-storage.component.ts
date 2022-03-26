import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    this.storage.setItem('item', JSON.stringify('item'));
  }
}
