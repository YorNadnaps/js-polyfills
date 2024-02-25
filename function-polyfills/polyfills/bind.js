const myBind = function (thisContext, ...args1) {
    const fn = this;
    return function (...args2) {
        return fn.apply(thisContext, [...args1, ...args2]);
    }
};

module.exports = myBind;