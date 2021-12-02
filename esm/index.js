/*! (c) Andrea Giammarchi - ISC */

const create = method => {
  const _ = new WeakMap;  // TBD: make it a private field?
  const iterator = self => _.get(self)[method]();
  return class Set {
    constructor(map) { _.set(this, map); }
    get size() { return _.get(this).size; }

    has(value) {
      for (const v of iterator(this)) {
        if (v === value)
          return true;
      }
      return false;
    }

    forEach(callback, context = void 0) {
      for (const value of iterator(this))
        callback.call(context, value, value, this);
    }

    keys() { return iterator(this); }
    values() { return iterator(this); }
    [Symbol.iterator]() { return iterator(this); }
  };
};

export const Keys = create('keys');
export const Values = create('values');
