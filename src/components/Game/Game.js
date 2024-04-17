import React from 'react';
import Form from '../Form';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessHistory from '../GuessHistory/GuessHistory';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

 
  return (
  <>
    <GuessHistory guessHistory={guessHistory}></GuessHistory>
    <Form guessHistory={guessHistory} setGuessHistory={setGuessHistory}></Form>
  </>
  );
}

export default Game;
