import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);


export const selectUser = createAction(
  '[User] Select User',
  props<{ data: User }>(),
)

export const favoriteNumber = createAction(
  '[User] Update Favorite Number',
  props<{ data: number }>(),
)
