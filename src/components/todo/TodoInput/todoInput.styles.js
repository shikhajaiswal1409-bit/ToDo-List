

import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;               
  margin-bottom: 40px;     
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 16px 20px;      
  border-radius: 12px;     
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;       
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
  }
`;

export const AddButton = styled.button`
  padding: 0 24px;         
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;       
  transition: transform 0.1s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
