import React from 'react';

function New() {
  return (
    <div>
      <h1>New pokemon</h1>
      <form action="/pokemons" method="POST">
        <label htmlFor="nme">Pokemon:</label>
        <br />
        <input type="text" id="nme" name="name" />
        <br />
        <br />

        <label htmlFor="img">Image URL:</label>
        <br />
        <input type="text" id="img" name="img" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;