/*! (c) Andrea Giammarchi - ISC */

const create = method => {
  const _ = new WeakMap;  // TBD: make it a private field?
  const iterator = self => _.get(self)[method]();
  /**
   * @type {Set}
   */
  return class Set {

    /**
     * Given a `Map` instance, it shadows either its keys or values,
     * exposing only one of these as read-only `Set`.
     * @param {Map} map the map to shadow
     */
    constructor(map) { _.set(this, map); }

    /**
     * Implements the `Set.prototype.size` accessor.
     * @returns {number}
     */
    get size() { return _.get(this).size; }

    /**
     * Implements the `Set.prototype.has` method.
     * @returns {boolean}
     */
    has(value) {
      for (const v of iterator(this)) {
        if (v === value)
          return true;
      }
      return false;
    }

    /**
     * Implements the `Set.prototype.forEach` signature and behavior.
     * @param {function} callback
     * @param {object=} context
     */
    forEach(callback, context = void 0) {
      for (const value of iterator(this))
        callback.call(context, value, value, this);
    }

    /**
     * Implements the `Set.prototype.keys` method.
     * @returns {Iterable}
     */
    keys() { return iterator(this); }

    /**
     * Implements the `Set.prototype.values` method.
     * @returns {Iterable}
     */
    values() { return iterator(this); }

    /**
     * Implements the `Set.prototype[Symbol.iterator]` method.
     * @returns {Iterable}
     */
    [Symbol.iterator]() { return iterator(this); }
  };
};

export const Keys = create('keys');
export const Values = create('values');
