
// Classes
var Shop = function (name) {
	this.name = name;
	this.menu = [];
	this.line = [];
	this.sandwichQueue = [];
	this.counter = [];
	this.register = 0;
}

var Customer = function (name, order) {
	this.name = name;
	this.order = new Order(this);
	this.lunch = [];
}

Customer.prototype.orderSandwich = function(sandwich) {
	//look in the menu
	// choose a sandwich
	// add it to the order
};

Customer.prototype.getSandwich = function(shop) {
	// pick sandwich up from shop.counter
	for (var i = 0; i < this.counter.length; i++) {
		this.lunch.push(this.counter[i].shift());
	};
};

var Server = function (name, shop) {
	this.name = name;
	this.shop = shop;
}

Server.prototype.queueOrder = function(customer) {
	// get customer's order
	var order = customer.order;
	// puts the sandwhich from the order into the shop's queue
	for (var i = 0; i < order.sandwiches.length; i++) {
		this.shop.sandwichQueue.push(order.sandwiches[i])
		console.log("I need a +" + order.sandwiches[i].name);
	};
};

Server.prototype.deliverOrder = function(customer) {
	// calls the customer's getSandwich method
	customer.getSandwich(this.shop.counter);
};

var Artist = function (name, shop) {
	this.name = name;
	this.shop = shop;
}

Artist.prototype.makeSandwich = function(sandwich) {
	// create a new sandwich
	var sandwich = new Sandwich(sandwich.name);
	// put it on the counter
	this.shop.counter.push(sandwich);
};

Artist.prototype.processQueue = function() {
	for (var i = 0; i < shop.sandwichQueue.length; i++) {
		this.makeSandwich(shop.sandwichQueue[i]);
	}
};

var Order = function (customer) {
	this.sandwiches = [];
	this.customer = customer;
	this.date = Date.now();
}

var Sandwich = function (name) {
	this.name = name;
}

// Program

//Create a shop with employees
var hipwich = new Shop("hipwich");

var jessica = new Server("Jessica", hipwich);
var kelley = new Artist("Kelley", hipwich);

//Open for business, create some customers and put them in line
//Liz shows up
var liz = new Customer("Liz");
//figures out what she wants
liz.order.sandwiches.push(new Sandwich("The Cosmopolitan"));

//gets in line
hipwich.line.push(liz);

// jessica takes her order
jessica.queueOrder(hipwich.line.shift());

//kelley makes the sandwhich
kelley.processQueue();

// jessica gives liz the sandwich
jessica.deliverOrder(liz);


