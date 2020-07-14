/**
 * Picks the key-value pairs corresponding to the given keys from an object.
 * @example pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
 * @param obj
 * @param arr
 */
export const pick = (obj: any, arr: string[]) =>
  arr.reduce(
    (acc: any, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {}
  )

/**
 * Make function that delays invoking the provided function until
 * at least ms milliseconds have elapsed since the last time it was invoked.
 * @param func
 * @param wait
 */
export const debounce = (func: Function, wait: number = 50) => {
  let timerId: number = 0
  return function (...args: any) {
    clearTimeout(timerId)
    // @ts-ignore
    timerId = setTimeout(() => func.apply(this, args), wait)
  }
}

/**
 * Make function that only invokes the provided function
 * at most once per every wait milliseconds.
 * @param func
 * @param wait
 */
export const throttle = (func: Function, wait: number) => {
  let timerId: number | null
  let lastTime: number = 0
  return function (...args: any) {
    const now = Date.now()
    if (timerId) clearTimeout(timerId)
    if (now - lastTime >= wait) {
      // @ts-ignore
      func.apply(this, args)
      lastTime = now
    } else {
      // @ts-ignore
      timerId = setTimeout(() => func.apply(this, args), wait)
    }
  }
}
