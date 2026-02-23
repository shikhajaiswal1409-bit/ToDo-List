// src/components/layout/Header/Header.styles.js

// {import styled from "styled-components";

// export const HeaderWrapper = styled.header`
//   width: 100%;
//   padding: 20px 40px;
//   background: ${({ theme }) => theme.card};
//   border-bottom: 1px solid ${({ theme }) => theme.border};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const Title = styled.h1`
//   font-size: 20px;
//   font-weight: 600;
// `;

// export const RightSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// }

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;   /* 👈 pushes toggle right */
  align-items: flex-start;
  padding: 30px 40px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
`;

export const DateText = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;