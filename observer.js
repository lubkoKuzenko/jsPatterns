var Observer = function() {
    var events = {};

    this.listenerCount = function(eventName) {
        var listeners = events[eventName];
        if (listeners) {
            return listeners.length;
        }

        return 0;
    };

    this.addListener = function(eventName, listener) {
        var listeners = events[eventName];
        if (!listeners) {
            listeners = [];
            events[eventName] = listeners;
        }

        listeners.push({
            listener: listener,
            eventName: eventName
        });

        return this;
    };

    this.removeListener = function(eventName, listener) {
        var listeners = events[eventName];
        if (!listeners) {
            return false;
        }

        var length = listeners.length,
            item,
            found = false,
            i;
        for (i=0; i<length; ++i) {
            item = listeners[i];
            if (item.listener === listener) {
                found = true;
                break;
            }
        }

        if (found) {
            listeners.splice(i, 1);
        }

        return found;
    };

    this.removeAllListeners = function() {
        var length,
            listeners,
            item,
            i,j
            foundItems = [];
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                listeners = events[eventName];
                for (i=0; i<listeners.length; ++i) {
                    foundItems.push(listeners[i]);
                }
            }
        }

        for (i=0; i<foundItems.length; ++i) {
            var foundItem = foundItems[i];
            this.removeListener(foundItem.eventName, foundItem.listener);
        }
    },

    this.fire = function(eventName, meta, listeners) {

        listeners = typeof(listeners) === 'undefined' ? events[eventName] : listeners;

        if(!listeners || listeners.length === 0){
            return;
        }

        var head = listeners[0];
        head.listener.call(head.context, eventName, meta);

        var tail = listeners.slice(1,listeners.length);
        this.fire(eventName, meta, tail);
    }
};

//singleton
Observer.getInstance = function() {
    if (!Observer._instance) {
        Observer._instance = new Observer();
    }
    return Observer._instance;
}

// How to use
var notificationDispatcher = Observer.getInstance();
notificationDispatcher.fire('testEvent');
notificationDispatcher.addListener("testEvent", alert("event triggered"), this);