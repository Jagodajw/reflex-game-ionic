import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AddUserScore, GameScoreResult } from '../app-view.interface';

@Injectable({ providedIn: 'root' })
export class AppViewApiService {
  constructor(private readonly http: HttpService) {}

  public getGameResultsByUserId(userId: string) {
    return this.http.get<GameScoreResult>(
      `api/game-results?filters[user_id][$eq]=${userId}&sort=score%3Adesc&pagination[limit]=3`
    );
  }

  public getRanking() {
    return this.http.get<GameScoreResult>(`api/game-results?sort=score%3Adesc`);
  }

  public addUserScore(addUserScoreBody: AddUserScore) {
    return this.http.post(`api/game-results`, addUserScoreBody);
  }

  public deleteUserScore(scoreId: string) {
    return this.http.delete(`api/game-results/${scoreId}`);
  }
}
