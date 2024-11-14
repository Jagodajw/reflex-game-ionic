import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';
import { UserInfo } from './view/auth-view/auth.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly storage: StorageService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    await this.storage.init();
    await this.checkSession();
  }

  private async checkSession(): Promise<void> {
    const activeSession = await this.storage.get<UserInfo>('userInfo');
    if (activeSession) this.router.navigate(['app-view']);
  }
}
