import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './list-pokemon.css.js';
import "@bbva-experience-components/bbva-button-default/bbva-button-default.js";
import "@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js";
import "@bbva-experience-components/bbva-type-text/bbva-type-text.js"
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import "@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js"
import "@pokemon/pokemon-list-dm/pokemon-list-dm.js"

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
 
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-pokemon-shared-styles'),
    ];
  }

  async firstUpdated() {
    const PokemonListDm = this.shadowRoot.querySelector('pokemon-list-dm');
    this.loading = true;
    this.arrayPokemon = await PokemonListDm.fetchPokemon();
    this.loading = false;
  }
  

  render() {
    return html`
      <div class="container">
        ${this.loading 
          ? html`<bbva-foundations-spinner></bbva-foundations-spinner>` 
          : html`
            <div role="list" class="card-container"> 
              ${this.arrayPokemon.map(pokemon => html`
                <div class="card">
                  <bbva-type-text text="${pokemon.name}"></bbva-type-text>
                  <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image">
                  <bbva-button-default 
                    text="Ver Evoluciones" 
                    @click="${() => this.navigateToEvolution(pokemon.name)}">
                  </bbva-button-default>
                </div>
              `)}
            </div>
          `}
      </div>
      <pokemon-list-dm></pokemon-list-dm>
    `;
  }

  navigateToEvolution(pokemonName) {
    this.dispatchEvent(new CustomEvent('navigate-to-evolution', {
      detail: { pokemonName },
      bubbles: true,
      composed: true
    }));
  }
}


