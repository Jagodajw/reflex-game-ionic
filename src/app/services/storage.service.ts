import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {}

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set<T = unknown>(key: string, value: T) {
    return this._storage?.set(key, value);
  }

  public get<T = unknown>(key: string): Promise<T> {
    return this._storage.get(key) as Promise<T>;
  }

  public remove(key: string): void {
    this._storage.remove(key);
  }
}
