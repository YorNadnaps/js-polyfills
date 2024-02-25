const { isIterable } = require("../utils/utils");

const promiseRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (!isIterable(promises)) {
            reject(`${typeof promises} ${promises} is not iterable.`);
        }

        if (!Array.isArray(promises)) {
            promises = Array.from(promises);
        }

        if (promises.length === 0) {
            return;
        }

        promises.forEach(valueOrPromise => {
            Promise.resolve(valueOrPromise)
                .then(resolve, reject)
        });
    });
};

module.exports = promiseRace;