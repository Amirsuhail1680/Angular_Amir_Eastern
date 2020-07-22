import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlpahbetOnly]'
})
export class AlpahbetOnlyDirective {

  constructor() { }
  @HostBinding('style.backgroundColor:black') color;

  key;
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    this.color='green';
    if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }
  }
}
