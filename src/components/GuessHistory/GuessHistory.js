import React from 'react';

function GuessHistory({guessHistory}) {

  return (
    <>
      <div className="guess-results">
      {guessHistory.map(({id, guess}) => <p key={id} className="guess">{guess}</p>)}
      </div>
    </>
  );
}

export default GuessHistory;
