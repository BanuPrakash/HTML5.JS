/**
 * js/data/datasource.js
 * DataSource depends on data/customers.js
 */
define([ 'data/customers','underscore' ], function(customerModule,_) {
	var getByName = function(searchKey) {
		var customers =  _.filter(customerModule.customers, function(customer){
			if(customer.firstName.indexOf(searchKey) >= 0 
					|| customer.lastName.indexOf(searchKey) >= 0){
				return true;
			}
		});
		return customers;
	};
	var getAll = function() {
		return customerModule.customers;
	};
	 
	return {
		getAll : getAll,
		getByName : getByName
	};
});

 