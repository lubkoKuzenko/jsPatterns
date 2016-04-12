function Equipment() {
 
    this.buyEquipment = function(item) {
        if (item === "snowboard") {
            return "You need $300";
        } else if (item === "ski") {
            return "You need $200";
        } else {
            return "You saved money";
        }
    }
}

function EquipmentProxy() {
    var equipment = new Equipment(),
    	equipmentcache = {};
 
    return {
        buyItem: function(item) {
            if (!equipmentcache[item]) {
                equipmentcache[item] = equipment.buyEquipment(item);
            }
            return equipmentcache[item];
        }
    };
};


// How to use
var buy = new EquipmentProxy();
buy.buyItem("snowboard");

/*
В шаблоне прокси-объекта (промежуточного объекта) один объект играет роль интерфейса другого объекта.
Промежуточный объект располагается между пользовательским программным кодом и объектом и регулирует доступ к этому объекту.
Промежуточный объект служит защитником основного объекта и стремится максимально уменьшить количество обращений к действительному объекту.
*/

