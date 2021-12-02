import { createReducer } from 'typesafe-actions';
const initialState = [
  {
    id: 0,
    name: null,
    vote: 0,
  },
];
export const vote = createReducer<any, any>(initialState).handleAction();
