const express = require('express')

const router = express.Router()

const pokemonsController = require('../controllers/pokemonsController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for pokemonss, attach it to router along with the controller logic
router.get('/', pokemonsController.index)

// Setup a "new" route for creating pokemons
router.get('/new', pokemonsController.new)

router.delete('/clear', pokemonsController.delete)

// Setup a "delete" route for removing a specific pokemons
router.delete('/:id', pokemonsController.delete)

// Setup a "update" route for updating a specific pokemons
router.put('/:id', pokemonsController.update)

router.post('/seed', pokemonsController.seed)

// Setup a "create" route for adding pokemons data
router.post('/', pokemonsController.create)

// Setup a "edit" route for editing a pokemons
router.get('/:id/edit', pokemonsController.edit)

// Setup an "show" route for pokemonss, attach it to router along with the controller logic
router.get('/:id', pokemonsController.show)


module.exports = router;