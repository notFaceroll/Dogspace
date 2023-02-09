import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  .file {
    margin-bottom: 1rem;
  }

  .preview {
    border-radius: 1rem;

    &::after {
      content: '';
      display: block;
      height: 0px;
      padding-bottom: 100%;
    }
  }
`;

