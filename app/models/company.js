import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  founderShares: attr('number'),
  optionShares: attr('number'),
  lookup: attr('number'),
  totalShares: Ember.computed('optionShares', 'founderShares', function() {
    return this.get('optionShares') + this.get('founderShares');
  })
});
