import { Component, OnDestroy, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AddUserScore, GameScoreResult } from '../app-view/app-view.interface';
import { AppViewApiService } from '../app-view/services/app-view-api.service';
import { UserInfoService } from '../app-view/services/user-info.service';
import { ScorePointComponent } from './components/score-point/score-point.component';
import { ScorePointType } from './game-view.interface';
import { ScorePositionDirective } from './score-position.directive';
import { GameService } from './services/game.service';
import { GameOverService } from './services/gameover-popup.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
  providers: [GameService, GameOverService],
})
export class GameViewComponent implements OnDestroy {
  @ViewChild(ScorePositionDirective, { static: true })
  scorePosition: ScorePositionDirective;
  public readonly GAME_DURATION: number = 60;
  private readonly LIMIT_SPAWN_PER_SECOND: number = 5;
  public timeOfGame: number = this.GAME_DURATION;
  private intervalRef: any;

  constructor(
    public readonly gameService: GameService,
    private readonly gameOverPopup: GameOverService,
    private readonly storage: StorageService,
    private readonly http: AppViewApiService,
    private readonly userInfo: UserInfoService
  ) {}

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
    this.resetVariables();
  }

  ionViewDidEnter(): void {
    this.startGame();
  }

  private startGame(): void {
    // this.spawnElements();

    this.intervalRef = setInterval(() => {
      this.timeOfGame -= 1;
      this.spawnElements();
      if (this.timeOfGame === 0) this.gameOver();
    }, 1000);
  }

  private spawnElements(): void {
    for (let i = 0; i < this.LIMIT_SPAWN_PER_SECOND; ++i) this.spawnElement();
  }

  private spawnElement(): void {
    const viewContainerRef = this.scorePosition.viewContainerRef;
    const componentRef =
      viewContainerRef.createComponent<ScorePointComponent>(
        ScorePointComponent
      );
    componentRef.instance.type =
      Math.random() > 0.5 ? ScorePointType.OK : ScorePointType.BAD;
    componentRef.instance.setRandomPosition();
  }

  private gameOver(): void {
    clearInterval(this.intervalRef);
    this.gameOverPopup.onPopup(this.gameService.points, () => this.startGame());
    this.setLastResult();
    this.setResult();
  }

  private setLastResult(): void {
    this.storage.set('lastResult', this.gameService.points);
  }

  private setResult(): void {
    let addUserResult: AddUserScore = {
      data: {
        username: this.userInfo.userInfo.value.user.username,
        score: this.gameService.points,
        user_id: this.userInfo.userInfo.value.user.id,
      },
    };

    this.http
      .getGameResultsByUserId(this.userInfo.userInfo.value.user.id)
      .then((gameScoreResult: GameScoreResult) => {
        if (gameScoreResult.data.length < 3) {
          this.http.addUserScore(addUserResult);
        } else if (
          gameScoreResult.data.filter(
            (result) => result.attributes.score < this.gameService.points
          ).length
        ) {
          this.http.deleteUserScore(
            gameScoreResult.data[gameScoreResult.data.length - 1].id
          );
          this.http.addUserScore(addUserResult);
        }
        this.resetVariables();
      });
  }

  private resetVariables(): void {
    this.timeOfGame = this.GAME_DURATION;
    this.gameService.points = 0;
  }
}
