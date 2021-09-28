import { Pokemon } from '../models/pokemon';
import { HttpService } from '../services/httpService';
import { PokemonHelper } from '../helpers/pokemonHelper';

class PokemonController {
  getPokemon(list, url) {
    this._loop(0, list.length, url, list);
  }

  _loop(index, length, url, list) {
    if (index >= length) {
      return;
    }
    new HttpService()
      .get(url + list[index])
      .then((pokemon_data) => JSON.parse(pokemon_data))
      .then((pokemon_json) => {
        // console.log(pokemon_json);

        let sprites = PokemonHelper.adjustSprintes(pokemon_json.sprites);

        let stats = PokemonHelper.adjustStats(pokemon_json.stats);

        // console.log(stats);

        let pokemon = new Pokemon(
          pokemon_json.id,
          pokemon_json.name,
          pokemon_json.weight,
          pokemon_json.height,
          pokemon_json.types.length !== 0
            ? [...pokemon_json.types.map((item) => item.type.name)]
            : pokemon_json.types,
          stats,
          sprites
        );

        // console.log(pokemon);
        pokemon.viewIndex();

        this._loop(index + 1, length, url, list);
      })
      .catch((err) => console.error(err));
  }
}

let pokemonController = new PokemonController();
export function pokemonCurrentInstance() {
  return pokemonController;
}
