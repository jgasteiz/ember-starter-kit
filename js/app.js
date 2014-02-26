App = Ember.Application.create();

App.PRODUCTS = [
	{
		name: 'Flint',
		price: 20,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/flint.png'
	}, {
		name: 'Birch',
		price: 120,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/birch.png'
	}, {
		name: 'Bow Drill',
		price: 140,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/bow-drill.png'
	}, {
		name: 'Kindling',
		price: 10,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/kindling.png'
	}, {
		name: 'Matches',
		price: 30,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/matches.png'
	}, {
		name: 'Tinder',
		price: 50,
		description: 'But you seem to be kicking my seat. Pardon me, sir. Would you mind? Sure thing, pal. Sir? Who threw that? Sir, I challenge you to fisticuffs. Oh, I\'m boned.',
		image: 'images/tinder.png'
	}
];

App.Router.map(function() {
	this.route('about');
	this.route('credits');
	this.resource('products');
});

App.IndexController = Ember.Controller.extend({
	time: function() {
		return (new Date()).toDateString();
	}.property()
});

App.ProductsRoute = Ember.Route.extend({
	model: function() {
		return App.PRODUCTS;
	}
});

App.ProductsController = Ember.Controller.extend({
	// productsCount: function() {
	// 	return this.products.length;
	// }.property()
});
