var userPrototype = {
	name: "Jim Doe",
  
	getName: function () {
		console.log( "User name is: " + this.name);
	}
};

//Douglas Crockford inharitance
function object(proto) {
   var n;
   function F() {}
   F.prototype = proto;
   n = new F();
   return n;
}

// How to use
var user = object( userPrototype );
user.getName();