import { createReducer } from 'typesafe-actions';
import { getCandidates, postVote } from './actions';
import { ActionT, CandidatePayloadI } from './types';
const initialState: CandidatePayloadI[] = [
  {
    id: 0,
    name: '',
    vote: 0,
  },
];
export const vote = createReducer<CandidatePayloadI[], ActionT>(initialState)
  .handleAction(getCandidates.success, (state, action) =>
    state.concat(action.payload),
  )
  .handleAction(postVote.success, (state, action) => action.payload);
