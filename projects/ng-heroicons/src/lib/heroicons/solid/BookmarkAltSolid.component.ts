import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'bookmark-alt-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5ZM14 6H6V14L10 12L14 14V6Z" fill="currentColor"/>
</svg>`,
})
export class BookmarkAltSolidComponent extends BaseSolidIconComponent { }