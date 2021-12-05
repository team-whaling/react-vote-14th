import React, { useEffect } from 'react';
import { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/store';
import { getCandidateThunk } from '../app/vote/thunks';
const useVote = () => {
  const dispatch = useAppDispatch();
  const candidates = useAppSelector((state: RootState) => state.voteReducer);
  useEffect(() => {
    dispatch(getCandidateThunk());
  }, [dispatch]);
  return {
    candidates,
  };
};
export default useVote;
