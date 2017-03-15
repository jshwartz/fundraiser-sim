import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  attr,
  hasMany
} = DS;

export default DS.Model.extend({
  investors: hasMany('investor', { async: true, dependent: 'destroy' }),
  name: attr('string'),
  founderShares: attr('number'),
  optionShares: attr('number'),
  lookup: attr('number'),
  totalShares: Ember.computed('optionShares', 'founderShares', function() {
    return this.get('optionShares') + this.get('founderShares');
  })
});
