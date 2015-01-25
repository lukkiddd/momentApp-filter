time-ago-filter
===============

##Get Started

1. You can install `timeAgoFilter` by clone these to your computer.
2. Include `timeAgoApp.js` in your `index.html`, after including Angular itself.
3. Add `'timeAgoApp'` to your main module's list of dependencies.

##Example

index.html
```html

<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
	...
</head>
<body>
	
	...
	<small class="time"> {{result.timestamp | timeago}} </small>
	<!-- result: (depends on your different of timestamp)
    "less than minute", "about a minute", "32 mins",
    "about an hour", "3 hrs", "yesterday", "2 days",
    "2 weeks", "1 month", "5 months", "y",
    "more than 2 years"
    -->
	...

	<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular.min.js"></script>
  	<script src="../dist/timeAgoApp.js"></script>
	<script src="../dist/myApp.js"></script>

	...

</body>
</html>

```

myApp.js
```javascript
var myApp = angular.module('myApp',['timeAgoApp']);
...

```
