var Module = (function() {

  var firstName = "Liubomyr",
      lastName = "Kuzenko";

  var getFullName = function() {
    // private code
    var fullName = firstName + " " + lastName;

    return fullName;
  }

  // public code
  return {
    getFirstName: function() {
      return firstName;
    },

    getLastName: function() {
      return lastName;
    }
  };

})();


Module.getFirstName();  //Liubomyr
Module.getFullName();   //Uncaught TypeError: Module.getFullName is not a function(…)

/*
Advantages

It's a lot cleaner for developers coming from an object-oriented background than the idea of true encapsulation, at least from a JavaScript perspective.
Secondly, it supports private data - so, in the Module pattern, public parts of our code are able to touch the private parts, however the outside world is unable to touch the class's private parts.

Disadvantages

The disadvantages of the Module pattern are that as we access both public and private members differently, when we wish to change visibility, 
we actually have to make changes to each place the member was used.
We also can't access private members in methods that are added to the object at a later point. That said, in many cases the Module pattern is still quite useful and when used correctly, 
certainly has the potential to improve the structure of our application.
Other disadvantages include the inability to create automated unit tests for private members and additional complexity when bugs require hot fixes. 
It's simply not possible to patch privates. Instead, one must override all public methods which interact with the buggy privates. 
Developers can't easily extend privates either, so it's worth remembering privates are not as flexible as they may initially appear.

*/