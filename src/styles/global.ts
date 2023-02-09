import { createGlobalStyle, keyframes } from "styled-components";

const slideRight = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: ${({ theme }) => theme.fonts.primary};
    padding-top: 4rem;
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: #333;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 90rem;
    margin-inline: auto;
  }

  .slideRight {
    opacity: 0;
    transform: translateX(-20px);
    animation: ${slideRight} .3s forwards;
  }
`
