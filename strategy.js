// -----------------------------------------
// simple Strategy
// -----------------------------------------
var Strategy = {

  strategies: {
    skier: function(input) {
      this.action = "I like Skiing";

      console.log(this.action);
    },
    snowboarder: function(input) {
      this.action = "I like Snowboarding";

      console.log(this.action);
    },
    human: function(input) {
      this.action = "I like ...";

      console.log(this.action);
    },
    default: function(input) {
      console.log("Message from default case");
    }
  },

  say: function(input) {
    var constr = input.toLowerCase();

    if (this.strategies[constr]) {
      this.strategies[constr](input);
    } else {
      this.strategies.default(input);
    }
  }
}

// How to use
Strategy.say("skier"); // I like Skiing
Strategy.say("snowboarder"); // I like Snowboarding
Strategy.say("defalut_test"); // Message from default case

// -----------------------------------------
// Strategy using prototype
// -----------------------------------------

var Strategy = function(input) {
  var constr = input.toLowerCase();

  if (this.strategies[constr]) {
    this.strategy = this.strategies[constr]
  } else {
    this.strategy = this.strategies.default
  }
}

Strategy.prototype.strategies = {
  skier: function(input) {
    this.action = "I like Skiing";

    console.log(this.action);
  },
  snowboarder: function(input) {
    this.action = "I like Snowboarding";

    console.log(this.action);
  },
  human: function(input) {
    this.action = "I like ...";

    console.log(this.action);
  },
  default: function(input) {
    console.log("Message from default case");
  }
}

Strategy.prototype.say = function(input) {
  this.strategy(input);
}

var obj = new Strategy('snowboarder');

// How to use
obj.say("skier");          // I like Snowboarding
obj.say("snowboarder");    // I like Snowboarding
obj.say("defalut_test");   // I like Snowboarding