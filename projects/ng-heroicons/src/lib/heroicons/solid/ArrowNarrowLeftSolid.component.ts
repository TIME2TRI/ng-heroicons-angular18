import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'arrow-narrow-left-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L6.29289 5.29289C6.68342 4.90237 7.31658 4.90237 7.70711 5.29289C8.09763 5.68342 8.09763 6.31658 7.70711 6.70711L5.41421 9L17 9C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071Z" fill="currentColor"/>
</svg>`,
})
export class ArrowNarrowLeftSolidComponent extends BaseSolidIconComponent { }