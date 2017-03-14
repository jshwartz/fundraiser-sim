import Ember from 'ember';

export function formatNumber([value]) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Ember.Helper.helper(formatNumber);
