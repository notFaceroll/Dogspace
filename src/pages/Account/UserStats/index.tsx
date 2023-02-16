import React, { Suspense, useEffect, lazy } from 'react';
import { STATS_GET } from '../../../api';
import Loading from '../../../Components/utils/Loading';
import useFetch from '../../../hooks/useFetch';
const UserStatsGraphs = lazy(() => import('../../../Components/UserStatsGraphs'));

const UserStats: React.FC = () => {
  const { data, error, isLoading, makeRequest } = useFetch();

  useEffect(() => {
    (async function getData() {
      const token = window.localStorage.getItem('token');
      console.log({ token });

      if (token) {
        const { url, options } = STATS_GET(token);
        const { response, json } = await makeRequest(url, options);
        console.log({ response });
        console.log({ json });
      }

    })();
  }, [makeRequest]);


  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Suspense fallback={<div/>}>
      <UserStatsGraphs data={data} />
    </Suspense>
  );
}

export default UserStats;
