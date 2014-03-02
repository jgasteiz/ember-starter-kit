App.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('product');
	}
});
App.ProductsRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('product');
	}
});
App.ProductsOnsaleRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('products').filterBy('isOnSale');
	}
});