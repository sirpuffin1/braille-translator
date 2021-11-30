import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import { Translation } from '../../../../../../shared/models/translation.model';
import * as fromUser from '../../reducers/user/user.reducer';


const userFeatureSelector = createFeatureSelector<AppState, fromUser.State>(fromUser.userFeatureKey);

export const usersSelector = createSelector(
  userFeatureSelector,
  (state) => state.users
);

export const loggedInUserSelector = createSelector(
  userFeatureSelector,
  (state) => state.loggedInUser
)

export const translationsSelector = createSelector(
  userFeatureSelector,
  (state) => state.loggedInUser?.translations as Translation[]
)

// export const deletedTranslationSelector = createSelector(

// )

