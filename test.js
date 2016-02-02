'use strict';

const args = require('.');

console.assert(args['-a'] === 'A');
console.assert(args['-b'] === 'B');
console.assert(args['-c'] === true);
console.assert(args['-d'] === 'D');
