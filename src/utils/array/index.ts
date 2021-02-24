type Predicate<T> = (item: T) => void;

export const remove = <T>(array: T[], predicate: Predicate<T>) => {
  const index = array.findIndex(predicate);

  if (index !== 0) array.splice(index, 1);
};