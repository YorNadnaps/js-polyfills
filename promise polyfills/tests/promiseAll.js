const promiseAll = require("../polyfills/promiseAll");
const { createPromise } = require("../utils/utils");

/** 1. Iterables should work: string */
promiseAll('SPANDAN ROY')
    .then(resultArr => {
        console.log('Test #1');
        console.log(resultArr);
        console.log(resultArr.join('') === 'SPANDAN ROY');
    });

/** 2. Iterables should work: set */
promiseAll(new Set([1, 2, Promise.resolve(3)]))
    .then(resultArr => {
        console.log('Test #2');
        console.log(resultArr);
        console.log(resultArr.join('') === '123');
    });

/** 3. Iterables should work: map */
promiseAll(new Map())
    .then(resultArr => {
        console.log('Test #3');
        console.log(resultArr);
        console.log(resultArr.join('') === '');
    });

/** 4. Using non-iterables should throw an error: null. */
promiseAll(null)
    .then(console.log)
    .catch(reason => {
        console.log('Test #4');
        console.log(reason);
    });

/** 5. Using non-iterables should throw an error: number. */
promiseAll(144)
    .then(console.log)
    .catch(reason => {
        console.log('Test #5');
        console.log(reason);
    });

/** 6. If all promises get resolved, it should return array of values in order. */
promiseAll([Promise.resolve(144), 81, createPromise(true, 'Spandan', 1200)])
    .then(resultArr => {
        console.log('Test #6');
        console.log(resultArr);
    });

/** 7. If any promise gets rejected, it returns a new promise rejected with reason. */
promiseAll([createPromise(true, 'Spandan', 1200), Promise.resolve(true), createPromise(false, 'Some error occurred', 1500)])
    .then(console.log)
    .catch(reason => {
        console.log('Test #7');
        console.log(reason);
    });