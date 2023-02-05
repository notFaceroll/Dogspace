import React, { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = useCallback(async (url: string, options: any) => {
    let response;
    let json;

    try {
      setError(null);
      setIsLoading(true);
      response = await fetch(url, options);
      json = await response.json();

      // @ts-ignore
      if (response.ok === false) throw new Error(json.message)
    } catch (error: any) {
      json = null
      setError(error.message)
    } finally {
      setData(json);
      setIsLoading(false);
      return { response, json }
    }
  }, []);

  return {
    data,
    error,
    isLoading,
    makeRequest,
  };
}

export default useFetch;
