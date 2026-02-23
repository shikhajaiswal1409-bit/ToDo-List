// {
// import { useContext } from "react";
// import { TodoContext } from "../../Context/TodoContext";
// import {
//   FiltersWrapper,
//   FilterButton,
// } from "./TodoFilters.styles";

// const filters = ["all", "active", "completed"];

// const TodoFilters = () => {
//   const { state, dispatch } = useContext(TodoContext);
//   const { filter } = state;

//   const handleFilterChange = (value) => {
//     dispatch({
//       type: "SET_FILTER",
//       payload: value,
//     });
//   };

//   return (
//     <FiltersWrapper>
//       {filters.map((item) => (
//         <FilterButton
//           key={item}
//           $active={filter === item}
//           onClick={() => handleFilterChange(item)}
//         >
//           {item.charAt(0).toUpperCase() + item.slice(1)}
//         </FilterButton>
//       ))}
//     </FiltersWrapper>
//   );
// };

// export default TodoFilters;
// }


import {
  FiltersWrapper,
  FilterButton,
} from "./TodoFilters.styles";

const TodoFilters = ({ filter, setFilter }) => {
  return (
    <FiltersWrapper>
      <FilterButton
        $active={filter === "all"}
        onClick={() => setFilter("all")}
      >
        All
      </FilterButton>

      <FilterButton
        $active={filter === "active"}
        onClick={() => setFilter("active")}
      >
        Active
      </FilterButton>

      <FilterButton
        $active={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </FilterButton>
    </FiltersWrapper>
  );
};

export default TodoFilters;