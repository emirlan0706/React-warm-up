export const LIMIT = 6;

export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "PageTotalCount",
  user: "user",
  cart: "cart",
  cartLenght: "cartLenght",
};

export const API = "http://localhost:8000/products";

export const ADMINS = ["admin@gmail.com"];

export function totalSumFunc(products) {
  let data = products.reduce((acc, item) => acc + item.subPrice, 0);
  return data;
}

export function calcSubPrice(product) {
  return +product.count * product.price;
}
