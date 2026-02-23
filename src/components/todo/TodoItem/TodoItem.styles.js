// src/components/todo/TodoItem/TodoItem.styles.js

import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 14px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;

  opacity: ${({ $completed }) => ($completed ? 0.6 : 1)};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TodoText = styled.p`
  margin: 0;
  font-size: 14px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditInput = styled.input`
  font-size: 14px;
  padding: 4px 6px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  outline: none;
`;