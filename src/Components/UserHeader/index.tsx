import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FormTitle } from '../../pages/Login/LoginForm/styles';

// nav icons
import add from '../../assets/adicionar.svg'
import stats from '../../assets/estatisticas.svg'
import feed from '../../assets/feed.svg'
import leave from '../../assets/sair.svg'

import { Header, NavContainer } from './styles';
import useMedia from '../../hooks/useMedia';

const pages = ['account', 'stats', 'post'];

const UserHeader: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState<string | undefined>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { userLogout } = useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');
  const location = useLocation();

  useEffect(() => {
    let pathTitle = location.pathname.split('/').pop();
    const foundPage = pages.find(element => element === pathTitle);
    if (foundPage) {
      setCurrentTitle(pathTitle);
      setIsMobileMenuOpen(false);
    }
  }, [location])

  return (
    <Header isMobile={mobile} isOpen={isMobileMenuOpen}>
      <FormTitle>{currentTitle}</FormTitle>
      {mobile && (
        <button
          className='toggle-menu-btn'
          aria-label='Menu'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        </button>
      )
      }
      <NavContainer isMobile={mobile} isOpen={isMobileMenuOpen}>
        <ul>
          <li>
            <NavLink to='/account' end>
              <img src={feed} />
              {mobile && 'Minhas Fotos'}
            </NavLink>
          </li>
          <li>
            <NavLink to='/account/stats'>
              <img src={stats} />
              {mobile && 'Estatísticas'}
            </NavLink>
          </li>
          <li>
            <NavLink to='/account/post'>
              <img src={add} />
              {mobile && 'Adicionar Foto'}
            </NavLink>
          </li>
          <li>
            <button onClick={userLogout}>
              <img src={leave} />
              {mobile && 'Sair'}
            </button>
          </li>
        </ul>
      </NavContainer>
    </Header>
  );
}

export default UserHeader;
