var menuQueryManager = require('./menuDataQueryManager');

var intentsResolver = {
    t001: function (req) {

        var params = req.body.result.parameters;
        var itemName = params['item'];
        var menuItem = menuQueryManager.getMenuItem(itemName);
        console.log('menu order query');
        console.log(menuItem);

        var returnObject = {
            item1_quantity: params['number-integer'],
            item1: params['item'],
            item1_Options: params['option'],
            item2_quantity: params['number-integer1'],
            item2: params['item1'],
            item2_Options: params['option1'],
            pickupOrDelivery: params['Delivery-Pickup-Entity'],
            address: params['address'],
            paymentMode: params['paymentMode-Entity']
        }
        return JSON.stringify(returnObject);
    },
    t002: function (req) {
        var params = req.body.result.parameters;
        var returnObject = {
            item1_quantity: params['number-integer'],
            item1: params['item'],
            item1_Options: params['option'],
            pickupOrDelivery: params['Delivery-Pickup-Entity'],
            address: params['address'],
            paymentMode: params['paymentMode-Entity']
        }
        return JSON.stringify(returnObject);
    },
    t003: function (req) {

    },
    t004: function (req) {

    },
    t005: function (req) {

    }
}

module.exports = intentsResolver;