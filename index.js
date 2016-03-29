var pizzapi = require('dominos');

var store = new pizzapi.Store({
    ID: '7144'
});

var address = new pizzapi.Address({
    Street: '1200 Western Ave.',
    City: 'Seattle',
    Type: 'Apartment',
    Region: 'WA',
    PostalCode: '98101'
});

// Setup your Customer
var customer = new pizzapi.Customer({
    firstName: 'Ryan',
    lastName: 'Thaddeus',
    address: address,
    phone: '8186416300',
    email: 'ryankhalili@sbcglobal.net'
});

var order = new pizzapi.Order({
    customer: customer,
    storeID: store.ID
});

// Setup your Credit Card Info
var cardNumber='4100123422343234';
var cardInfo = new order.PaymentObject();
cardInfo.Number = cardNumber;
cardInfo.CardType = order.validateCC(cardNumber);
cardInfo.Expiration = '0115';
cardInfo.SecurityCode = '777';
cardInfo.PostalCode = '98101';

//order.Payments.push(cardInfo);

var orderDominos = function() {
    order.addItem(new pizzapi.Item({
        code: '14SCREEN',
	options: {},
	quantity: 1
    }));

    order.validate(function(validateResult) {
        console.log(validateResult.result);
	if(validateResult.result.Order.Status == -1) {
	    console.log("Order is invalid.");
	}
	else {
	    /*order.place(function(orderResult) {
	        if(orderResult.result.Order.Status == -1) {
		    console.log("Failed to place order.");
		}
		else {
		    console.log("Order placed. The price is " + orderResult.result.Order.Amounts);
		    console.log("Order will arrive in " + orderResult.result.Order.EstimatedWaitMinutes + "minutes.");
		}
	    });*/
	    console.log('not really placing order because we fucked up');
	}
    });
}

var IR = require('node-ir');
var ir = new IR();

ir.displayEvents();
ir.on('key', function(key) {
    console.log(key);
    if(key == '108') {
        //orderDominos();
	store.getMenu(function(menu) {
	    console.log(menu.rootCategories.Coupons.menuData.Categories);
	});
    }
});

exports.orderDominos = orderDominos;
