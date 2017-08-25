/*GET 'home' page */
module.exports.homelist = function(req,res){
	res.render('locations-list',{
		title: 'Loc8r - find a place to work with wifi',
		pageHeader:{
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: " Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
			name: 'starcups',
			address:'1234 highstreet',
			rating: 3,
			facilities: ['hotdrinks','food','premium wifi'],
			distance: '100m'
		},{
			name: 'cafe hero',
			address:'123 highstreet',
			rating: 5,
			facilities: ['hotdrinks','food','premium wifi'],
			distance: '200m'
		},{
			name: 'Lukes lobster',
			address: 'muswell hill',
			rating: 4,
			facilities:['washlet', 'tea and coffee making facilities', 'knife', 'spoon'],
			distance: '1.5km'
		}]
	});
;}

/*GET 'Location info' page */
module.exports.locationInfo = function(req,res){
	res.render('location-info',{
		title: 'Starcups',
		pageHeader:{title:'Starcups'},
		sidebar:{
			context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
			callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
		},
		location: {
			name:'Starcups',
			address:'1234 highstreet',
			rating: 3,
			facilities: ['hotdrinks','food','premium wifi'],
			coords: {lat: 51.616254, lng: -0.161411},
			openingTimes: [{
				days:'Monday - Friday',
				opening: '7:00am',
				closing: '7:00pm',
				closed: false
			},{
				days:'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			},{
				days: 'Sunday',
				closed: true
			}],
			reviews: [{
				author: 'Barry Scott ',
				rating: 5,
				timestamp: '15 July 2017',
				reviewText: 'what a great place, truely excellent'
			},{
			
				author: 'Mark Overmars ',
				rating: 5,
				timestamp: '17 July 2017',
				reviewText: 'bit of alright this!'	
	
			},{
			
				author: 'Matthew Anthony Gilbert ',
				rating: 1,
				timestamp: '17 July 2017',
				reviewText: 'I wanted the wings crispy yet saucy, but they gave the the sauce on the side, which I didn\'t ask for. The smoked cheesecake wasnt smokey enough! And to top it all off I was asked to leave'	
	
			}]
		}

	});
};

/*GET 'Add review' page */
module.exports.addReview = function(req,res){
	res.render('location-review-form',{
		title:'Review Starcups on Loc8r',
		pageHeader: {title: 'Review Starcups'}
		});
;}