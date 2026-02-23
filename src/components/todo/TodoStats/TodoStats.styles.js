// src/components/todo/TodoStats/TodoStats.styles.js

import styled from "styled-components";

export const StatsWrapper = styled.div`
  margin-top: 20px;
  padding: 14px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatsInfo = styled.div`
  font-size: 13px;
  opacity: 0.8;
`;

export const ClearButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: #d32f2f;
  color: white;
  font-size: 12px;
`;