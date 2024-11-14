import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ScorePointType } from '../../game-view.interface';

@Component({
  selector: 'app-score-point',
  templateUrl: './score-point.component.html',
  styleUrls: ['./score-point.component.scss'],
})
export class ScorePointComponent implements OnInit {
  @Input() public type: ScorePointType;

  constructor(private readonly el: ElementRef) {}

  ngOnInit() {
    setTimeout(() => this.el.nativeElement.remove(), 1000);
  }

  @HostListener('touchstart') onTouched() {
    this.el.nativeElement.remove();
  }

  @HostBinding('style.backgroundColor') get backgroundColor(): string {
    return this.type === ScorePointType.OK ? 'green' : 'red';
  }

  @HostBinding('type') get getType(): string {
    return this.type;
  }

  public setRandomPosition(): void {
    this.el.nativeElement.style.top = this.getRandomArbitrary(10, 80) + '%';
    this.el.nativeElement.style.left = this.getRandomArbitrary(10, 80) + '%';
  }

  private getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
