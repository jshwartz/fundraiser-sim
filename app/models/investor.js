import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  company: belongsTo('company', { async: true, autoSave: true }),
  type: attr('string'),
  name: attr('string'),
  closingDate: attr('date'),
  amountRaised: attr('number'),
  valuationCap: attr('number'),
  discountRate: attr('number'),
  issuedShares: attr('number'),
  converted: attr('boolean'),
});
