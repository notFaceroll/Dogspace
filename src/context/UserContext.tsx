import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';

interface UserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  userLogin: (username: string, password: string) => void,
  userLogout: () => void,
  data: { nome: string, username: string, id: number, email: string },
  error: string | null,
  isLoading: boolean,
  isUserLoggedIn: boolean,
}

export const UserContext = createContext<IUserContext>({
  userLogin: (username: string, password: string) => { },
  userLogout: () => { },
  data: { nome: '', username: '', id: 0, email: '' },
  error: '' || null,
  isLoading: false,
  isUserLoggedIn: false,
})

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setIsLoading(false);
    setIsUserLoggedIn(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate])

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token && isUserLoggedIn) return;

      console.log('autologin')

      if (token) {
        try {
          setError(null);
          setIsLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido.')
          await getUser(token);

        } catch (error) {
          userLogout();
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsUserLoggedIn(false);
      }
    }
    autoLogin();
  }, [userLogout])


  async function getUser(token: any) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsUserLoggedIn(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setIsLoading(true);

      const { url, options } = TOKEN_POST({ username, password })
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`)

      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');

    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        setIsLoading(false);
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    userLogin,
    userLogout,
    data,
    error,
    isLoading,
    isUserLoggedIn,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
