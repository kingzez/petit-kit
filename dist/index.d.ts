/**
 * Picks the key-value pairs corresponding to the given keys from an object.
 * @example pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
 * @param obj
 * @param arr
 */
export declare const pick: (obj: any, arr: string[]) => any;
/**
 * Make function that delays invoking the provided function until
 * at least ms milliseconds have elapsed since the last time it was invoked.
 * @param func
 * @param wait
 */
export declare const debounce: (func: Function, wait?: number) => (...args: any) => void;
/**
 * Make function that only invokes the provided function
 * at most once per every wait milliseconds.
 * @param func
 * @param wait
 */
export declare const throttle: (func: Function, wait: number) => (...args: any) => void;
