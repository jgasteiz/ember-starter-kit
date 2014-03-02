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
