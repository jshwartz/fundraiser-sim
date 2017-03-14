import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    foundCompany() {
      let newCompany = this.get('store').createRecord('company', {
        name: "Mr. Company",
        founderShares: 9000000,
        optionShares: 1000000

      });
      newCompany.save();
      this.get('gotoFundraise')(newCompany);
    }
  }
});
