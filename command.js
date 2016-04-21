var Executor = function () {
	var equipmentManager = {
		buyBoard: function( model ){
		  console.log("You've bought " + model);
		},

		buyBindings: function( model, color ){
		  console.log("You've bought " + model);
		},

		buyHelmet: function( model, color ){
		  console.log("You've bought " + model);
		}
	};

    return {
        execute: function ( name ) {
            return equipmentManager[name] && equipmentManager[name].apply( equipmentManager, [].slice.call(arguments, 1) );
        }
    }
}

var manager = new Executor();
manager.execute("buyBoard","Burton");
manager.execute("buyBindings","Flow");
manager.execute("buyHelmet","Head");

/*
The Command pattern aims to encapsulate method invocation, requests or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion. 
In addition, it enables us to decouple objects invoking the action from the objects which implement them, giving us a greater degree of overall flexibility in swapping out concrete classes (objects).
*/