"use strict";

function myModule () {
    this.hello = function (){
        console.log("Hello");
    };
    this.goodbay = function () {
        console.log("Bye!");
    };
}

module.exports = myModule;