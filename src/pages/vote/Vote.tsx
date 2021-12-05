import React from 'react';
import useVote from '../../hooks/useVote';
const Vote = () => {
  const { candidates } = useVote();
  return (
    <div>
      {candidates.map((candidate) => {
        return (
          <div key={candidate.id}>
            {candidate.name} {candidate.vote}
          </div>
        );
      })}
    </div>
  );
};

export default Vote;
