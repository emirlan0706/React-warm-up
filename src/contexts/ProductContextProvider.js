import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/ACTIONS";
import axios from "axios";
import { LIMIT } from "../helpers/const";

const productContext = createContext();

export const UseProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pageTotalCount: 1,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const res = await axios.get(
        `${API}${window.location.search || `?_limit=${LIMIT}`}`
      );

      const totalPage = Math.ceil(res.headers["x-total-count"] / LIMIT);

      let action = {
        type: ACTIONS.products,
        payload: res.data,
      };
      dispatch(action);

      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalPage,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      let res = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editeProduct(obj, id) {
    try {
      await axios.patch(`${API}/${id}`, obj);
    } catch (error) {
      console.log(error);
    }
  }

  let values = {
    products: state.products,
    oneProduct: state.oneProduct,
    pageTotalCount: state.pageTotalCount,
    getProducts,
    addProduct,
    deleteProduct,
    editeProduct,
    getOneProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
