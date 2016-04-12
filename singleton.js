var Singleton = (function() {
    
    var instance;

    function createInstance() {
        var string = new String("I am the instance");
        return string;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


var instance1 = Singleton.getInstance(),
    instance2 = Singleton.getInstance();

console.log(instance1 === instance2);   //true


/*
Суть шаблона единственного объекта состоит в том, чтобы обеспечить
возможность создать только один экземпляр определенного класса. Это
означает, что при попытке создать второй экземпляр того же класса вы-
зывающая программа должна получить объект, созданный при первой
попытке.
*/