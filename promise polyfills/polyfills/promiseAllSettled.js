const { isIterable } = require("../utils/utils");

const promiseAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        if (!isIterable(promises)) {
            reject(`${typeof promises} ${promises} is not iterable.`);
        }

        if (!Array.isArray(promises)) {
            promises = Array.from(promises);
        }

        if (promises.length === 0) {
            resolve([]);
        }

        let count = 0;
        const resultArr = [];
        promises.forEach((valueOrPromise, i) => {
            Promise.resolve(valueOrPromise)
                .then(value => {
                    resultArr[i] = {
                        status: 'fulfilled',
                        value
                    };
                    count++;
                })
                .catch(reason => {
                    resultArr[i] = {
                        status: 'rejected',
                        reason
                    };
                    count++;
                })
                .finally(() => {
                    if (count === promises.length) {
                        resolve(resultArr);
                    }
                });
        });
    });
};

module.exports = promiseAllSettled;
