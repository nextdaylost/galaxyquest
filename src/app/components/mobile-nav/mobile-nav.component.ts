import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MobileNavLinkListComponent } from '@app/components/mobile-nav-link-list/mobile-nav-link-list.component';
import * as MobileNavReducer from './mobile-nav.reducer';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, MobileNavLinkListComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
  mobileNavState$: Observable<MobileNavReducer.State>;

  constructor(
    private store: Store<{
      [MobileNavReducer.featureKey]: MobileNavReducer.State;
    }>
  ) {
    this.mobileNavState$ = store.select(MobileNavReducer.featureKey);
  }
}
