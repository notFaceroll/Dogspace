import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: .4rem;
  background: #eee;
  transition: 0.2s;

  &:is(:focus, :hover) {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Container = styled.div`

`;
