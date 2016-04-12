var RevealModule = (function() {

	var firstName = "Liubomyr",
		lastName = "Kuzenko"

	var getFullName = function() {
		// private code
		var fullName = firstName + " " + lastName;

		return fullName;
	};

	var getFirstName = function() {
		// public code
		return firstName;
	};

	var getLastName = function() {
		// public code
		return lastName;
	};

	return {
		getFirstName: getFirstName,
		getLastName: getLastName
	};

})();

RevealModule.getFirstName(); 	//Liubomyr
RevealModule.getFullName();		//Uncaught TypeError: RevealModule.getFullName is not a function(…)

/*

Advantages

More consistent syntax of our scripts. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

Disadvantages

A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. 
This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.
As a result of this, modules created with the Revealing Module pattern may be more delicate than those created with the original Module pattern, so care should be taken during usage.

*/