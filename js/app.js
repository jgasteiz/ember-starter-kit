App = Ember.Application.create();

App.Router.map(function() {
	this.route('about');
	this.route('credits');
	this.resource('products', function() {
		this.resource('product', {path: '/:product_id'});
		this.route('onsale');
	});
});


// Index
App.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('product');
	}
});
App.IndexController = Ember.ArrayController.extend({
	productsCount: Ember.computed.alias('length'),
	onSale: function() {
		return this.filterBy('isOnSale').slice(0, 3);
	}.property('@each.isOnSale')
});

// Products
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
App.ProductsController = Ember.ArrayController.extend({
	sortProperties: ['title']
});
App.ProductView = Ember.View.extend({
	classNames: ['row'],
	classNameBindings: ['isOnSale'],
	isOnSale: Ember.computed.alias('controller.isOnSale')
});
App.ProductOnsaleComponent = Ember.Component.extend({
	classNames: ['row', 'product-onsale'],
	reviewsCount: Ember.computed.alias('product.reviews.length'),
	hasReviews: function() {
		return this.get('reviewsCount') > 0;
	}.property('reviewsCount')
});

// Reviews
App.ReviewsController = Ember.ArrayController.extend({
	sortProperties: ['reviewedAt'],
	sortAscending: false
});


App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product = DS.Model.extend({
	title: DS.attr('string'),
	price: DS.attr('number'),
	description: DS.attr('string'),
	isOnSale: DS.attr('boolean'),
	image: DS.attr('string'),
	reviews: DS.hasMany('review', {async: true})
});

App.Review = DS.Model.extend({
	text: DS.attr('string'),
	reviewedAt: DS.attr('date')
});

App.Product.FIXTURES = [
	{
		id: 1,
		title: 'Flint',
		price: 20,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: true,
		image: 'images/flint.png',
		reviews: [100, 101]
	}, {

		id: 2,
		title: 'Birch',
		price: 120,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: false,
		image: 'images/birch.png'
	}, {
		id: 3,
		title: 'Bow Drill',
		price: 140,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: false,
		image: 'images/bow-drill.png'
	}, {
		id: 4,
		title: 'Kindling',
		price: 10,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: false,
		image: 'images/kindling.png'
	}, {
		id: 5,
		title: 'Matches',
		price: 30,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: true,
		image: 'images/matches.png'
	}, {
		id: 6,
		title: 'Tinder',
		price: 50,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: true,
		image: 'images/tinder.png'
	}
];

App.Review.FIXTURES = [
	{
		id: 100,
		product: 1,
		text: 'Started a fire in no time!'
	}, {
		id: 101,
		product: 1,
		text: 'Not the brightest flame, but warm!'
	}
];
