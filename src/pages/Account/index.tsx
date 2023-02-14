import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../../Components/Feed';
import UserHeader from '../../Components/UserHeader';
import { UserContext } from '../../context/UserContext';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
// import { Container } from './styles';

const Account: React.FC = () => {
  const { data } = useContext(UserContext);
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route index element={<Feed user={data.id} />} />
        <Route path='post' element={<UserPhotoPost />} />
        <Route path='stats' element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default Account;
