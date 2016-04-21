// Define a simple constructor
var Board = function ( settings ) {
    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";
};

// Mixin
var Mixins = function () {};
 
Mixins.prototype = {
    moveUp: function(){
		console.log( "move up" );
	},
	moveDown: function(){
		console.log( "move down" );
	},
	stop: function(){
		console.log( "stop!" );
	}
};

function extend( receivingClass, givingClass ) {
    for ( var methodName in givingClass.prototype ) {
        if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
        }
    }
}

extend( Board, Mixins );

var myBoard = new Board({
    model: "Burton",
    color: "black"
});
 
myBoard.moveUp();
myBoard.moveDown();
myBoard.stop();

/*
Mixins allow objects to borrow (or inherit) functionality from them with a minimal amount of complexity. 
As the pattern works well with JavaScripts object prototypes, it gives us a fairly flexible way to share functionality from not just one Mixin, but effectively many through multiple inheritance.
They can be viewed as objects with attributes and methods that can be easily shared across a number of other object prototypes.
*/