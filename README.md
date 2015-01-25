time-ago-filter
===============

##Get Started

1. You can install *timeAgoFilter* by clone these to your computer.
2. Include *timeAgoApp.js* in your **index.html**, after including Angular itself.
3. Add *'timeAgoApp'* to your main module's list of dependencies.

##How to use

```html
<small class="time"> {{result.timestamp | timeago}} </small>

<!-- result: (depends on your different of timestamp)
"less than minute", "about a minute", "32 mins",
"about an hour", "3 hrs", "yesterday", "2 days",
"2 weeks", "1 month", "5 months", "y",
"more than 2 years"
-->
```
