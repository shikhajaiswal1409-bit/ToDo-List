// {
// import styled from "styled-components";
// import Header from "./components/layout/Header/Header";
// import TodoInput from "./components/todo/TodoInput/todoInput";
// import TodoList from "./components/todo/TodoList/TodoList";
// import TodoFilters from "./components/todo/TodoFilters/TodoFilters";
// import TodoStats from "./components/todo/TodoStats/TodoStats";

// const AppWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// const Main = styled.main`
//   flex: 1;
//   padding: 40px;
//   max-width: 900px;
//   width: 100%;
//   margin: 0 auto;
// `;

// function App() {
//   return (
//     <AppWrapper>
//       <Header />

//       <Main>
//         <h2>Welcome to Todo Pro</h2>
//         <TodoInput />
//         <TodoFilters />
//         <TodoList />
//         <TodoStats />

//       </Main>
//     </AppWrapper>
//   );
// }

// export default App;
// }



import React, { useEffect, useState } from 'react'
import TodoInput from './components/todo/TodoInput/TodoInput'
import TodoList from './components/todo/TodoList/TodoList'
import styled from 'styled-components';
import Header from './components/layout/Header/Header';
import TodoFilters from './components/todo/TodoFilters/TodoFilters';

const AppWrapper = styled.div`
 max-width: 900px;
   margin: 60px auto;
   padding: 40px;
 `;



const App = ({isDark, setIsDark}) => {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  }); 
  
const [filter, setFilter] = useState("all");

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo=(text)=>{
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      important: false
    };
    setTodos((prevTodos)=>[ newTodo, ...prevTodos])
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id !== id)
  )}

  const editTodo=(id, newText)=>{
    setTodos((prevTodos)=>prevTodos.map((todo)=>todo.id===id?{...todo, text:newText}: todo))
  }

   const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>todo.id === id ? { ...todo, completed: !todo.completed }: todo
      )
    );
  };

  const toggleTheme = () => {
  setIsDark((prev) => !prev);
};

 const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  const toggleImportant = (id)=>{
    setTodos((prevTodos)=>prevTodos.map((todo)=>todo.id === id?{...todo, important: !todo.important}: todo)
  .sort((a,b)=>b.important-a.important)
  );
  };


  return (
   <>
      <center><h1>Start Your Day</h1><p>Organize, prioritize, and achieve more</p></center>

   <AppWrapper>
    <Header isDark={isDark} toggleTheme={toggleTheme} />
    <TodoInput addtodo={addTodo} />
   <TodoFilters filter={filter}
        setFilter={setFilter}
      />
    <TodoList todos={filteredTodos} 
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleTodo={toggleTodo}
      toggleImportant={toggleImportant}
    />
    </AppWrapper>
   </>
  )
}

export default App
