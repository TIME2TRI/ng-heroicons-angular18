import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'status-offline-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L9.21426 10.6285C9.26325 10.6906 9.31947 10.7469 9.38164 10.7958L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L17.0323 15.6181C19.8626 12.0844 19.6398 6.91177 16.3641 3.63603C15.9736 3.24551 15.3404 3.24551 14.9499 3.63603C14.5593 4.02656 14.5593 4.65972 14.9499 5.05025C17.4435 7.54386 17.6625 11.4508 15.6068 14.1926L14.172 12.7578C15.4582 10.8164 15.2461 8.17494 13.5357 6.46446C13.1451 6.07394 12.512 6.07394 12.1214 6.46446C11.7309 6.85498 11.7309 7.48815 12.1214 7.87867C13.0451 8.80233 13.2406 10.1784 12.7078 11.2936L10.7164 9.30219C10.7103 9.29595 10.7042 9.28979 10.6979 9.2837L3.70711 2.29289Z" fill="currentColor"/>
<path d="M3.23766 8.1865C3.38012 7.65291 3.06305 7.10485 2.52946 6.96239C1.99586 6.81992 1.44781 7.137 1.30535 7.67059C0.5045 10.6701 1.27982 14.0074 3.63615 16.3637C4.02667 16.7542 4.65984 16.7542 5.05036 16.3637C5.44089 15.9732 5.44089 15.34 5.05036 14.9495C3.21924 13.1184 2.6134 10.5246 3.23766 8.1865Z" fill="currentColor"/>
<path d="M7.40075 11.4995C7.12434 11.0214 6.51266 10.8578 6.03452 11.1343C5.55639 11.4107 5.39285 12.0223 5.66926 12.5005C5.88367 12.8714 6.14907 13.2198 6.46458 13.5353C6.85511 13.9258 7.48827 13.9258 7.8788 13.5353C8.26932 13.1448 8.26932 12.5116 7.8788 12.1211C7.68771 11.93 7.52865 11.7208 7.40075 11.4995Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class StatusOfflineSolidComponent implements OnInit, OnChanges {
  @Input() style: string = "";
  @Input() size: number = 24;
  @Input() color: string = "";

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
      style.push(`width: ${this.size}px; height: ${this.size}px;`);
    }
    if (this.color) {
      style.push(`color: ${this.color};`);
    }

    this.style = style.join(' ') + this.style;
  }
}