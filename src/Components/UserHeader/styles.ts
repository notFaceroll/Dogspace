import styled, { css } from 'styled-components';

interface Props {
  isMobile: boolean | null;
  isOpen: boolean;
}

export const Header = styled.header<Props>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  margin-top: 1rem;

  .toggle-menu-btn {
    background-color: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;
    padding: 0px;

    ${({ isOpen }) => isOpen && css`
      outline: none;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    `}

    &::after {
      content: '';
      display:block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background-color: currentColor;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: .2s;

      ${({ isOpen }) => isOpen && css`
        rotate: 90deg;
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
      `}
    }

    &:is(:focus, :hover) {
      outline: none;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }
  }
`

export const NavContainer = styled.nav<Props>`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    ${({ isMobile }) => isMobile && css`
      display: block;
      position: absolute;
      top: 78px;
      right: 0px;
      padding: 0 1rem;
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
      border-radius: .2rem;
      translate: 0 -10px;
      opacity: 0;
      pointer-events: none;

      li + li {
        border-top: 1px solid #eee;
      }
    `}

    ${({ isMobile, isOpen }) => (isMobile && isOpen) && css`
      opacity: 1;
      transform: initial;
      z-index: 100;
      transition: .3s;
      pointer-events: initial;
    `}
  }

  a, button {
    background-color: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;
    color: #333;


    ${({ isMobile }) => isMobile && css`
      display: flex;
      justify-content: start;
      align-items: center;
      background: none;
      width: 100%;
      padding: 0.5rem 0;
      cursor: pointer;
    `}

    img {
      ${({ isMobile }) => isMobile && css`
      margin-right: .5rem;
      `}
    }

    &:is(:hover, :focus) {
      background-color: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
      color: #fb1;

      ${({ isMobile }) => isMobile && css`
        box-shadow: none;
        border-color: transparent;
      `}
    }

    &.active {
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;

      ${({ isMobile }) => isMobile && css`
        box-shadow: none;
        border-color: transparent;
      `}
    }
  }
`;
