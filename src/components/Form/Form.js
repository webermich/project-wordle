import React from 'react';

function Form() {
  const [input, setInput] = React.useState('');
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault();
          console.log({"guess" : input});
          setInput('');
        }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={input}
          required
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title='Five letter word'
          onChange={event => {
            const nextInput = event.target.value.toUpperCase();
            setInput(nextInput);
          }}
          type="text" />
      </form>
    </>);

}

export default Form;
