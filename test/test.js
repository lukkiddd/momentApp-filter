describe('Unit: timeAgo', function () {

	beforeEach(module('timeAgoApp'));

	it('has a timeago filter', inject(function($filter){
		expect($filter('timeago')).not.toBeNull();
	}));

	it('should return true messages', inject(function($filter){
		var dateNow = Math.round(((new Date()).getTime()));

		expect($filter('timeago')(dateNow)).toEqual("less than minute");
		expect($filter('timeago')(dateNow - 60)).toEqual("about a minute");
		expect($filter('timeago')(dateNow - 3000)).toEqual("about an hour");
		expect($filter('timeago')(dateNow - 100000)).toEqual("yesterday");
		expect($filter('timeago')(dateNow - 2500000)).toEqual("1 month");
		expect($filter('timeago')(dateNow - 300000000)).toEqual("more than 2 years");

	}));

});
