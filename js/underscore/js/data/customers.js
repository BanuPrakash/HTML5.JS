/**
 * js/data/customers.js
 * Customer Module having customer JSON data
 */
define([], function() {
	var  customers = [ {
		"id" : 1,
		"firstName" : "James",
		"lastName" : "King",
	}, {
		"id" : 2,
		"firstName" : "Julie",
		"lastName" : "Taylor",
	}, {
		"id" : 3,
		"firstName" : "Eugene",
		"lastName" : "Lee",
	}];
	
	return {
		customers: customers
	};
});



	