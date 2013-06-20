define([], function(){
	var someVar = "someString";
	
	if (someVar == "ooops") {
		console.log("le crap");
	} else {
		console.log("what is going on here?");
	}
	return {bar:'foo'};	
});