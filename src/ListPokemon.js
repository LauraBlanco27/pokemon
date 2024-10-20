import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './list-pokemon.css.js';
import "@bbva-experience-components/bbva-button-default/bbva-button-default.js"

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <list-pokemon></list-pokemon>
 * ```
 */
export class ListPokemon extends LitElement {
  static get properties() {
    return {
      items: { type: Array }, // Propiedad items
      arrayPokemon: { type: Array }, // Propiedad a
      name: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.arrayPokemon = []; // Inicializamos arrayPokemon
    
    this.fetchPokemon(); // Llamamos al método para obtener los Pokémon al cargar la página
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-pokemon-shared-styles'),
    ];
  }

  

  _updateCustomerData(customerList) {
    this.items = customerList;
  }

  async fetchPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json(); // Convertimos la respuesta a JSON
      const pokemonList = data.results; // Accedemos a la lista de Pokémon
      this.arrayPokemon = await Promise.all(
        pokemonList.map(async(pokemon) => {
          const res = await fetch(pokemon.url); // aqui se obtienen más detalles de cada Pokémon
          const pokemonDetails = await res.json();
          return {
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default,
            types: pokemonDetails.types.map(typeInfo => typeInfo.type.name).join(', ')
          };
        })
      );
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    }
  }

  render() {
    return html`
      <div role="list" class="card-container"> 
        ${this.arrayPokemon.length > 0
    ? this.arrayPokemon.map(pokemon => html`
              <div class="card"> <!-- Clase card para dar estilo -->
                <h2>Pokémon: ${pokemon.name}</h2>
                <div @click="${() => this.navigateToDetails(pokemon.name)}"
                        @keydown="${(e) => this._handleKeyDown(e, pokemon.name)}"
                        class="pokemon-image-button">
                  <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image">
                </div>
                <p>Tipo: ${pokemon.types}</p>
                <bbva-button-default text="Evolucion"></bbva-button-default>
              </div>
            `)
    : html`<p>Cargando datos de Pokémon...</p>`}
      </div>
    `;
  }
}
