import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: true,
  helpText: null,
  valuationHelpText: "blah blah blah valuation caps",
  discountHelpText: "blee bloo blah discount rates",
  safesHelpText: "tool la ree Safes are cool",
  seedHelpText: "snoobly snoo Seed round",

  init() {
    this._super(...arguments);
    this.set('helpText', this.get('seedHelpText'));
  },

  actions: {
    completeRound() {
      this.set('isEditing', false);
    },
    editRound() {
      this.set('isEditing', true);
    },
    setHelpText(option) {
      if (option === "valuation") {
        this.set('helpText', this.get('valuationHelpText'));
      } else if (option === "discount") {
        this.set('helpText', this.get('discountHelpText'));
      } else if (option === "seed") {
        this.set('helpText', this.get('seedHelpText'));
      } else if (option === "safes") {
        this.set('helpText', this.get('safesHelpText'));
      }
    }
  }

});
