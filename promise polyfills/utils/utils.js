const isIterable = (value) => typeof Object(value)[Symbol.iterator] === 'function';

const createPromise = (isResolve, valueOrReason, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isResolve) {
                resolve(valueOrReason);
            } else {
                reject(valueOrReason);
            }
        }, timeout);
    });
};

module.exports = {
    isIterable,
    createPromise
};