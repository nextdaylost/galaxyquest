import { createAction } from '@ngrx/store';

import { featureKey } from './mobile-nav.constants';

export const close = createAction(`[${featureKey}] Close`);
export const open = createAction(`[${featureKey}] Open`);
