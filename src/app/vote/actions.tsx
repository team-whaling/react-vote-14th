import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
export const getCandidates = createAsyncAction(
  'GET_CANDIDATES_REQUEST',
  'GET_CANDIDATES_SUCCESS',
  'GET_CANDIDATES_FAIL',
)<unknown, any, AxiosError>();

export const postVote = createAsyncAction(
  'POST_VOTE_REQUEST',
  'POST_VOTE_SUCCESS',
  'POST_VOTE_FAIL',
)<unknown, any, AxiosError>();
