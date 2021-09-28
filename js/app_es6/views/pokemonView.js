export class PokemonView {
  static templateIndex(model) {
    return `
              <li>
                <div>
                  <img
                    class="type-background-${
                      model.types.length != 1 && model.types[0] == 'normal'
                        ? model.types[1]
                        : model.types[0]
                    }"
                    src=${model.sprite}
                    alt= "${model.name} Image"
                  />
                  <h3>${model.name}</h3>
                  <p>
                    ${model.types
                      .map(
                        (type) => `
                      <p class="type-default type-color-${type}">
                        ${type}
                      </p>
                    `
                      )
                      .join('')}
                  </p>
                </div>
              </li>
            `;
  }
}

// <ul class="list-index-pokemons">
// <li>
//   <div>
//     <img
//       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
//       alt=""
//     />
//     <h3>pidgey</h3>
//     <p>
//       <span style="background: #a4acaf"> normal</span>
//       <span
//         style="
//           background: linear-gradient(
//             #3dc7ef 0% 50%,
//             #bdb9b8 50% 100%
//           );
//         "
//       >
//         flying</span
//       >
//     </p>
//   </div>
// </li>
// <li>
//   <div>
//     <img
//       id="fire"
//       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//       alt=""
//       style=""
//     />
//     <h3>charmander</h3>
//     <p><span style="background: #fd7d24">fire</span></p>
//   </div>
// </li>
// <li>
//   <div></div>
// </li>
// <li>
//   <div></div>
// </li>
// <li>
//   <div></div>
// </li>
// </ul>
