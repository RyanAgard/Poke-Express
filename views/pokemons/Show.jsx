import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Show View</h1>
        <p>
          The <strong>{props.pokemon.name}</strong>{" "}
        </p>
        <img src={`${props.pokemon.img}.jpg`} alt={props.pokemon.name} />
        <div></div>
        <a href={`/pokemons/${props.pokemon._id}/edit`}>Edit</a>
        <br />
        <br />
        <form
          action={`/pokemons/${props.pokemon.name}?_method=DELETE`}
          method="POST"
        >
          <button>Delete</button>
        </form>
        <br />
        <a href="/pokemons">Back</a>
      </div>
    </DefaultLayout>
  );
}

export default Show;