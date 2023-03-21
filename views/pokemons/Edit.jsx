import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit pokemon</h1>
        <form action={`/pokemons/${props.pokemon._id}?_method=PUT`} method="POST">
          <label htmlFor="nme">Name:</label>
          <br />
          <input type="text" id="nme" name="name" value={props.pokemon.name} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;