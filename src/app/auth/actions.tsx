import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { LoginPayloadI, SignUpPayloadI } from './types';

export const postSignUpAsync = createAsyncAction(
  'auth/POST_SIGN_UP_REQUEST',
  'auth/POST_SIGN_UP_SUCCESS',
  'auth/POST_SIGN_UP_FAIL',
)<unknown, SignUpPayloadI, AxiosError>();

export const postLoginAsync = createAsyncAction(
  'auth/POST_LOGIN_REQUEST',
  'auth/POST_LOGIN_SUCCESS',
  'auth/POST_LOGIN_FAIL',
)<unknown, LoginPayloadI, AxiosError>();
