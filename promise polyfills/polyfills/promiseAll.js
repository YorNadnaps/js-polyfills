const { isIterable } = require("../utils/utils");

const promiseAll = function (promises) {
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
        const resultArr = new Array(promises.length);
        promises.forEach((valueOrPromise, i) => {
            Promise.resolve(valueOrPromise)
                .then(value => {
                    resultArr[i] = value;
                    count++;
                    if (count === promises.length) {
                        resolve(resultArr);
                    }
                })
                .catch(reason => {
                    reject(reason);
                })
        });
    });
};

module.exports = promiseAll;

