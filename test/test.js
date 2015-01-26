describe('Unit: momentApp', function () {

	beforeEach(module('momentApp'));

	it('has a moment filter', inject(function($filter){
		expect($filter('moment')).not.toBeNull();
	}));

	it('should return true messages', inject(function($filter){
		var dateNow = Math.round(((new Date()).getTime()));

		expect($filter('moment')(dateNow)).toEqual("less than minute");
		expect($filter('moment')(dateNow - 60)).toEqual("about a minute");
		expect($filter('moment')(dateNow - 3000)).toEqual("about an hour");
		expect($filter('moment')(dateNow - 100000)).toEqual("yesterday");
		expect($filter('moment')(dateNow - 2500000)).toEqual("1 month");
		expect($filter('moment')(dateNow - 300000000)).toEqual("more than 2 years");

	}));

});
