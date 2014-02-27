App = Ember.Application.create();

// App.ApplicationAdapter = DS.RESTAdapter.extend();
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
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/birch.png'
	}, {
		id: 3,
		title: 'Bow Drill',
		price: 140,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: true,
		image: 'images/bow-drill.png'
	}, {
		id: 4,
		title: 'Kindling',
		price: 10,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		isOnSale: true,
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

App.Router.map(function() {
	this.route('about');
	this.route('credits');
	this.resource('products', function() {
		this.resource('product', {path: '/:product_id'});
	});
	
});

App.IndexController = Ember.Controller.extend({
	time: function() {
		return (new Date()).toDateString();
	}.property()
});

App.ProductsRoute = Ember.Route.extend({
	model: function(params) {
		console.log(params);
		return this.store.findAll('Product');
	}
});
