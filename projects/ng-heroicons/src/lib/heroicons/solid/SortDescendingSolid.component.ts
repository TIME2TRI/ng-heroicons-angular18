import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'sort-descending-solid-icon',
  template: `<svg [style]="style" [ngClass]="class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H3Z" fill="currentColor"/>
<path d="M3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H3Z" fill="currentColor"/>
<path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H3Z" fill="currentColor"/>
<path d="M15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44771 13 8L13 13.5858L11.7071 12.2929C11.3166 11.9024 10.6834 11.9024 10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071L13.2929 16.7071C13.4804 16.8946 13.7348 17 14 17C14.2652 17 14.5196 16.8946 14.7071 16.7071L17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929C17.3166 11.9024 16.6834 11.9024 16.2929 12.2929L15 13.5858L15 8Z" fill="currentColor"/>
</svg>`,
})
export class SortDescendingSolidComponent extends BaseSolidIconComponent { }