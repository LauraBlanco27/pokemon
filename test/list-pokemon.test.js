import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../list-pokemon.js'; 

suite('ListPokemon', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<list-pokemon></list-pokemon>`);
    await el.updateComplete;
  });

  test('You should set the initial property values.', () => {
    assert.deepEqual(el.items, []);
    assert.deepEqual(el.arrayPokemon, []);
    assert.equal(el.name, undefined); // Inicialmente no hay un valor asignado
  });

  test('Should fetch Pokémon data successfully.', async () => {
    // Simulamos que fetch se resuelve correctamente
    const fetchStub = sinon.stub(window, 'fetch').resolves({
      json: () => Promise.resolve({ results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }] }),
    });

    await el.fetchPokemon();
    await el.updateComplete;

    assert.isAbove(el.arrayPokemon.length, 0);
    assert.equal(el.arrayPokemon[0].name, 'bulbasaur');

    fetchStub.restore();
  });

  test('Render method', () => {
    el.arrayPokemon = [
      { name: 'bulbasaur', image: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png', types: 'grass, poison' },
      { name: 'ivysaur', image: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png', types: 'grass, poison' },
    ];
    el.requestUpdate(); // Notificamos que la propiedad ha cambiado
    assert.equal(el.shadowRoot.querySelectorAll('.card').length, 2);
  });

  test('Should handle error when fetching Pokémon data.', async () => {
    // Simulamos que fetch lanza un error
    const fetchStub = sinon.stub(window, 'fetch').rejects(new Error('Fetch error'));

    await el.fetchPokemon();
    await el.updateComplete;

    assert.deepEqual(el.arrayPokemon, []); // Verificamos que no haya datos
    fetchStub.restore();
  });
});
