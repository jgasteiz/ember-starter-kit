App.ProductOnsaleComponent = Ember.Component.extend({
	classNames: ['row', 'product-onsale'],
	reviewsCount: Ember.computed.alias('product.reviews.length'),
	hasReviews: function() {
		return this.get('reviewsCount') > 0;
	}.property('reviewsCount')
});