import { createAction, props } from '@ngrx/store';
import { Error } from 'mongoose';
import { User } from '../../../../../../shared/models/user.model';
import { Translation } from '../../../../../../shared/models/translation.model';
import { Observable } from 'rxjs';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: Error }>()
);

export const selectUserAction = createAction(
  '[User] Select User',
  props<{ data: User | null }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{data: User}>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ data: User }>()
);

export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: Error }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{data: User}>()
);

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{ data: User }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Failure',
  props<{ error: Error }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{data: User}>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ data: User }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{ error: Error }>()
);

export const loginUser = createAction(
  '[User] Login User',
  props<{data: User}>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ data: User }>()
);

export const loginUserFailure = createAction(
  '[User] Login User Failure',
  props<{ error: Error }>()
);

export const logoutUser = createAction(
  '[User] Logout User',
)

export const logoutUserSuccess = createAction(
  '[User] Logout User Success',
)

export const logoutUserFailure = createAction(
  '[User] Logout User Failure',
  props<{error: Error}>()
)

export const addTranslation = createAction (
  '[User.Translation] Add User Translation',
  props<{ data: {_id: string, message: string} }>()
)

export const addTranslationSuccess = createAction(
  '[User] Add Translation Success',
  props<{ data: User }>()
);

export const addTranslationFailure = createAction(
  '[User] Add Translation Failure',
  props<{ error: Error }>()
);
