import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Won({gameStatus}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' '}{gameStatus.count} guesses</strong>.
      </p>
    </div>
  )
}

function Lost() {
  return (<div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>)
}

function Banner({ gameStatus }) {
  return (
    (gameStatus.status != 'playing') ? 
    (gameStatus.status == 'won') ? <Won gameStatus={gameStatus}></Won> : <Lost></Lost> : <></>
  );
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({ 'status': 'playing' });

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess == answer) {
      setGameStatus({ 'status': 'won', 'count' : nextGuesses.length});
    }
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus({ 'status': 'lost' });
    }
  }

  return (
    <>
      <Banner gameStatus={gameStatus}></Banner>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;