import { Component, Input, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'status-online-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 3.63579C5.44078 4.02631 5.44078 4.65948 5.05025 5.05C2.31658 7.78367 2.31658 12.2158 5.05025 14.9495C5.44078 15.34 5.44078 15.9732 5.05025 16.3637C4.65973 16.7542 4.02656 16.7542 3.63604 16.3637C0.12132 12.849 0.12132 7.15051 3.63604 3.63579C4.02656 3.24526 4.65973 3.24526 5.05025 3.63579ZM14.9498 3.63602C15.3403 3.2455 15.9735 3.2455 16.364 3.63602C19.8787 7.15074 19.8787 12.8492 16.364 16.3639C15.9735 16.7545 15.3403 16.7545 14.9498 16.3639C14.5592 15.9734 14.5592 15.3403 14.9498 14.9497C17.6834 12.2161 17.6834 7.78391 14.9498 5.05023C14.5592 4.65971 14.5592 4.02655 14.9498 3.63602ZM7.87869 6.46422C8.26921 6.85474 8.26921 7.48791 7.87869 7.87843C6.70711 9.05 6.70711 10.9495 7.87869 12.1211C8.26921 12.5116 8.26921 13.1448 7.87868 13.5353C7.48816 13.9258 6.855 13.9258 6.46447 13.5353C4.51185 11.5827 4.51185 8.41684 6.46447 6.46422C6.855 6.07369 7.48816 6.07369 7.87869 6.46422ZM12.1213 6.46445C12.5119 6.07392 13.145 6.07392 13.5355 6.46445C15.4882 8.41707 15.4882 11.5829 13.5355 13.5355C13.145 13.926 12.5119 13.926 12.1213 13.5355C11.7308 13.145 11.7308 12.5118 12.1213 12.1213C13.2929 10.9497 13.2929 9.05023 12.1213 7.87866C11.7308 7.48814 11.7308 6.85497 12.1213 6.46445ZM10 8.99998C10.5523 8.99998 11 9.4477 11 9.99998V10.01C11 10.5623 10.5523 11.01 10 11.01C9.44772 11.01 9 10.5623 9 10.01V9.99998C9 9.4477 9.44772 8.99998 10 8.99998Z" fill="currentColor"/>
</svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`svg {
    height: inherit;
    width: inherit;
    color: inherit;
  }`]
})
export class StatusOnlineSolidComponent implements OnInit, OnChanges {
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