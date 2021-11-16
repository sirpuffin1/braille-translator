import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { addTranslationSuccess, createUserSuccess, deleteUserSuccess, loadUsers, loadUsersSuccess, loginUserSuccess, logoutUserSuccess, selectUserAction, updateUserSuccess } from '../../actions/user/user.actions';
import { Translation } from '../../../../../../shared/models/translation.model';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
  loggedInUser: User | null;

}

export const initialState: State = {
  users: [],
  loggedInUser: null,
};


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return { ...state, users: action.data }
  }),
  on(selectUserAction, (state, action) => {
    return { ...state, loggedInUser: action.data }
  }),
  on(updateUserSuccess, (state, action) => {
    return {...state, users: state.users.map(user => user._id === action.data._id ? action.data : user)}
  }),
  on(deleteUserSuccess, (state, action) => {
    return {...state, users: state.users.filter(user => user._id !== action.data._id)}
  }),
  on(createUserSuccess, (state, action) => {
    const users = [...state.users];
    users.push(action.data);
    return {...state, users}
  }),
  on(addTranslationSuccess, (state, action) => {
    return {...state, loggedInUser: action.data}
  }),
  on(loginUserSuccess, (state, action) => {

    return {...state, loggedInUser: action.data}
  }),
  on(logoutUserSuccess, (state, action) => {
    return {...state, selectedUser: null}
  })
);

