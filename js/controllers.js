App.IndexController = Ember.ArrayController.extend({
	productsCount: Ember.computed.alias('length'),
	onSale: function() {
		return this.filterBy('isOnSale').slice(0, 3);
	}.property('@each.isOnSale')
});

App.ProductsController = Ember.ArrayController.extend({
	sortProperties: ['title']
});

App.ProductController = Ember.ObjectController.extend({
	review: function() {
		return this.store.createRecord('review', {
			product: this.get('model')
		});
	}.property('model'),
	actions: {
		createReview: function() {
			var controller = this;
			this.get('review').set('reviewedAt', new Date());
			this.get('review').save().then(function(review) {
				controller.get('model.reviews').addObject(review);
			});
		}
	},
	isNotReviewed: Ember.computed.alias('review.isNew')
});

App.ReviewsController = Ember.ArrayController.extend({
	sortProperties: ['reviewedAt'],
	sortAscending: false	
});
