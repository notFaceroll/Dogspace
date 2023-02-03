import styled from 'styled-components';

export const Container = styled.div`

  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  /* font-weight: 700; */

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  .error {
    color: #f31;
    font-size: .875rem;
    margin-top: .25rem;
  }
`;
