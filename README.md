# Shadowed Map

[![build status](https://github.com/WebReflection/shadowed-map/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/shadowed-map/actions) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/shadowed-map/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/shadowed-map?branch=main)

A read-only Set for maps' keys or values, useful to expose a read-only *Set* that represents the mapped keys or values, without needing to expose the *Map* itself, and without being worried about keeping it in sync.

```js
import {Keys, Vaues} from 'shadowed-map';

const map = new Map([
  ['a', 1],
  ['b', 2]
]);

const keys = new Keys(map);
const values = new Values(map);

[...keys];      // a, b
[...values];    // 1, 2

keys.size;      // 2
keys.has('a');  // true
keys.keys();    // iterator
keys.values();  // iterator
keys.forEach;   // same as Set#forEach
```
