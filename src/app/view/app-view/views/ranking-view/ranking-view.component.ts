import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserInfo } from 'src/app/view/auth-view/auth.interface';
import { GameScoreResult, RankingUsersResult } from '../../app-view.interface';
import { AppViewApiService } from '../../services/app-view-api.service';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-ranking-view',
  templateUrl: './ranking-view.component.html',
  styleUrls: ['./ranking-view.component.scss'],
})
export class RankingViewComponent implements OnDestroy {
  public readonly rankingUsers: BehaviorSubject<RankingUsersResult[]> =
    new BehaviorSubject<RankingUsersResult[]>([]);
  private sub: Subscription;

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  constructor(
    public readonly userInfoService: UserInfoService,
    private readonly http: AppViewApiService
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ionViewWillEnter() {
    this.sub = this.userInfoService.userInfo.subscribe(
      (userInfo: UserInfo | null) => {
        if (!userInfo) return;

        this.http.getRanking().then((data: GameScoreResult) => {
          const ranking: RankingUsersResult[] = data.data.map((item) => ({
            username: item.attributes.username,
            score: item.attributes.score,
          }));
          this.rankingUsers.next(ranking);
        });
      }
    );
  }
}
