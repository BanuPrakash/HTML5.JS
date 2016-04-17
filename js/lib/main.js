require(["collection/Employees"],function(empModule){

	var empData = empModule.employees;

	empData.forEach(function(emp) {
		console.log(emp.getInfo());
	});	
});