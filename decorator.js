function Boards() {
	this.price = 100;
	this.getPrice = function() {
		return this.price;
	}
}

// Decorate with bindings
function bindings(board) {

	var price = board.getPrice();

	board.getPrice = function() {
		return price + 75;
	};
};

// Decorate with boots
function boots(board) {

	var price = board.getPrice();

	board.getPrice = function() {
		return price + 100;
	};
};

// Decorate with helmets
function helmets(board) {

	var price = board.getPrice();

	board.getPrice = function() {
		return price + 50;
	};
};

// How to use
var board = new Boards();

console.log("Original price: " + board.getPrice()); 	//Original price: 100

bindings(board);
boots(board);
helmets(board);

console.log("Total price: " + board.getPrice()); 	//Total price: 325