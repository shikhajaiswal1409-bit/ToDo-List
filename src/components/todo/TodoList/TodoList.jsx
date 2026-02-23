// {
// import { useContext, useMemo } from "react";
// import { ListWrapper, EmptyState } from "./TodoList.styles";
// import { TodoContext } from "../../Context/TodoContext";
// import TodoItem from "../TodoItem/TodoItem";

// const TodoList = () => {
//   const { state } = useContext(TodoContext);
//   const { todos, filter } = state;

//   const filteredTodos = useMemo(() => {
//     switch (filter) {
//       case "active":
//         return todos.filter((todo) => !todo.completed);
//       case "completed":
//         return todos.filter((todo) => todo.completed);
//       default:
//         return todos;
//     }
//   }, [todos, filter]);

//   if (filteredTodos.length === 0) {
//     return (
//       <EmptyState>
//         No tasks available.
//       </EmptyState>
//     );
//   }

//   return (
//     <ListWrapper>
//       {filteredTodos.map((todo) => (
//    <TodoItem key={todo.id} todo={todo} />
// ))}
//     </ListWrapper>
//   );
// };

// export default TodoList;
// }


import React from 'react'
import { EmptyState, ListWrapper } from "./TodoList.styles";
import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({todos, deleteTodo, editTodo, toggleTodo, toggleImportant}) => {
  if(!todos.length){
    return <EmptyState>No Task found</EmptyState>
  }
  return (
    
    <ListWrapper>
    {todos.map((todo)=>(
      <TodoItem 
      key={todo.id}
      todo={todo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleTodo={toggleTodo}
      toggleImportant={toggleImportant}
      />
      ))}
      </ListWrapper>
  )
}

export default TodoList
