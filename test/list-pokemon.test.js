import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
import '../list-pokemon.js';

suite('ListPokemon', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <list-pokemon></list-pokemon>
      `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });
});
