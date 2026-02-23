// {
// import { useContext, useMemo } from "react";
// import { TodoContext } from "../../Context/TodoContext";
// import {
//   StatsWrapper,
//   StatsInfo,
//   ClearButton,
// } from "./TodoStats.styles";

// const TodoStats = () => {
//   const { state, dispatch } = useContext(TodoContext);
//   const { todos } = state;

//   const { completed, remaining } = useMemo(() => {
//     const total = todos.length;
//     const completed = todos.filter(t => t.completed).length;
//     const remaining = total - completed;

//     return { total, completed, remaining };
//   }, [todos]);

//   const handleClearCompleted = () => {
//     dispatch({ type: "CLEAR_COMPLETED" });
//   };

//   return (
//     <StatsWrapper>
//       <StatsInfo>
//         {remaining} remaining | {completed} completed
//       </StatsInfo>

//       {completed > 0 && (
//         <ClearButton onClick={handleClearCompleted}>
//           Clear Completed
//         </ClearButton>
//       )}
//     </StatsWrapper>
//   );
// };

// export default TodoStats;
// }


import { StatsWrapper } from "./TodoStats.styles";

const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;

  return (
    <StatsWrapper>
      <span>Total: {total}</span>
      <span>Active: {active}</span>
      <span>Completed: {completed}</span>
    </StatsWrapper>
  );
};

export default TodoStats;