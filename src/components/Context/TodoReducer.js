
export const initialState = {
  todos: [],
  filter: "all",
  theme: "light",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state, todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state, todos: state.todos.filter((todo) => todo.id !== action.payload
        ),
      };

    case "TOGGLE_TODO":
      return {
        ...state, todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => !todo.completed
        ),
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    default:
      return state;
  }
};