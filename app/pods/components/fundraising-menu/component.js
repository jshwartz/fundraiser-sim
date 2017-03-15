import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    issueSafes() {
      let newRound = this.get('store').createRecord('investor', {
        type: "safes",
        company: this.get('company'),
      });
      newRound.save();
    }
  }
});
