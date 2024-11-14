import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { UserInfo } from '../../auth-view/auth.interface';

@Injectable({ providedIn: 'root' })
export class UserInfoService {
  public userInfo: BehaviorSubject<UserInfo | null> =
    new BehaviorSubject<UserInfo | null>(null);
  public userLastResult$: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);

  constructor(private readonly storage: StorageService) {}

  public setUserInfo(): void {
    this.storage
      .get<UserInfo>('userInfo')
      .then((userInfo: UserInfo) => this.userInfo.next(userInfo))
      .catch((err) => console.log('err', err));
  }

  public removeUserInfo(): void {
    this.storage.remove('userInfo');
  }

  public removeLastResult(): void {
    this.storage.remove('lastResult');
    this.userLastResult$.next(null);
  }

  public setLastResult(): void {
    this.storage.get<number>('lastResult').then((lastResult: number) => {
      this.userLastResult$.next(lastResult);
    });
  }
}
