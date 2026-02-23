
import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EmptyState = styled.div`
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  border: 1px dashed ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
`;