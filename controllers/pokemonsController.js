const pokemons = require("../models/pokemon");

// Load the pokemon model
const Pokemons = require("../models/PokemonsModels");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
  try {
    // Use the pokemon model to interact with the database
    // find will get all documents from the pokemon collection
    const pokemons = await Pokemons.find();
    console.log(pokemons);

    // Looks in the views folder for "pokemons/Index" and passes { pokemons } data to the view (kind of like a server props object)
    res.render("pokemons/Index", { pokemons });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
  try {
    const pokemon = await Pokemons.findById(req.params.id);
    res.render("pokemons/Show", { pokemon });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /pokemons/new
module.exports.new = (req, res) => {
  res.render("pokemons/New");
};

// POST /pokemons
module.exports.create = async (req, res) => {
  console.log("POST /pokemons");

  try {
    // use the model to interact with db and create a new document in the pokemon collection
    const result = await Pokemons.create(req.body);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/pokemons");
};

// DELETE /pokemons/:name
module.exports.delete = (req, res) => {
  console.log("DELETE /pokemons/:id");
  let index = Pokemons.findIndex((item) => item.name === req.params.name);
  Pokemons.splice(index, 1);
  res.redirect("/pokemons");
};

// GET /pokemons/:name/edit
module.exports.edit = async (req, res) => {
  console.log("GET /pokemons/:id/edit");
  try {
    const pokemon = await Pokemons.findById(req.params.id);
    res.render("pokemons/Edit", { pokemon });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// PUT /pokemons/:id
module.exports.update = async (req, res) => {
  console.log("PUT /pokemons/:id");
  console.log(req.body);

  if (req.body.readyToEat) {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  try {
    // pass the id to find the document in the db and the form data (req.body) to update it
    await Pokemons.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/pokemons/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.seed = async (req, res) => {
  console.log("POST /pokemons/seed");
  try {
    await Pokemons.deleteMany({}); // Keep empty to delete everything
    Pokemons.create(pokemons);
    res.redirect("/pokemons");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.clear = async (req, res) => {
  console.log("DELETE /pokemons/clear");
  try {
    await Pokemons.deleteMany({});
    res.redirect("/pokemons");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};