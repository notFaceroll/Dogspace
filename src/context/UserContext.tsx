import React, { createContext, ReactNode, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../api';

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({
  userLogin: (username: string, password: string) => { },
  data: { nome: '', username: '', id: 0, email: '' }
})

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getUser(token: any) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsUserLoggedIn(true);
  }

  async function userLogin(username: string, password: string) {
    const { url, options } = TOKEN_POST({ username, password })
    const response = await fetch(url, options);
    const { token } = await response.json();
    console.log({ token })
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  const value = {
    userLogin,
    data
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
