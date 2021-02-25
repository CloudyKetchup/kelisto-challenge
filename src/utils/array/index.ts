type Predicate<T> = (item: T) => void;

/***
 * Remove and item from the array
 * 
 * @template T
 * @param {Array<T>} array
 * @param {Predicate<T>} predicate    callback for the criteria of the item to be removed
 */
export const remove = <T>(array: T[], predicate: Predicate<T>) => {
  const index = array.findIndex(predicate);

  if (index > -1) array.splice(index, 1);
};