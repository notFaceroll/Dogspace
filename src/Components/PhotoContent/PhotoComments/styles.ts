import styled, { css } from 'styled-components';

export const CommentsForm = styled.form<Props>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  ${({ single }) => single && css` margin: 1rem 0; `};

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background-color: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:is(:hover, :focus) {
      outline: none;
      border-color: #fb1;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    resize: none;
    border: 1px solid #eee;
    border-radius: .2rem;
    background-color: #eee;
    transition: .2s;
    padding: .5rem;

    &:is(:hover, :focus) {
      outline: none;
      border-color: #fb1;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }
`;

interface Props {
  single: boolean;
}

export const CommentsList = styled.ul<Props>`
  overflow-y: auto;
  word-break: break-word;
  padding: 2rem;
  ${({ single }) => single && css` padding: 2rem 0; `};

  li {
    margin-bottom: .5rem;
    line-height: 1.2;
  }
`;
