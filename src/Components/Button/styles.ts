import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  border: none;
  border-radius: .4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  transition: all .15s ease-in-out;
  min-width: 8rem;

  &:is(:focus, :hover) {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: wait;
  }
`;
