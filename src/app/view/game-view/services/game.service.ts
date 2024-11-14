import { Injectable, OnDestroy } from '@angular/core';
import { ScorePoint, ScorePointType } from '../game-view.interface';

@Injectable()
export class GameService implements OnDestroy {
  public points: number = 0;
  public shouldAnimateScorePoints: boolean = true;
  private multiTouchListener: any;

  constructor() {
    this.multiTouchListener = this.multiTouchEvent.bind(this);
    this.multiTouchDetector();
  }

  ngOnDestroy(): void {
    window.removeEventListener('touchstart', this.multiTouchListener);
    console.log('GAME DESTROYED');
  }

  private multiTouchDetector(): void {
    window.addEventListener('touchstart', this.multiTouchListener);
  }

  private multiTouchEvent(event: TouchEvent): void {
    event.preventDefault();

    const tagName: string = (event.target as HTMLElement).tagName;
    if (tagName !== 'APP-SCORE-POINT') return;

    console.log('touches', event.touches.length);

    const scorePointType: ScorePointType = (event.target as any).type;
    const scorePoint: number = ScorePoint[scorePointType];
    const touchesNumber: number = event.touches.length;
    const points: number =
      scorePoint * touchesNumber * touchesNumber -
      (touchesNumber - 1) * (touchesNumber - 1) * scorePoint;

    this.points += points;

    this.changeShouldAniamteScorePointsState();
  }

  public changeShouldAniamteScorePointsState(): void {
    setTimeout(() => (this.shouldAnimateScorePoints = true), 200);
    this.shouldAnimateScorePoints = false;
  }
}
