import { Component } from '@angular/core';
import { UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
})
export class AppViewComponent {
  constructor(private userInfo: UserInfoService) {}

  ionViewWillEnter() {
    this.userInfo.setLastResult();

    if (this.userInfo.userInfo) this.userInfo.setUserInfo();
  }
}
