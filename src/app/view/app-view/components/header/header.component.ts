import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;

  constructor(private readonly userInfoService: UserInfoService) {}

  ngOnInit() {}

  public logout(): void {
    this.userInfoService.removeUserInfo();
    this.userInfoService.removeLastResult();
  }
}
