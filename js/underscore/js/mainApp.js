/**
 * js/main.js
 * entry point included in html as 
 * <script src="js/require.js" data-main="js/main.js">
 * </script>
 */
require.config({
baseUrl: "js",
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore-min",
    'text': 'lib/text'
  }
});

require([ 'data/datasource', 
          'jquery', 
          'underscore',
		'text!customerTemplate.html' ], function(app, $,_, mainView) {

	var compiled_template = _.template(mainView);
	$("body").append(compiled_template({"customers": app.getAll()}) );
});

