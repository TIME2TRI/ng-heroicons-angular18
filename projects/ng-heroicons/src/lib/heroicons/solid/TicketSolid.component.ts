import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ticket-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8V6Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class TicketSolidComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() color: string = "";
  @Input() class: string = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const colorHasChanged = changes.color?.previousValue !== changes.color?.currentValue;
    const sizeHasChanged = changes.size?.previousValue !== changes.size?.currentValue;
    if (colorHasChanged || sizeHasChanged) {
      this.style = "";
      this.renderStyle();
    }
  }

  ngOnInit(): void {
    this.renderStyle();
  }

  renderStyle() {
    let style = [];
    if (this.size) {
      style.push(`width: ${this.size}; height: ${this.size};`);
    }
    if (this.color) {
      style.push(`color: ${this.color};`);
    }

    this.style = style.join(' ') + this.style;
  }
}