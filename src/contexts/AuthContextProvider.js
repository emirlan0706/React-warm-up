import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import { auth } from "../fire";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.user:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function register({ email, password, name, photo }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  }

  let values = {
    user: state.user,
    register,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
