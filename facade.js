var Module = (function() {

    var _private = {
        isValid: false,
        validate: function(value) {
            if(this.isNumeric(value)){
                var isValid = true;

                return isValid;
            } else {
                this.exit(value);
            }
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        formatNumber: function(value){
            return parseFloat(this.getMathematicallyRoundedValueDecimalPlaces(value,2)).toFixed(2).toString();
        },
        getMathematicallyRoundedValueDecimalPlaces: function ( argOriginalAmount, argDecimalPlaces ){     
            return Math.round(argOriginalAmount*Math.pow(10,argDecimalPlaces))/Math.pow(10,argDecimalPlaces);
        },
        exit: function(value) {
            console.log(value + " is not a number");
        }
    };

    return {

        facade: function(value) {
            if (_private.validate(value)) {
                console.log(_private.formatNumber(value, 2));
            }
        }
    };
}());

// How to use
Module.facade(1231.227);    //1231.23
Module.facade("string");    //string is not a number