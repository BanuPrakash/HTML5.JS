/**
 * New node file
 */
var recipes = [];

recipes[0] = {
	"type" : "Breakfast Recipes",
	"list" : [ {
		"id" : 1,
		"name" : "Masala Dosa",
		"pic" : "masaladosa.jpg",
		"ingredients" : []
	}, {
		"id" : 2,
		"name" : "Appam",
		"pic" : "appam.jpg",
		"ingredients" : []
	}, {
		"id" : 3,
		"name" : "Rice Noodles",
		"pic" : "rice noodles.jpg",
		"ingredients" : []
	}, {
		"id" : 4,
		"name" : "Phulka",
		"pic" : "phulka.jpg",
		"ingredients" : []
	}, {
		"id" : 5,
		"name" : "Aloo Parathas",
		"pic" : "alooparathas.jpg",
		"ingredients" : ["Wheat flour - 2 cups",
		                 "For filling Potatoes (boiled, grated and mashed) 3-4",
		                 "Red chilli powder - 2 tsp.",
		                 "Garam masala - 1 tsp.",
		                 "Dhania (jeera) powder - 2 tsp",
		                 "Amchur powder - ½ tsp.",
		                 "Fresh finely chopped coriander",
		                 "Bread crumbs"
		                 ]
	
	} ]
};
recipes[1] = {
	"type" : "Snacks and Sweets",
	"list" : [ {
		"id" : 1,
		"name" : "Bhelpuri",
		"pic" : "bhelpuri.jpg",
		"ingredients" : []
	},

	{
		"id" : 2,
		"name" : "Murukku",
		"pic" : "murukku.jpg",
		"ingredients" : []
	}, {
		"id" : 3,
		"name" : "Gulab Jamun",
		"pic" : "Gulab-Jamun.jpg",
		"ingredients" : ["Milk Powder - 1/2 cup",
		                 "Maida (All purpose flour) - 2 tsp",
		                 "Rava (Semolina) - 1 tsp",
		                 "Baking Soda - 1/4 tsp",
		                 "Milk - 2 tbsp",
		                 "Lemon Juice - 1/2 tsp",
		                 "Ghee or Butter - 1 tbsp"
		                 ]
	}, {
		"id" : 4,
		"name" : "Mysore Pak",
		"pic" : "Mysore-Pak.jpg",
		"ingredients" : []
	} ]
};

recipes[2] = {
	"type" : "Rice Varieties",
	"list" : []
};

recipes[3] = {
	"type" : "Diabetic Recipes",
	"list" : [ {
		"id" : 1,
		"name" : "Bittergourd Fry",
		"pic" : "bittergourdfrys.jpg",
		"ingredients" : []
	}, {
		"id" : 2,
		"name" : "Oats Soup",
		"pic" : "oatssoup.jpg",
		"ingredients" : []
	}, {
		"id" : 3,
		"name" : "Ragi Idli and Dosa",
		"pic" : "ragi idli dosa.jpg",
		"ingredients" : []
	}, {
		"id" : 3,
		"name" : "Phulka",
		"pic" : "phulka.jpg",
		"ingredients" : []
	},

	]
};


$("#breakfast").click(function(){
	var recipeListItem = [];
	recipes.forEach(function(recipe){
		if(recipe.type === "Breakfast Recipes") {
			recipe.list.forEach(function(item) {
				recipeListItem.push(item);
			});
			
		}
	});
	printRecipeList(recipeListItem, "Breakfast Recipes");
});


$("#snacks").click(function(){
	var recipeListItem = [];
	recipes.forEach(function(recipe){
		if(recipe.type === "Snacks and Sweets") {
			recipe.list.forEach(function(item) {
				recipeListItem.push(item);
			});
			
		}
	});
	printRecipeList(recipeListItem, "Snacks and Sweets");
});


function printRecipeList(recipeListItem, type) {
	$("#recipeList").html("");
	recipeListItem.forEach(function(item){
		$div = $("<div/>");
		$div.addClass("col-sm-4");
		
		$img = $("<img/>");
		$img.addClass("img-thumbnail");
		$img.attr("src","images/"+item.pic);
		$div.append($img);
		$p = $('<p/>');
		$p.attr("text-align","center");
		$a = $("<a/>");
		$a.attr({"href":"#", "id":"ingredients"});
		$a.html(item.name);
		$span = $("<span/>");
		$span.attr("style","visibility:hidden");
		$span.html(type + ":" + item.id);
		$div.append("<br/>");
		$p.append($a);
		$p.append("<br/>");
		$p.append($span);
		$div.append($p);
//		$div.html(item.name);
		$("#recipeList").append($div);
	});
}

$(document).on("click","#ingredients",function(){
	var item = $(this).next().next().html();
	var data = item.split(":");
	var recipeSel = data[0].trim();
	var idSel = data[1].trim();
	/*console.log(recipe);
	console.log(id);*/
	var ingredients = [];
	recipes.forEach(function(recipe){
			if(recipe.type == recipeSel) {
				recipe.list.forEach(function(item) {
					if(item.id == idSel){
						$("#header").html(item.name);
						$("#ingredientList").append("<ul/>");
						item.ingredients.forEach(function(ingredient){
							$("#ingredientList").append("<li>" + ingredient + "</li>");
						});
					}
				});
			}
	});
});