/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(
  source: readonly T[],
  mapper: (item: T, index: number) => R,
): R[] {
  // throw new Error('mapArray: not implemented');
  if (source == null) {
    throw new TypeError("Source array cannot be null or undefined");
  }
  let result: R[] = [];
  for (let i: number = 0; i < source.length; i++) {
    let mutatedElem: R = mapper(source[i], i);
    result.push(mutatedElem);
  }
  return result;
}

export function filterArray<T>(
  source: readonly T[],
  predicate: (item: T, index: number) => boolean,
): T[] {
  // throw new Error("filterArray: not implemented");
  if (source == null) {
    throw new TypeError("Source array cannot be null or undefined");
  }
  let result: T[] = [];
  for (let i: number = 0; i < source.length; i++) {
    let elem: T = source[i];
    if (predicate(elem, i)) {
      result.push(elem);
    }
  }
  return result;
}

export function reduceArray<T, R>(
  source: readonly T[],
  reducer: (acc: R, item: T, index: number) => R,
  initial: R,
): R {
  // throw new Error("reduceArray: not implemented");
  if (source == null) {
    throw new TypeError("Source array cannot be null or undefined");
  }
  let acc: R = initial;
  for (let i: number = 0; i < source.length; i++) {
    acc = reducer(acc, source[i], i);
  }
  return acc;
}

export function partition<T>(
  source: readonly T[],
  predicate: (item: T) => boolean,
): [T[], T[]] {
  // throw new Error("partition: not implemented");
  if (source == null) {
    throw new TypeError("Source array cannot be null or undefined");
  }
  let arrayTrue: T[] = [];
  let arrayFalse: T[] = [];
  for (let i: number = 0; i < source.length; i++) {
    if (predicate(source[i])) {
      arrayTrue.push(source[i]);
    } else {
      arrayFalse.push(source[i]);
    }
  }
  return [arrayTrue, arrayFalse];
}

export function groupBy<T, K extends PropertyKey>(
  source: readonly T[],
  keySelector: (item: T) => K,
): Record<K, T[]> {
  // throw new Error("groupBy: not implemented");
  if (source == null) {
    throw new TypeError("Source array cannot be null or undefined");
  }
  let result = {} as Record<K, T[]>;
  for (let i: number = 0; i < source.length; i++) {
    const key = keySelector(source[i]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(source[i]);
  }
  return result;
}
