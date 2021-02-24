import { remove } from "./index";

test("should remove object by id", () => {
  const list = [
    { id: 1, price: 39.99 },
    { id: 2, price: 9.99 }
  ];

  remove(list, ({ price }) => price > 30);

  expect(list).toStrictEqual([{ id: 2, price: 9.99 }]);
});