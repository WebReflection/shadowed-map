const {Keys, Values} = require('../cjs');

const map = new Map([
  ['a', 1],
  ['b', 2]
]);

const keys = new Keys(map);
const values = new Values(map);

console.assert(keys.size === 2);
console.assert(keys.has('b'));
console.assert(!keys.has('c'));
console.assert([...keys].join(',') === 'a,b');
console.assert([...keys.keys()].join(',') === 'a,b');
console.assert([...keys.values()].join(',') === 'a,b');

console.assert([...values].join(',') === '1,2');

const args = [];
values.forEach(
  function (a, b, c) {
    args.push([this, a, b, c]);
  },
  keys
);

console.assert(args.length === 2);
console.assert(args[0][0] === keys);
console.assert(args[0][1] === 1);
console.assert(args[0][2] === 1);
console.assert(args[0][3] === values);
console.assert(args[1][0] === keys);
console.assert(args[1][1] === 2);
console.assert(args[1][2] === 2);
console.assert(args[1][3] === values);
