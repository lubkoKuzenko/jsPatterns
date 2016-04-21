function Boarder( name, board ) {
 
  this.name = name;
  this.board = board;
 
  this.toString = function () {
    return this.name + " has " + this.board;
  };
}
 
// How to use:
// We can create new instances
var Jon = new Boarder( "Bart", "NFA" );
var Lisa = new Boarder( "Lisa", "Burton" );
 
console.log( Jon.toString() );
console.log( Lisa.toString() );

/*
Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.
*/