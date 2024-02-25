const myBind = require("../polyfills/bind");

Function.prototype.myBind = myBind;

const thisContext = {
    name: 'Spandan'
};

function printDetails(city, country, age) {
    console.log(`Hi, I'm ${this.name}, ${age} years old, from ${city}, ${country}.`);
    return 'Successfully printed details';
}

const bindPrintDetails = printDetails.myBind(thisContext, 'Bangalore');

console.log(bindPrintDetails('India', 27));
console.log(bindPrintDetails('India', 27) === 'Successfully printed details.');