/**
 * Picks the key-value pairs corresponding to the given keys from an object.
 * @example pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
 * @param obj
 * @param arr
 */
export declare const pick: (obj: any, arr: string[]) => any;
