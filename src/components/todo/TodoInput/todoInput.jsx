// {
// import { useState, useContext } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { AddButton, InputWrapper, StyledInput } from "./todoInput.styles";
// import {TodoContext} from "../../Context/TodoContext";

// const TodoInput = () => {
//   const [text, setText] = useState("");
//   const { dispatch } = useContext(TodoContext);

//   const handleAddTodo = () => {
//     if (!text.trim()) return;

//     dispatch({
//       type: "ADD_TODO",
//       payload: {
//         id: Date.now(),
//         text: text.trim(),
//         completed: false,
//       },
//     });

//     setText("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddTodo();
//     }
//   };

//   return (
//     <InputWrapper>
//       <StyledInput
//         type="text"
//         placeholder="Add a new task..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />

//       <AddButton onClick={handleAddTodo}>
//         <AddIcon />
//       </AddButton>
//     </InputWrapper>
//    );
//  };

// export default TodoInput;
// }


import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { AddButton, InputWrapper, StyledInput } from './TodoInput.styles';

const TodoInput = ({ addtodo }) => {

  const[inputValue, setInputValue]= useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!inputValue.trim()) return;
    addtodo(inputValue)
    setInputValue("")
  };

  return (
    <>
    <InputWrapper>
    
      <StyledInput
       type="text"
       placeholder='Add a task'
       value={inputValue}
       onChange={(e)=> setInputValue(e.target.value)}
       />

       <AddButton 
       type='submit'
        onClick={handleSubmit}
        disabled={!inputValue.trim()}
       >
          <AddIcon />
          </AddButton>
         
</InputWrapper>
       
    </>
  )
}

export default TodoInput
