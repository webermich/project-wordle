import React from 'react';

function Form({guessHistory, setGuessHistory}) {
  const [guess, setGuess] = React.useState('');
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault();
          console.log({"guess" : guess});
          setGuessHistory([...guessHistory, {'id': Math.random(), 'guess' : guess}]); 
          setGuess('');
        }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={guess}
          required
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title='Five letter word'
          onChange={event => {
            const nextInput = event.target.value.toUpperCase();
            setGuess(nextInput);
          }}
          type="text" />
      </form>
    </>);

}

export default Form;
