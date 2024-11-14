import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserInfo } from 'src/app/view/auth-view/auth.interface';
import { GameScoreResult } from '../../app-view.interface';
import { AppViewApiService } from '../../services/app-view-api.service';
import { UserInfoService } from '../../services/user-info.service';

enum Positions {
  first = 0,
  second = 1,
  third = 2,
}

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnDestroy {
  public readonly userResults$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([]);
  public positions: typeof Positions = Positions;
  private sub: Subscription;

  constructor(
    public readonly userInfoService: UserInfoService,
    private readonly http: AppViewApiService
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ionViewDidEnter() {
    this.setUserResults();
  }

  private setUserResults(): void {
    this.sub = this.userInfoService.userInfo.subscribe(
      (userInfo: UserInfo | null) => {
        if (!userInfo) return;

        this.http
          .getGameResultsByUserId(userInfo.user.id)
          .then((data: GameScoreResult) => {
            const userResultsGame: number[] = data.data.map(
              (item) => item.attributes.score
            );
            this.userResults$.next(userResultsGame);
          });
      }
    );
  }
}
