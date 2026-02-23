// {
// import { useContext } from "react";
// import { TodoContext } from "../../Context/TodoContext";

// import {
//   HeaderWrapper,
//   Title,
//   RightSection,
// } from "./Header.styles";

// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

// const Header = () => {
//   const { state, dispatch } = useContext(TodoContext);

//   const toggleTheme = () => {
//     dispatch({ type: "TOGGLE_THEME" });
//   };

//   return (
//     <HeaderWrapper>
//       <Title>Todo Pro</Title>

//       <RightSection onClick={toggleTheme}>
//         {state.theme === "light" ? (
//           <DarkModeIcon style={{ cursor: "pointer" }} />
//         ) : (
//           <LightModeIcon style={{ cursor: "pointer" }} />
//         )}
//       </RightSection>
//     </HeaderWrapper>
//   );
// };

// export default Header;
// }


import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  HeaderWrapper,
  Title,
  DateText,
  ThemeToggle,
  LeftSection
} from "./Header.styles";

const Header = ({ isDark, toggleTheme }) => {
    const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

 return (
  <HeaderWrapper>
    <LeftSection>
      <Title>My Day</Title>
      <DateText>{formattedDate}</DateText>
    </LeftSection>

    <ThemeToggle onClick={toggleTheme}>
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </ThemeToggle>
  </HeaderWrapper>
);
};

export default Header;