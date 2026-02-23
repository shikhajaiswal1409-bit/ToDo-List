
{
// import { useContext, useState } from "react";
// import { TodoContext } from "../../Context/TodoContext";

// import {
//   ItemWrapper,
//   LeftSection,
//   TodoText,
//   ActionSection,
//   EditInput,
// } from "./TodoItem.styles";

// import Checkbox from "@mui/material/Checkbox";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// const TodoItem = ({ todo }) => {
//   const { dispatch } = useContext(TodoContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(todo.text);

//   const handleToggle = () => {
//     dispatch({
//       type: "TOGGLE_TODO",
//       payload: todo.id,
//     });
//   };

//   const handleDelete = () => {
//     dispatch({
//       type: "DELETE_TODO",
//       payload: todo.id,
//     });
//   };

//   const handleSave = () => {
//     if (!editText.trim()) return;

//     dispatch({
//       type: "EDIT_TODO",
//       payload: {
//         id: todo.id,
//         text: editText.trim(),
//       },
//     });

//     setIsEditing(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleSave();
//     if (e.key === "Escape") setIsEditing(false);
//   };

//   return (
//     <ItemWrapper $completed={todo.completed}>
//       <LeftSection>
//         <Checkbox
//           checked={todo.completed}
//           onChange={handleToggle}
//         />

//         {isEditing ? (
//           <EditInput
//             value={editText}
//             autoFocus
//             onChange={(e) => setEditText(e.target.value)}
//             onBlur={handleSave}
//             onKeyDown={handleKeyDown}
//           />
//         ) : (
//           <TodoText $completed={todo.completed}>
//             {todo.text}
//           </TodoText>
//         )}
//       </LeftSection>

//       <ActionSection>
//         <EditIcon
//           onClick={() => setIsEditing(true)}
//           style={{ cursor: "pointer" }}
//         />

//         <DeleteIcon
//           onClick={handleDelete}
//           style={{ cursor: "pointer" }}
//         />
//       </ActionSection>
//     </ItemWrapper>
//   );
// };

// export default TodoItem; 
 }




import React, { useState } from 'react'
import { ActionSection, EditInput, ItemWrapper, LeftSection, TodoText } from './TodoItem.styles'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const TodoItem = ({todo, deleteTodo, editTodo, toggleTodo, toggleImportant}) => {
  const[editText, setEditText] = useState("")
  const[isEditing, setIsEditing] = useState(false)

  const handleToggle = () => {
   toggleTodo(todo.id)
  };

  const handleDelete=()=>{
    deleteTodo(todo.id)
  }

  const handleSave=()=>{
    if(!editText.trim()) return;

    editTodo(todo.id, editText.trim());
    setIsEditing(false);
  }

  const handleKeyDown=(e)=>{
    if(e.key === "Enter") handleSave();
    if(e.key === "Escape"){
      setEditText(todo.text);
      setIsEditing(false);
    }
  }

  return (
   <ItemWrapper $completed={todo.completed}>
   <LeftSection>
   <Checkbox 
   checked={todo.completed}
   onChange={handleToggle} />

   {isEditing?(
    <EditInput
    value={editText}
    autoFocus
    onChange={(e)=>setEditText(e.target.value)}
    onBlur={handleSave}
    onKeyDown={handleKeyDown}
    />
   ):(<TodoText $completed={todo.completed}>{todo.text}</TodoText>)}

   </LeftSection>

   <ActionSection>
   <button onClick={()=>toggleImportant(todo.id)}>
    {todo.important?(<StarIcon sx={{ color: "#f5b301" }} />
  ) : (
    <StarBorderIcon />
  )}
</button>
    <EditIcon onClick={()=>setIsEditing(true)}
     style={{ cursor: "pointer" }}
    />

    <DeleteIcon onClick={handleDelete}
      style={{ cursor: "pointer" }}
    />
    </ActionSection>
   </ItemWrapper>
  )
}

export default TodoItem
