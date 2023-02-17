import styled from 'styled-components';
import user from '../../assets/usuario.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  background-color: #fff;
  padding-inline: 1rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
  }

  .logo {
    padding: 0.5rem 0;
  }

  .login {
    color: #333;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${user}) no-repeat center center;
      margin-left: .5rem;
      position: relative;
      top: -1px;
    }
  }

`;
