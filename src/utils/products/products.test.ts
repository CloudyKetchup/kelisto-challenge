import { Product } from "../../models/products";
import { exist } from "./index";

test("should find the product by id", () => {
  const products: Partial<Product>[] = [
    { productId: "302923" },
    { productId: "76y861" },
    { productId: "04445" }
  ];

  const product: Product = {
    productId: "76y861",
    sku: "",
    title: "",
    price: 39.99,
    description: "",
    image: ""
  };

  const exists = exist(products as Product[], product);

  expect(exists).toBeTruthy();
});

test("should not find the product by id", () => {
  const products: Partial<Product>[] = [
    { productId: "302923" },
    { productId: "76y861" }
  ];

  const product: Product = {
    productId: "04445",
    sku: "",
    title: "",
    price: 39.99,
    description: "",
    image: ""
  };

  const exists = exist(products as Product[], product);

  expect(exists).toBeFalsy();
});