import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as MobileNavReducer from '@app/components/mobile-nav/mobile-nav.reducer';
import { logAction } from './log.reducer';

export interface State {
  [MobileNavReducer.featureKey]: MobileNavReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [MobileNavReducer.featureKey]: MobileNavReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode()
  ? [logAction]
  : [];
