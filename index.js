/*eslint-env node, es6*/
'use strict';

function parseargs() {
    const argv = process.argv.slice(2);
    const len = argv.length;

    let arg = {};

    for (let i = 0; i < len; i++) {
        const key = argv[i];
        const next = argv[i + 1];
        const value = next && next[0] !== '-'
                  ? argv[++i]
                  : true;

        arg[key] = value;
    }

    return arg;
}

module.exports = parseargs();
