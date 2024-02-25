const myApply = require("../polyfills/apply");

Function.prototype.myApply = myApply;

const thisContext = {
    name: 'Spandan Roy'
};

function printDetails(age) {
    console.log(`Hi, I'm ${this.name}, ${age} years old.`);
    return 'Successfully printed details';
}

console.log(printDetails.myApply(thisContext, [27]));