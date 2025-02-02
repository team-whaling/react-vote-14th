import { createReducer } from 'typesafe-actions';
import {
  checkUserVerificationAsync,
  postLoginAsync,
  postSignUpAsync,
} from './actions';
import { ActionT, AuthReducerI, SET_AUTH_LOADING } from './types';

const initialState: AuthReducerI = {
  user: {
    username: '',
    voted: false,
  },
  loading: false,
  success: false,
  authorized: false,
};

export const authReducer = createReducer<AuthReducerI, ActionT>(initialState, {
  [SET_AUTH_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
})
  .handleAction(postSignUpAsync.success, (state, action) => {
    return state;
  })
  .handleAction(postLoginAsync.success, (state, action) => ({
    ...state,
    success: true,
    user: {
      username: action.payload.user.username,
      voted: action.payload.user.voted,
    },
  }))
  .handleAction(postLoginAsync.failure, (state, action) => ({
    ...state,
    success: false,
  }))
  .handleAction(checkUserVerificationAsync.success, (state, action) => ({
    ...state,
    authorized: true,
  }))
  .handleAction(checkUserVerificationAsync.failure, (state, action) => ({
    ...state,
    authorized: false,
  }));
