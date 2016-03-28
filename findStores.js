var pizzapi = require('dominos');

pizzapi.Util.findNearbyStores('98101', 'Delivery', function(storeData) {
	console.log(storeData.result.Stores[0]);
	//storeData.result.Stores.map(function(store) {
	//	console.log(store);
	//});
});
