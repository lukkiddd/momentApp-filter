angular.module('momentApp', [])
	.filter('moment',function(){
	return function(input) {

		dateNow = Math.round(((new Date()).getTime()));
		input = Math.round(input);
		dateDiff = dateNow-input;
		seconds = dateDiff;
		minutes = seconds/60;
		hours = minutes/60;
		days = hours/24;
		weeks = days/7;
		months = weeks/4;
		years = months/12;
		
		messages = ((seconds < 60) && "less than minute")||
		((seconds < 90) && "about a minute")||
		((minutes < 45) && (Math.round(minutes) + " mins"))||
		((hours < 2) && "about an hour")||
		((hours < 24) && (Math.round(hours) + " hrs"))||
		((days < 1.5) && "yesterday")||
		((days < 7) && (Math.round(days) + " days"))||
		((weeks < 4) && (Math.round(weeks) + " weeks"))||
		((months < 2) && "1 month")||
		((months < 12) && (Math.round(months) + " months"))||
		((years < 2) && (Math.round(years)+"y"))||
		"more than 2 years";
		
		return messages;
	};
});