// {

// import { StrictMode, useContext } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { ThemeProvider } from 'styled-components'
// import { darkTheme, lightTheme } from './components/theme/theme.js'
// import { GlobalStyles } from './components/theme/GlobalStyles.js'
// import { TodoContext, TodoProvider } from './components/Context/TodoContext.jsx'


// export const ThemedApp = () => {
//   const { state } = useContext(TodoContext);

//   const currentTheme =
//     state.theme === "light" ? lightTheme : darkTheme;

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyles />
//       <App />
//     </ThemeProvider>
//   );
// };

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <TodoProvider>
//     <ThemedApp />
//     </TodoProvider>
//   </StrictMode>
// );

// }



import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./components/theme/theme";
import { GlobalStyles } from "./components/theme/GlobalStyles";

export const Root = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <GlobalStyles />
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);