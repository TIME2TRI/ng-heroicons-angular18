import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'variable-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6485 3.08366C5.15459 3.30478 5.3856 3.89429 5.16448 4.40038C4.41582 6.11389 4 8.00707 4 10C4 11.9929 4.41582 13.8861 5.16448 15.5996C5.3856 16.1057 5.15459 16.6952 4.6485 16.9164C4.14242 17.1375 3.5529 16.9065 3.33178 16.4004C2.47486 14.4391 2 12.2737 2 10C2 7.72632 2.47486 5.56091 3.33178 3.59964C3.5529 3.09355 4.14242 2.86254 4.6485 3.08366ZM12.9613 7C12.0499 7 11.188 7.41427 10.6186 8.12592L10.2911 8.53528L10.1799 8.25722C9.87619 7.4979 9.14078 7 8.32297 7H8C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H8.32297L8.8551 10.3303L7.81962 11.6247C7.62985 11.8619 7.34253 12 7.03875 12H7C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H7.03875C7.9501 14 8.81204 13.5857 9.38136 12.8741L9.70885 12.4647L9.82008 12.7428C10.1238 13.5021 10.8592 14 11.677 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H11.677L11.1449 10.6697L12.1804 9.37531C12.3702 9.13809 12.6575 9 12.9613 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H12.9613ZM14.8355 4.40038C14.6144 3.89429 14.8454 3.30478 15.3515 3.08366C15.8576 2.86254 16.4471 3.09355 16.6682 3.59964C17.5251 5.56091 18 7.72632 18 10C18 12.2737 17.5251 14.4391 16.6682 16.4004C16.4471 16.9065 15.8576 17.1375 15.3515 16.9164C14.8454 16.6952 14.6144 16.1057 14.8355 15.5996C15.5842 13.8861 16 11.9929 16 10C16 8.00707 15.5842 6.11389 14.8355 4.40038Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class VariableSolidComponent implements OnInit, OnChanges {
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