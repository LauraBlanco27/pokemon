import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './list-pokemon.css.js';
import "@bbva-experience-components/bbva-button-default/bbva-button-default.js";
import "@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js";
import "@bbva-experience-components/bbva-type-text/bbva-type-text.js"
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import "@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js"

export class ListPokemon extends BbvaCoreIntlMixin(LitElement) {
  

  static get properties() {
    return {
      items: { type: Array }, 
      arrayPokemon: { type: Array }, 
      name: { type: String },
      loading: { type: Boolean }, 
    };
  }

  constructor() {
    super();
    this.items = [];
    this.arrayPokemon = [];
    this.loading = true;
    this.fetchPokemon(); 
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-pokemon-shared-styles'),
    ];
  }

  async fetchPokemon(limit = 100, offset = 0) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json(); 
      const pokemonList = data.results; // Accedemos a la lista de Pokémon
      this.arrayPokemon = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await fetch(pokemon.url); // obtener más detalles de cada Pokémon
          const pokemonDetails = await res.json();
          return {
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default,
            types: pokemonDetails.types.map(typeInfo => typeInfo.type.name).join(', ')
          };
        })
      );
      this.loading = false;
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
      this.loading = false; 
    }
  }

  render() {
    return html`
    <div class=container>
      ${this.loading 
        ? html`<bbva-foundations-spinner></bbva-foundations-spinner>` 
        : html`
          <div>
            <bbva-type-text text="${this.t('pokemon-title')}" size="3XL"></bbva-type-text>
          </div>
          <div role="list" class="card-container"> 
            ${this.arrayPokemon.length > 0
              ? this.arrayPokemon.map(pokemon => html`
                <div class="card">
                  <bbva-type-text text="${pokemon.name}"></bbva-type-text>
                  <div @click="${() => this.navigateToDetails(pokemon.name)}"
                       @keydown="${(e) => this._handleKeyDown(e, pokemon.name)}"
                       class="pokemon-image-button">
                    <img src="${pokemon.image}" alt="${pokemon.name}" slot="media" class="pokemon-image">
                  </div>
                  <div>
                    ${pokemon.types.split(', ').map(type => html`
                      <bbva-type-text class="pokemon-type ${type.toLowerCase()}" text="${type}"></bbva-type-text>
                    `)}
                  </div>
                  <bbva-button-default variant="secondary" text="${this.t('pokemon-button')}" ></bbva-button-default>
                </div>
              `)
              : html`<p>No se encontraron Pokémon.</p>`}
          </div>
        `}
      </div>
    `;
  }
}
