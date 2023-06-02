import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';

import * as MobileNavActions from '@app/components/mobile-nav/mobile-nav.actions';
import * as MobileNavReducer from '@app/components/mobile-nav/mobile-nav.reducer';

@Component({
  selector: 'app-mobile-nav-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-nav-menu-button.component.html',
  styleUrls: ['./mobile-nav-menu-button.component.css'],
  host: { class: 'flex' },
})
export class MobileNavMenuButtonComponent {
  mobileNavState$: Observable<MobileNavReducer.State>;

  constructor(
    private store: Store<{
      [MobileNavReducer.featureKey]: MobileNavReducer.State;
    }>
  ) {
    this.mobileNavState$ = store.select(MobileNavReducer.featureKey);
  }

  async toggleMobileNavState() {
    const mobileNavState = await firstValueFrom(this.mobileNavState$);
    if (mobileNavState.isOpen) {
      this.store.dispatch(MobileNavActions.close());
    } else {
      this.store.dispatch(MobileNavActions.open());
    }
  }
}
