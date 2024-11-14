import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[scorePosition]',
})
export class ScorePositionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
