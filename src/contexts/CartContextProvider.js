import React, { createContext, useContext, useReducer } from "react";
import { notify } from "../components/Toastify";
import { ACTIONS } from "../helpers/ACTIONS";
import { calcSubPrice, totalSumFunc } from "../helpers/const";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: {
    products: [],
    totalPrice: 0,
  },
  cartLenght: 0,
};

function reducer(action, state = INIT_STATE) {
  switch (action.type) {
    case ACTIONS.cart:
      return { ...state, cart: action.payload };
    case ACTIONS.cartLenght:
      return { ...state, cartLenght: action.payload };
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart() {
    const data = getDataFromLS();
    dispatch({
      type: ACTIONS.cart,
      payload: data,
    });
  }

  function addProductToCart(product) {
    let data = getDataFromLS();
    data.products.push({ ...product, count: 1, subPrice: +product.price });
    data.totalPrice = totalSumFunc(data.products);
    localStorage.setItem("cart", JSON.stringify(data));
    notify("SuccessFully added to cart");
  }

  function changeProductCount(count, id) {
    const cart = getDataFromLS();

    cart.products = cart.products.map((product) => {
      if (product.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = totalSumFunc(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  const values = {
    cart: state.cart,
    getCart,
    addProductToCart,
    changeProductCount,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
