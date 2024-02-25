const myCall = require("../polyfills/call");

Function.prototype.myCall = myCall;

const thisContext = {
    name: 'Spandan Roy'
};

function printDetails(age) {
    console.log(`Hi, I'm ${this.name}, ${age} years old.`);
    return 'Successfully printed details';
}

console.log(printDetails.myCall(thisContext, 27));