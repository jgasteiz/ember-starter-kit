App = Ember.Application.create();

App.Router.map(function() {
	this.route('about');
	this.route('credits');
	this.resource('products', function() {
		this.resource('product', {path: '/:product_id'});
		this.route('onsale');
	});
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();
