import React from 'react'

function DefaultLayout(props) {

    return(
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/css/styles.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/pokemons">Pokemons</a></li>
                    </ul>
                </nav>
                <div>
                    {/* // renders everything inside the wrapping component tags */}
                    {props.children}
                </div>
            </body>
        </html>
    )
}

export default DefaultLayout