// -----------------------------------------
// simple factory
// -----------------------------------------

var Factory = function(key) {
	
	var key = key,
		map = {
	        "skier": Skier,
	        "snowboarder": Snowboarder,
	        "human": Human
	    },
    	constr = map.hasOwnProperty(key) ? key : "human";

	function Skier() {
		this.action = "I like Skiing";

		console.log(this.action);
	}

    function Snowboarder() {
		this.action = "I like Snowboarding";

		console.log(this.action);
	}

	function Human() {
		this.action = "I like ...";

		console.log(this.action);
	}

    return new map[constr]();
};

// How to use
Factory("snowboarder");


// -----------------------------------------
// factory with common methods
// -----------------------------------------

var Factory = function() {}

Factory.prototype.like = function () {
	return "I like " + this.action;
};

Factory.factory = function(key){
	var key = key;

	if(typeof Factory[key] !== "function"){
		key = "Human";
	}
	if (typeof Factory[key].prototype.like !== "function") {
		Factory[key].prototype = new Factory();
	}

	return new Factory[key]();
}

Factory.Skier = function () {
	this.action = "Skiing";
};

Factory.Snowboarder = function () {
	this.action = "Snowboarding";
};

Factory.Human = function () {
	this.action = "...";
};

// How to use
Factory.factory("Snowboarder");			//{action: "Snowboarding"}
Factory.factory("Snowboarder").like(); 	//I like Snowboarding


/*

Назначение фабрики в том, чтобы создавать объекты. Этот шаблон обычно реализуется в виде классов или в виде статических методов классов и преследует следующие цели:
•• Выполнение повторяющихся операций, необходимых при создании похожих объектов
•• Предложить пользователям фабрики способ создания объектов без необходимости знать их тип (класс) на этапе компиляции

*/