App = Ember.Application.create();

App.PRODUCTS = [
	{
		title: 'Flint',
		price: 20,
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/flint.png'
	}, {
		title: 'Birch',
		price: 120,
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/birch.png'
	}, {
		title: 'Bow Drill',
		price: 140,
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/bow-drill.png'
	}, {
		title: 'Kindling',
		price: 10,
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/kindling.png'
	}, {
		title: 'Matches',
		price: 30,
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/matches.png'
	}, {
		title: 'Tinder',
		price: 50,
		isOnSale: true,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/tinder.png'
	}
];

App.Router.map(function() {
	this.route('about');
	this.route('credits');
	this.resource('products', function() {
		this.resource('product', {path: '/:title'});
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
		return App.PRODUCTS;
	}
});

App.ProductRoute = Ember.Route.extend({
	model: function(params) {
		return App.PRODUCTS.findBy('title', params.title);
	}
});
