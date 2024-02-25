const myCall = function (thisContext, ...args) {
    const fn = this;
    let randomPropName = Math.floor(Math.random() * 10000);
    while (randomPropName in thisContext) {
        randomPropName = Math.floor(Math.random() * 10000);
    }
    thisContext[randomPropName] = fn;
    const returnValue = thisContext[randomPropName](...args);
    delete thisContext[randomPropName];
    return returnValue;
};

module.exports = myCall;