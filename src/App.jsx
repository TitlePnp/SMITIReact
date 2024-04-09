import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Receipt from './Receipt/Receipt';

function App() {
  const [recID, setRecID] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log("Updated recID:", recID);
  }, [recID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecID(e.target.data.value);
    setIsSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='data'></input>
        <button type='submit'>Submit</button>
      </form>
      {isSubmitted && <Receipt recID={recID}/>}
    </>
  );
}

export default App;
