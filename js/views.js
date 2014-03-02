App.ProductView = Ember.View.extend({
	classNames: ['row'],
	classNameBindings: ['isOnSale'],
	isOnSale: Ember.computed.alias('controller.isOnSale')
});

App.ReviewView = Ember.View.extend({
	isExpanded: false,
	classNameBindings: ['isExpanded', 'readMore'],
	click: function() {
		this.toggleProperty('isExpanded');
	},
	readMore: Ember.computed.gt('length', 140)
});
