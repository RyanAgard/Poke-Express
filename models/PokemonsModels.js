const mongoose = require('mongoose')
const pokemons = require('./pokemon')

const Schema = mongoose.Schema

const pokemonsSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
})

const Pokemons = mongoose.model('pokemons', pokemonsSchema)

module.exports = Pokemons