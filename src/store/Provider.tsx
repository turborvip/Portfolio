import Context from "./Context";
import React, { useReducer } from "react";
import reducer, { initState } from "./reducer";

interface propsProvider {
  children: any;
}

function Provider({ children }: propsProvider) {
  const [state, dispatch]:[any,any] = useReducer<any>(reducer, initState);
  // console.log(state);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
