
import { createContext, useReducer, useEffect } from "react";
import { todoReducer, initialState } from "./TodoReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext(); 

export const TodoProvider = ({ children }) => {
  const [persistedState, setPersistedState] =
    useLocalStorage("todoState", initialState);

  const [state, dispatch] = useReducer(
    todoReducer,
    persistedState
  );

  useEffect(() => {
    setPersistedState(state);
  }, [state, setPersistedState]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};