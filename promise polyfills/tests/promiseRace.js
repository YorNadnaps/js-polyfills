const promiseRace = require("../polyfills/promiseRace");
const { createPromise } = require("../utils/utils");

/** 1. Iterables should work: string */
promiseRace('SPANDAN ROY')
    .then(value => {
        console.log('Test #1');
        console.log(value);
        console.log(value === 'S');
    });

/** 2. Iterables should work: set */
promiseRace(new Set([1, 2, Promise.resolve(3)]))
    .then(value => {
        console.log('Test #2');
        console.log(value);
        console.log(value === 1);
    });

/** 3. Iterables should work: map */
promiseRace(new Map())
    .then(console.log)
    .catch(console.log);

/** 4. Using non-iterables should throw an error: null. */
promiseRace(null)
    .then(console.log)
    .catch(reason => {
        console.log('Test #4');
        console.log(reason);
    });

/** 5. Using non-iterables should throw an error: number. */
promiseRace(144)
    .then(console.log)
    .catch(reason => {
        console.log('Test #5');
        console.log(reason);
    });

/** 6. If a promise gets resolved, it should immediately return the resolved value. */
promiseRace([Promise.resolve(144), 81, createPromise(true, 'Spandan', 1200)])
    .then(value => {
        console.log('Test #6');
        console.log(value);
    });

/** 7. If a promise gets rejected, it should immediately return the rejected value. */
promiseRace([createPromise(false, 'Spandan', 1200), Promise.reject(true), createPromise(false, 'Some error occurred', 1500)])
    .then(console.log)
    .catch(reason => {
        console.log('Test #7');
        console.log(reason);
    });