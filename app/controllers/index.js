import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    gotoFundraise(company) {
      this.transitionToRoute('fundraise', company);
    }
  }
});
