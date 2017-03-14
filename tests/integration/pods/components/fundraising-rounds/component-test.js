import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fundraising-rounds', 'Integration | Component | fundraising rounds', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fundraising-rounds}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fundraising-rounds}}
      template block text
    {{/fundraising-rounds}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
