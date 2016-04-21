var myApp = myApp || {}
 
myApp.id = 0;
 
myApp.next = function() {
    return this.id++;   
}
 
myApp.reset = function() {
    this.id = 0;    
}

console.log(myApp);
console.log(myApp.next());
console.log(myApp.next());