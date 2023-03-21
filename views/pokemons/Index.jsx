import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <DefaultLayout>
            <div>
                <h1>Welcome to the Pokemon App!</h1>
                <ul>
                    {props.pokemons.map((pokemon, index) => 
                        <li key={index}>
                            <a href={`/pokemons/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
                        </li>
                    )}
                </ul>
                <a href="/pokemons/new">Add...</a>

                <br/><br/><br/>

                <form action="/pokemons/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/pokemons/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Index