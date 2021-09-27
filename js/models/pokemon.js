class Pokemon {
  constructor(
    id,
    name,
    widght,
    height,
    types,
    stats,
    sprites
    // abilities,
    // moves
  ) {
    this._id = id;
    this._name = name;
    this._widght = widght;
    this._height = height;
    this._types = types;
    this._stats = stats;
    this._sprites = sprites;
    //   this._abilities = abilities;
    //   this._moves = moves;
  }

  viewIndex() {
    let model = {
      types: this._types,
      src: this._sprites,
      name: this._name,
    };

    let div = document.querySelector('#pokemonView');

    div.innerHTML
      ? (div.innerHTML += PokemonView.templateIndex(model))
      : (div.innerHTML = PokemonView.templateIndex(model));
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get weight() {
    return this._weight;
  }

  get height() {
    return this._height;
  }

  get types() {
    return this._types;
  }

  get stats() {
    return this._stats;
  }

  get sprites() {
    return this._sprites;
  }
}
