$(function () {
	var products = [],
		// filters = {
		// 		"manufacturer":["Samsung","Sony"],
		//		"os":["Andriod"]
		//	}
		filters = {};

	// These are called on page load
	// Get data about our products from products.json.
	$.getJSON( "products.json", function( data ) {
		products = data;
		// Call a function to create HTML for all the products.
		generateAllProductsHTML(products);
	});

	// This function is called only once - on page load.
	// It fills up the products list via a handlebars template.
	// It recieves one parameter - the data we took from products.json.
	function generateAllProductsHTML(data){
		var list = $('.all-products .products-list');

		var theTemplateScript = $("#products-template").html();
		//Compile the template​
		var theTemplate = Handlebars.compile (theTemplateScript);
		list.append (theTemplate(data));

	}
});