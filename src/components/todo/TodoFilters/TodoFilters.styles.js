import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 8px 14px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ $active, theme }) =>
    $active ? theme.primary : theme.card};
  color: ${({ $active, theme }) =>
    $active ? "#fff" : theme.text};
  font-size: 13px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;