'use strict';
window.onload = function () {

    // START

    Humburger.SIZE_SMALL = 'SIZE_SMALL';
    Humburger.SIZE_LARGE = 'SIZE_LARGE';
    Humburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
    Humburger.STUFFING_SALAD = 'STUFFING_SALAD';
    Humburger.STUFFING_POTATO = 'STUFFING_POTATO';
    Humburger.TOPPING_MAYO = 'TOPPING_MAYO';
    Humburger.TOPPING_SPICE = 'TOPPING_SPICE';

    function Humburger(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
        this._types = {};


        this._types[Humburger.SIZE_LARGE] = {
            price: 50,
            callories: 100,
        };

        this._types[Humburger.SIZE_SMALL] = {
            price: 20,
            callories: 400,
        };

        this._types[Humburger.STUFFING_CHEESE] = {
            price: 10,
            callories: 20,
        };

        this._types[Humburger.STUFFING_SALAD] = {
            price: 20,
            callories: 5,
        };

        this._types[Humburger.STUFFING_POTATO] = {
            price: 15,
            callories: 10,
        };


        this._types[Humburger.TOPPING_MAYO] = {
            price: 20,
            callories: 5,
        };


        this._types[Humburger.TOPPING_SPICE] = {
            price: 15,
            callories: 0,
        };

    }
    var size;
    var humburger;
    var curTopping;
    var stuffing;


    // Create Humburger
    let btn = document.getElementsByClassName('create')[0];
    btn.addEventListener('click', function () {
        size = document.getElementsByClassName('size')[0].value;
        stuffing = document.getElementsByClassName('stuffing')[0].value;
        curTopping = document.getElementsByClassName('toppings')[0].value;
        // humburger.createhumburger(size, stuffing) ;
        humburger = new Humburger(size, stuffing);
        console.log(humburger);
        return humburger;
    });

    // add Topping
    var btnAddSpice = document.getElementsByClassName('addTopping')[0];
    btnAddSpice.addEventListener('click', function () {
        if (humburger === undefined) {
            console.log("Create a humburger, please");
            return
        };
        curTopping = document.getElementsByClassName('toppings')[0].value;
        // console.log(typeof humburger)
        humburger.addTopping(curTopping);
        console.log(humburger);

    });


    Humburger.prototype.addTopping = function (topping) {
        if (curTopping == 'NONE' || this._toppings.includes(curTopping)) {
            return;
        }
        this._toppings.push(topping);

    };


    // remove Topping
    Humburger.prototype.removeTopping = function (topping) {
        for (let i = 0; i < this._toppings.length; i++) {
            if (this._toppings[i] === topping) {
                this._toppings.splice(i, 1); // remove current topping
                break; // remove once
            }
        }
    }

    var btnRemoveSpice = document.getElementsByClassName('removeTopping')[0];
    btnRemoveSpice.addEventListener('click', function () {
        if (humburger === undefined) {
            console.log("Create a humburger, please");
            return
        };
        curTopping = document.getElementsByClassName('toppings')[0].value;
        humburger.removeTopping(curTopping);
        console.log(humburger);

    })


    // Get Toppings
    Humburger.prototype.getToppings = function () {
        if (this._toppings.length === 0) {
            console.log("You didn't add any topping");
            return;
        }
        var alltoppings = this._toppings.join(', ');
        console.log('You chose: ' + alltoppings);
        // let [f, g] = this._toppings;
        return this._toppings;
    }

    var btnGetToppings = document.getElementsByClassName('getToppings')[0];
    btnGetToppings.addEventListener('click', function () {
        if (humburger === undefined) {
            return console.log("Create Humburger, please");
        }
        humburger.getToppings();
    });


    // Get SIZE
    var btnGetSize = document.getElementsByClassName('getSize')[0];
    btnGetSize.addEventListener('click', function () {
        if (humburger === undefined) {
            console.log(`Create humburger, please.`);
            return;
        }
        console.log(`Humburger has ${humburger.getSize()} `);

    });

    Humburger.prototype.getSize = function () {
        return size = this._size;
    };

    //  Get STUFF
    var btnGetStuff = document.getElementsByClassName('getStuff')[0];
    btnGetStuff.addEventListener('click', function () {
        if (humburger === undefined) {
            console.log(`Create humburger, please.`);
            return;
        }
        console.log(`Humburger has ${humburger.getStuffing()}`);

    });

    Humburger.prototype.getStuffing = function () {
        return stuffing = this._stuffing;
    };

    // Calculate Price

    var btnGetPrice = document.getElementsByClassName('getPrice')[0];
    btnGetPrice.addEventListener('click', function () {
        if (humburger === undefined) {
            console.log(`Create humburger, please.`);
            return;
        }
        console.log("Hamburger's price is: " + humburger.calculatePrice() + "$");
    })

    Humburger.prototype.calculatePrice = function () {
        // put  size, price and topping(s) in arr
        var sum = 0;
        var arr = [];
        var [firstTopp, secondTopp] = this._toppings;
        arr.push(humburger._size);
        arr.push(humburger._stuffing);
        arr.push(firstTopp);
        arr.push(secondTopp);
        for (var key in humburger._types) {
            if (arr.includes(key)) {
                sum += humburger._types[key].price;
            }
        }
        return sum;
    }
    // Calculate  Callories
    var btnGetCal = document.getElementsByClassName('getCal')[0];
    btnGetCal.addEventListener('click', function () {
        if (humburger === undefined) {
            console.log(`Create humburger, please.`);
            return;
        }
        console.log("Energy value is: " + humburger.calculateCalories() + " Calories");
    })

    Humburger.prototype.calculateCalories = function () {
        var callories = 0;
        // put  size, price and topping(s) in arr
        var arr = [];
        var [firstTopp, secondTopp] = this._toppings;
        arr.push(humburger._size);
        arr.push(humburger._stuffing);
        arr.push(firstTopp);
        arr.push(secondTopp);
        for (var key in humburger._types) {
            if (arr.includes(key)) {
                callories += humburger._types[key].callories;
            }
        }
        return callories;
    }

}