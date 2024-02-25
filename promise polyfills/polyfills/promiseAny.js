const { isIterable } = require("../utils/utils");

const promiseAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (!isIterable(promises)) {
            reject(`${typeof promises} ${promises} is not iterable.`);
        }

        if (!Array.isArray(promises)) {
            promises = Array.from(promises);
        }

        if (promises.length === 0) {
            reject(new AggregateError(['All promises were rejected.']));
        }

        let failureCount = 0;
        const errors = [];

        promises.forEach((valueOrPromise, i) => {
            Promise.resolve(valueOrPromise)
                .then(resolve)
                .catch(reason => {
                    errors[i] = reason;
                    failureCount++;
                    if (failureCount === promises.length) {
                        reject(new AggregateError(errors));
                    }
                });
        });
    });
};

module.exports = promiseAny;