import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as userFeature from '../../reducers/user/user.reducer';

export const userFeatureSelector = createFeatureSelector<AppState, userFeature.State>(userFeature.userFeatureKey);


export const userUsersSelector = createSelector(
  userFeatureSelector,
  (state) => state.users
)

