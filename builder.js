function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        builder.step3();

        return builder.board;
    }
}

function BoardBuilder() {
    this.board = null;
 
    this.step1 = function() {
        this.board = new SnowBoard();
    };
 
    this.step2 = function() {
        this.board.addBindings();
    };

    this.step3 = function() {
        console.log("I am a snowboard");
    };
}

function SnowBoard() {
    this.height = 157;
 
    this.addBindings = function() {
        this.bindings = true;
    };
}

// How to use
var shop = new Shop();
var boardBuilder = new BoardBuilder();
var board = shop.construct(boardBuilder);

/*
The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.
Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together
*/