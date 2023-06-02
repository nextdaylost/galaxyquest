import { createReducer, on } from '@ngrx/store';

import * as MobileNavActions from './mobile-nav.actions';

export { featureKey } from './mobile-nav.constants';

export interface State {
  isOpen: boolean;
}

export const initialState: State = {
  isOpen: false,
};

export const reducer = createReducer(
  initialState,
  on(MobileNavActions.close, (state) => ({ ...state, isOpen: false })),
  on(MobileNavActions.open, (state) => ({ ...state, isOpen: true }))
);
